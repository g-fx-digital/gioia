<?php

add_theme_support( 'title-tag' );
add_theme_support( 'custom-logo' );

function rest_theme_scripts() {
	// wp_enqueue_style( 'normalize', get_template_directory_uri() . '/assets/normalize.css', false, '3.0.3' );
	// wp_enqueue_style( 'style', get_stylesheet_uri(), array( 'normalize' ) );
	$base_url  = esc_url_raw( home_url() );
	$base_path = rtrim( parse_url( $base_url, PHP_URL_PATH ), '/' );
	wp_enqueue_script( 'rest-theme-vue', get_template_directory_uri() . '/dist/main.js', array(), '1.0.0', true );
	wp_localize_script( 'rest-theme-vue', 'wp', array(
		'root'      => esc_url_raw( rest_url() ),
		'base_url'  => $base_url,
		'base_path' => $base_path ? $base_path . '/' : '/',
		'nonce'     => wp_create_nonce( 'wp_rest' ),
		'site_name' => get_bloginfo( 'name' ),
	) );
}

add_action('wp_enqueue_scripts', 'rest_theme_scripts' );

add_action('rest_api_init', function() {
  register_rest_route( 
    'gioia/v1', '/mainMenu/', array(
      'methods' => 'GET',
      'callback' => 'get_primary_menu'
    )
  );
});

function register_menus() {
  register_nav_menus(
    array(
      'main-menu' => __( 'Menú principal' ),
      'social-menu' => __( 'Menú social' )
    )
  );
}
add_action( 'init', 'register_menus' );


function get_primary_menu() {
  $menus = get_registered_nav_menus();

  foreach ( $menus as $location => $description ) 
    if ($location === "main-menu") return wp_get_nav_menu_items(wp_get_nav_menu_name($location));
  
  return 'Error: no primary navigation menu specified.';
}

// Register Front Page route.
// URL will be: domainname.ext/wp-json/my-namespace/v1/frontpage/
add_action('rest_api_init', function() {
	register_rest_route(
    'gioia/v1', '/front/', array(
      'methods' => 'GET',
      'callback' => 'get_frontpage',
    )
  );
});

add_action('rest_api_init', function() {
  register_rest_route( 
    'gioia/v1', '/logo/', array(
      'methods' => 'GET',
      'callback' => 'get_logo_url',
    )
  );
});


function get_logo_url(){
  $custom_logo_id = get_theme_mod( 'custom_logo' );
  $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
  return $image[0];
}

// Callback function.
function get_frontpage( $object ) {
  // Get WP options front page from settings > reading.
  $frontpage_id = get_option('page_on_front');
  // Handle if error.
  if (!empty( $frontpage_id ) ) {
    // Create request from pages endpoint by frontpage id.
    $request  = new \WP_REST_Request( 'GET', '/wp/v2/pages/' . $frontpage_id );
    // Parse request to get data.
    $response = rest_do_request( $request );
    if (!$response->is_error()) return $response->get_data();
  }
  // Handle if error.
  return 'error';
}


/**
 * dunno if this would work...
 */

add_action( 'rest_api_init', 'register_api_hooks' );

function register_api_hooks() {
  register_rest_route(
    'gioia/v1', '/login/',
    array(
      'methods'  => 'POST',
      'callback' => 'login',
    )
  );
}

function login($request){
    $creds = array();
    $creds['user_login'] = $request["username"];
    $creds['user_password'] =  $request["password"];
    $creds['remember'] = true;
    $user = wp_signon( $creds, false );

    if ( is_wp_error($user) )
      return $user->get_error_message();

    return $user;
}

add_action( 'after_setup_theme', 'custom_login' );
  
