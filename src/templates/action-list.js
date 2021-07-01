import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import CardBox from '../components/CardBox'

const ListOfActions = props => {
  const actionList = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <Seo title='Ações' />

      <div className='container'>
        <h2 className='topSectionHeadings'>Últimas Ações</h2>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
          {actionList.map(
            ({
              node: {
                id,
                frontmatter: { description, title },
                fields: { slug }
              }
            }) => (
              <div key={id} className='col d-flex'>
                <CardBox titleCard={title} infoCard={description} slug={slug}>
                  <StaticImage
                    src='../images/actions/action01.jpg'
                    alt={title}
                    placeholder='blurred'
                    layout='fullWidth'
                  />
                </CardBox>
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query actionList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
`

export default ListOfActions
