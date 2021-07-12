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
        <div className='col-12 d-flex'>
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
                Sabor e energia para começar o dia, para o lanche e para todo
                momento. Produzido a partir de milho não...
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
        <div className='col-12 d-flex'>
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
                O queridinho dos brasileiros! Possui grãos de cor bege e rajas
                marrom que lembram o calçadão de Copacabana...
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
        <div className='col-12 d-flex'>
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
                Sucesso absoluto, faz bonito em todas as horas. A Goma de
                Mandioca Jupi tem qualidade e...
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
        <div className='col-12 d-flex'>
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
                Faz sucesso desde a época da vovó e só de pensar dá água na
                boca! Tipicamente brasileira, a canjica...
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
