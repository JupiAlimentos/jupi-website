const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent)
    const source = fileNode.sourceInstanceName

    const slug = createFilePath({ node, getNode, basePath: source })

    createNodeField({
      node,
      name: 'slug',
      value: `/${source}/${slug.slice(12)}`
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const workList = path.resolve('src/templates/work-list.js')
  const workPost = path.resolve('src/templates/work-post.js')
  const recipeList = path.resolve('src/templates/recipe-list.js')
  const recipePost = path.resolve('src/templates/recipe-post.js')

  return graphql(`
    {
      works: allMdx(
        filter: { fileAbsolutePath: { glob: "**/acoes/*.mdx" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
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
      recipes: allMdx(
        filter: { fileAbsolutePath: { glob: "**/receitas/*.mdx" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
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
    if (result.errors) {
      Promise.reject(result.errors)
    }

    const contentPerPage = 6

    const contentWorks = result.data.works.edges
    const contentRecipes = result.data.recipes.edges

    const numWorksPages = Math.ceil(contentWorks.length / contentPerPage)
    const numRecipesPages = Math.ceil(contentRecipes.length / contentPerPage)

    contentWorks.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: workPost,
        context: {
          slug: node.fields.slug
        }
      })
    })

    Array.from({ length: numWorksPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/acoes' : `acoes/page/${index + 1}`,
        component: workList,
        context: {
          limit: contentPerPage,
          skip: index * contentPerPage,
          numWorksPages,
          currentWorkPage: index + 1
        }
      })
    })

    contentRecipes.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: recipePost,
        context: {
          slug: node.fields.slug
        }
      })
    })

    Array.from({ length: numRecipesPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/receitas' : `receitas/page/${index + 1}`,
        component: recipeList,
        context: {
          limit: contentPerPage,
          skip: index * contentPerPage,
          numRecipesPages,
          currentRecipePage: index + 1
        }
      })
    })
  })
}
