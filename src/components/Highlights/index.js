import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Button from '../Button'

import {
  HighlightsWrapper,
  Highlight,
  HighlightTitle,
  HighlightInfo
} from './style'

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
      <HighlightsWrapper className='row verticalSpacer'>
        <div className='col-12'>
          <Highlight>
            <HighlightTitle>Goma Para Tapioca</HighlightTitle>
            <Img
              fluid={productImage01.childImageSharp.fluid}
              alt='Família Jupi'
            />
            <HighlightInfo>
              A tapioca nossa de cada dia é consumida de várias formas e deixou
              de ser só mais…
            </HighlightInfo>
            <Button
              slug='/produtos'
              buttonClass='yellowButton'
              buttonTitle='Saiba mais'
            >
              Saiba mais
            </Button>
          </Highlight>
        </div>
        <div className='col-12'>
          <Highlight>
            <HighlightTitle>Fava</HighlightTitle>
            <Img
              fluid={productImage02.childImageSharp.fluid}
              alt='Família Jupi'
            />
            <HighlightInfo>
              A tapioca nossa de cada dia é consumida de várias formas e deixou
              de ser só mais…
            </HighlightInfo>
            <Button
              slug='/produtos'
              buttonClass='yellowButton'
              buttonTitle='Saiba mais'
            >
              Saiba mais
            </Button>
          </Highlight>
        </div>
        <div className='col-12'>
          <Highlight>
            <HighlightTitle>Flocão de Milho</HighlightTitle>
            <Img
              fluid={productImage03.childImageSharp.fluid}
              alt='Família Jupi'
            />
            <HighlightInfo>
              A tapioca nossa de cada dia é consumida de várias formas e deixou
              de ser só mais…
            </HighlightInfo>
            <Button
              slug='/produtos'
              buttonClass='yellowButton'
              buttonTitle='Saiba mais'
            >
              Saiba mais
            </Button>
          </Highlight>
        </div>
        <div className='col-12'>
          <Highlight>
            <HighlightTitle>Flocão de Arroz</HighlightTitle>
            <Img
              fluid={productImage04.childImageSharp.fluid}
              alt='Família Jupi'
            />
            <HighlightInfo>
              A tapioca nossa de cada dia é consumida de várias formas e deixou
              de ser só mais…
            </HighlightInfo>
            <Button
              slug='/produtos'
              buttonClass='yellowButton'
              buttonTitle='Saiba mais'
            >
              Saiba mais
            </Button>
          </Highlight>
        </div>
      </HighlightsWrapper>
    </section>
  )
}

export default Highlights
