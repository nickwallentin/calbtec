const path = require("path")

const slugify = name => {
  const slug = name
    .replace(/\s+/g, "-")
    .replace(/[åä]+/g, "a")
    .replace(/ö+/g, "o")
    .toLowerCase()
  return slug
}

module.exports.onCreateNode = ({ node, actions }) => {
  // Transform the new node here and create a new node or
  // create a new node field.
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = `/case/${slugify(node.frontmatter.title)}`
    createNodeField({
      //same as node: node
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //dynamically create pages here
  //get path to template
  const caseTemplate = path.resolve("./src/templates/caseTemplate.js")
  //get slugs
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: caseTemplate,
      path: edge.node.fields.slug,
      context: {
        id: edge.node.id,
      },
    })
  })
}
