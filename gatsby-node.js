// const path = require(`path`)
// // Log out information after a build is done
// exports.onPostBuild = ({ reporter }) => {
//   reporter.info(`Your Gatsby site has been built!`)
// }
// // Create blog pages dynamically
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const pageTemplate = path.resolve(`src/ `)
//   const result = await graphql(`
//     query {
//       allWpPage {
//         edges {
//           node {
//             content
//           }
//         }
//       }
//     }
//   `)
//   result.data.allSamplePages.edges.forEach(edge => {
//     createPage({
//       path: `${edge.node.slug}`,
//       component: pageTemplate,
//       context: {
//         title: edge.node.title,
//       },
//     })
//   })
// }