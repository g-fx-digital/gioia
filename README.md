# Gioia - a WordPress and WooCommerce theme powered by Vue.js

This theme is designed to be powerful. It's compatible with WordPress and WooCommerce.

## Requirements (from [WPGraphQL](https://docs.wpgraphql.com/extensions/wpgraphql-woocommerce))

1. Install & activate WooCommerce in order to use WooCommerce functionality.
2. Install & activate WPGraphQL.
3. (Optional) Install & activate WPGraphQL-JWT-Authentication to add a login mutation that returns a JSON Web Token.
4. (If using WooCommerce) Clone or download the extension & activate the WP GraphQL WooCommerce plugin.

## What does use this theme?

This theme uses: Vue.js, Vuetify, Axios, GraphQL, Apollo, WebPack and Babel.

## How to build
First, install everything with Yarn (`npm` is evil). Afterwards, build it either in dev or prod mode.

In development: 
```bash
yarn watch
```

Production:
```bash
yarn build
```