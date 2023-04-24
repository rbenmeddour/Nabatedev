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
//     // let template = path.resolve("./src/template/page.js")
//     // if (node.slug === 'history') {
//     //   template = path.resolve("./src/template/history.js")
//     // } else if (node.slug === 'contacts') {
//     //   template = path.resolve("./src/template/contacts.js") ;
//     // } else if (node.slug === 'products') {
//     //   template = path.resolve("./src/template/products.js");
//     // }
//     createPage({
//       path: `/${node.slug}`,
//       component: template, 
//       context: {
//         id: node.id,
//       },
//     })
//   })
// }
