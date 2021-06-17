import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

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
  return (
    <HighlightsSpacer className='container'>
      <h2 className='sectionHeadings'>Destaques</h2>
      <HighlightsWrapper className='row'>
        <div className='col-12'>
          <Highlight>
            <HighlightTitle>Flocão de Milho</HighlightTitle>
            <StaticImage
              src='../../images/products/flocao-milho.png'
              alt='Família Jupi'
              placeholder='blurred'
              layout='fullWidth'
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
            <HighlightTitle>Feijão Carioca</HighlightTitle>
            <StaticImage
              src='../../images/products/feijao-carioca.png'
              alt='Família Jupi'
              placeholder='blurred'
              layout='fullWidth'
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
            <HighlightTitle>Goma de Mandioca</HighlightTitle>
            <StaticImage
              src='../../images/products/goma-mandioca.png'
              alt='Família Jupi'
              placeholder='blurred'
              layout='fullWidth'
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
            <HighlightTitle>Canjica Amarela</HighlightTitle>
            <StaticImage
              src='../../images/products/canjica-amarela.png'
              alt='Família Jupi'
              placeholder='blurred'
              layout='fullWidth'
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
