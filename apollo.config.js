// apollo.config.js
module.exports = {
    client: {
        service: {
            name: 'gioia',
            // URL to the GraphQL API
            url: 'http://localhost/graphql',
        },
        // Files processed by the extension
        includes: [
            'src/**/*.vue',
            'src/**/*.js',
        ],
    },
}