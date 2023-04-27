/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `nabate`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
              endpoint: 'https://hotmail.us14.list-manage.com/subscribe/post?u=6ce8463b76a0bfa56fc2d399c&amp;id=54836b9956&amp;f_id=00d796e0f0', // Remplacez cette valeur par votre API endpoint Mailchimp
            },
          },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
              postCssPlugins: [require(`tailwindcss`)],
            },
          },
        {
            resolve: "gatsby-source-wordpress", 
            options: {
                url: "http://nabate.local/graphql",
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-plugin-netlify",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};
