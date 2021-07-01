import React from 'react'
import { graphql } from 'gatsby'

const ActionPost = ({ data }) => {
  const action = data.markdownRemark

  return (
    <>
      <h1>Title: {action.frontmatter.title} </h1>
      <div dangerouslySetInnerHTML={{ __html: action.html }} />
    </>
  )
}

export const query = graphql`
  query Action($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default ActionPost
