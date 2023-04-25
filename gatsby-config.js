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
        "gatsby-plugin-google-gtag",
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
