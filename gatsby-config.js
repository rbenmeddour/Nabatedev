require("dotenv").config({
    path: `.env`,
  })

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
            resolve: `gatsby-plugin-postcss`,
            options: {
              postCssPlugins: [require(`tailwindcss`)],
            },
          },
        {
            resolve: "gatsby-source-wordpress", 
            options: {
                url: "http://yaseenb1.sg-host.com/graphql",
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-plugin-netlify",
        "gatsby-transformer-sharp",
    ],
};
