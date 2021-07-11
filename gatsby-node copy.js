const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// To add the slug field to each work/post
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
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
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              description
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              coverImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const works = result.data.allMdx.edges

    works.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/work-post.js'),
        context: {
          slug: node.fields.slug
        }
      })
    })

    const worksPerPage = 6
    const numPages = Math.ceil(works.length / worksPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/acoes' : `acoes/page/${index + 1}`,
        component: path.resolve('./src/templates/work-list.js'),
        context: {
          limit: worksPerPage,
          skip: index * worksPerPage,
          numPages,
          currentPage: index + 1
        }
      })
    })
  })
}
