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
        <div className='row'>
          <header className='col-12 col-lg-8 offset-lg-2'>
            <h1 className='postTitle'>{action.frontmatter.title}</h1>
            <h2 className='postDescription'>
              {action.frontmatter.description}
            </h2>
            <p className='postDate'>
              {action.frontmatter.date}
              <span> • </span>
              {action.timeToRead} min de leitura
            </p>
          </header>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-10 offset-lg-1'>
            <Cover className='mb-0'>
              <GatsbyImage
                image={image}
                alt={action.frontmatter.title}
                placeholder='blurred'
                layout='fullWidth'
              />
            </Cover>
          </div>
        </div>
      </section>
      <div className='container verticalSpacer'>
        <div className='row'>
          <div className='col-12 col-lg-8 offset-lg-2 verticalTxtSpacer'>
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
      timeToRead
    }
  }
`

export default ActionPost
