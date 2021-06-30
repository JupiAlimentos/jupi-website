import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import CardBox from '../components/CardBox'
import { useStaticQuery, graphql } from 'gatsby'

const Actions = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                description
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  const actionList = allMarkdownRemark.edges

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

export default Actions
