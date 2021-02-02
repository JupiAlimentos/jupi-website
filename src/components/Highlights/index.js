import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { HighlightsWrapper } from './style'

const Highlights = () => {
  const {
    productImage01,
    productImage02,
    productImage03,
    productImage04
  } = useStaticQuery(
    graphql`
      query {
        productImage01: file(relativePath: { eq: "products/tapioca.png" }) {
          childImageSharp {
            fluid(maxWidth: 576) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        productImage02: file(relativePath: { eq: "products/fava.png" }) {
          childImageSharp {
            fluid(maxWidth: 576) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        productImage03: file(
          relativePath: { eq: "products/flocao-milho.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 576) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        productImage04: file(
          relativePath: { eq: "products/flocao-arroz.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 576) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <section className='container'>
      <HighlightsWrapper className='row'>
        <div className='col-4'>
          <div className='inner'>
            <Img
              fluid={productImage01.childImageSharp.fluid}
              alt='Família Jupi'
            />
          </div>
        </div>
        <div className='col-4'>
          <div className='inner'>
            <Img
              fluid={productImage02.childImageSharp.fluid}
              alt='Família Jupi'
            />
          </div>
        </div>
        <div className='col-4'>
          <div className='inner'>
            <Img
              fluid={productImage03.childImageSharp.fluid}
              alt='Família Jupi'
            />
          </div>
        </div>
        <div className='col-4'>
          <div className='inner'>
            <Img
              fluid={productImage04.childImageSharp.fluid}
              alt='Família Jupi'
            />
          </div>
        </div>
      </HighlightsWrapper>
    </section>
  )
}

export default Highlights
