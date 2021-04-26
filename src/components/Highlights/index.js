import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Button from '../Button'

import {
  HighlightsSpacer,
  HighlightsWrapper,
  Highlight,
  HighlightTitle,
  HighlightWrapperInfo,
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
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        productImage02: file(relativePath: { eq: "products/fava.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        productImage03: file(
          relativePath: { eq: "products/flocao-milho.png" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        productImage04: file(
          relativePath: { eq: "products/flocao-arroz.png" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  )

  return (
    <HighlightsSpacer className='container'>
      <h2 className='sectionHeadings'>Destaques</h2>
      <HighlightsWrapper className='row'>
        <div className='col-12'>
          <Highlight>
            <HighlightTitle>Goma Para Tapioca</HighlightTitle>
            <GatsbyImage
              fluid={productImage01.childImageSharp.gatsbyImageData}
              alt='Família Jupi'
            />
            <HighlightWrapperInfo>
              <HighlightInfo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                commodi ipsa ex, quos, animi quae omnis aliquam porro sunt
                impedit consequatur. Quod accusamus sit velit, molestias quo
                maiores quasi deserunt.
              </HighlightInfo>
            </HighlightWrapperInfo>
            <Button
              slug='/produtos'
              buttonClass='primaryButton'
              buttonTitle='Saiba mais'
            >
              Saiba mais
            </Button>
          </Highlight>
        </div>
        <div className='col-12'>
          <Highlight>
            <HighlightTitle>Fava</HighlightTitle>
            <GatsbyImage
              fluid={productImage02.childImageSharp.gatsbyImageData}
              alt='Família Jupi'
            />
            <HighlightWrapperInfo>
              <HighlightInfo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                possimus? Molestiae nesciunt optio odit veniam laboriosam iusto
                numquam odio magnam. Perspiciatis beatae cupiditate voluptatum
                amet doloribus temporibus ea odit possimus.
              </HighlightInfo>
            </HighlightWrapperInfo>
            <Button
              slug='/produtos'
              buttonClass='primaryButton'
              buttonTitle='Saiba mais'
            >
              Saiba mais
            </Button>
          </Highlight>
        </div>
        <div className='col-12'>
          <Highlight>
            <HighlightTitle>Flocão de Milho</HighlightTitle>
            <GatsbyImage
              fluid={productImage03.childImageSharp.gatsbyImageData}
              alt='Família Jupi'
            />
            <HighlightWrapperInfo>
              <HighlightInfo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                possimus? Molestiae nesciunt optio odit veniam laboriosam iusto
                numquam odio magnam. Perspiciatis beatae cupiditate voluptatum
                amet doloribus temporibus ea odit possimus.
              </HighlightInfo>
            </HighlightWrapperInfo>
            <Button
              slug='/produtos'
              buttonClass='primaryButton'
              buttonTitle='Saiba mais'
            >
              Saiba mais
            </Button>
          </Highlight>
        </div>
        <div className='col-12'>
          <Highlight>
            <HighlightTitle>Flocão de Arroz</HighlightTitle>
            <GatsbyImage
              fluid={productImage04.childImageSharp.gatsbyImageData}
              alt='Família Jupi'
            />
            <HighlightWrapperInfo>
              <HighlightInfo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                possimus? Molestiae nesciunt optio odit veniam laboriosam iusto
                numquam odio magnam. Perspiciatis beatae cupiditate voluptatum
                amet doloribus temporibus ea odit possimus.
              </HighlightInfo>
            </HighlightWrapperInfo>
            <Button
              slug='/produtos'
              buttonClass='primaryButton'
              buttonTitle='Saiba mais'
            >
              Saiba mais
            </Button>
          </Highlight>
        </div>
      </HighlightsWrapper>
    </HighlightsSpacer>
  )
}

export default Highlights
