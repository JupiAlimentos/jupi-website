import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import Cover from '../components/Cover'

const ActionPost = ({ data }) => {
  const action = data.mdx
  const image = getImage(action.frontmatter.coverImage)

  return (
    <Layout>
      <Seo title={action.frontmatter.title} />
      <section className='container mt-main'>
        <Cover>
          <GatsbyImage
            image={image}
            alt={action.frontmatter.title}
            placeholder='blurred'
            layout='fullWidth'
          />
        </Cover>
      </section>
      <div className='container verticalSpacer'>
        <div className='row'>
          <div className='col-12 col-lg-10 offset-lg-1 verticalTxtSpacer'>
            <h1 className='mainTitle'>{action.frontmatter.title}</h1>
            <p>{action.frontmatter.description}</p>
            <main className='highlightBody'>
              <MDXRenderer>{action.body}</MDXRenderer>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Action($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        coverImage {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: CONSTRAINED
            )
          }
        }
      }
      body
    }
  }
`

export default ActionPost
