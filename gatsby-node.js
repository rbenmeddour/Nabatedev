// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const pageTemplate = path.resolve("./src/template/page.js")

//   const result = await graphql(`
//     {
//       allWpPage {
//         nodes {
//           id
//           slug
//         }
//       }
//     }
//   `)

//   result.data.allWpPage.nodes.forEach(node => {
//     createPage({
//       path: `/${node.slug}`,
//       component: pageTemplate,
//       context: {
//         id: node.id,
//       },
//     })
//   })
// }
