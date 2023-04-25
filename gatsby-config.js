require("dotenv").config({
    path: `.env`,
  })

module.exports = {
    siteMetadata: {
        title: `nabate`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        // {
        //     resolve: `gatsby-plugin-env-variables`,
        //     options: {
        //       allowList: ["GATSBY_SERVICE_ID", "GATSBY_TEMPLATE_ID", "GATSBY_PUBLICKEY"],
        //     },
        //   },
        // {
        //     resolve: `gatsby-source-custom`,
        //     options: {
        //       publicKey: process.env.PUBLICKEY,
        //       serviceKey: process.env.SERVICE_ID,
        //       templateID: process.env.TEMPLATE_ID
        //     },
        //   },
        
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
