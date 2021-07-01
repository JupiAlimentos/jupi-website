const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// To add the slug field to each action/post
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'actions' })

    createNodeField({
      node,
      name: 'slug',
      value: `/acoes/${slug.slice(12)}`
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              description
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const actions = result.data.allMarkdownRemark.edges

    actions.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/action-post.js'),
        context: {
          slug: node.fields.slug
        }
      })
    })

    const actionsPerPage = 6
    const numPages = Math.ceil(actions.length / actionsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/acoes' : `acoes/page/${index + 1}`,
        component: path.resolve('./src/templates/action-list.js'),
        context: {
          limit: actionsPerPage,
          skip: index * actionsPerPage,
          numPages,
          currentPage: index + 1
        }
      })
    })
  })
}
