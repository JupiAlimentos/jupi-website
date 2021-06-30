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
