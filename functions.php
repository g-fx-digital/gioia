<?php

add_theme_support( 'title-tag' );

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

add_action( 'wp_enqueue_scripts', 'rest_theme_scripts' );

// Register Front Page route.
// URL will be: domainname.ext/wp-json/my-namespace/v1/frontpage/
add_action( 'rest_api_init', function () {
	register_rest_route( 'gioia/v1', '/front/', array(
	  'methods' => 'GET',
	  'callback' => 'get_frontpage',
	) );
  } );


// Callback function.
function get_frontpage( $object ) {

  // Get WP options front page from settings > reading.
  $frontpage_id = get_option('page_on_front');

  // Handle if error.
  if ( empty( $frontpage_id ) ) {
    // return error
    return 'error';
  }

  // Create request from pages endpoint by frontpage id.
  $request  = new \WP_REST_Request( 'GET', '/wp/v2/pages/' . $frontpage_id );

  // Parse request to get data.
  $response = rest_do_request( $request );

  // Handle if error.
  if ( $response->is_error() ) {
     return 'error';
  }

  return $response->get_data();
}

