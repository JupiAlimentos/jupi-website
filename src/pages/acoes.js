import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import CardBox from '../components/CardBox'

const Actions = () => (
  <Layout>
    <Seo title='Ações' />
    <div className='container'>
      <h2 className='topSectionHeadings'>Últimas Ações</h2>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
        <div className='col d-flex'>
          <CardBox
            titleCard='Cuscuz Jupi, o melhor do Brasil, tem degustação no Carvalho Super da Santa Maria da CODIPI.'
            infoCard='No aniversário do @carvalhosupermercado da Santa Maria da Codipi, em Teresina, levamos uma degustação do melhor cuscuz do Brasil.'
            slug='/acoes'
          >
            <StaticImage
              src='../images/actions/action01.jpg'
              alt='Cuscuz Jupi, o melhor do Brasil, tem degustação no Carvalho Super da Santa Maria da CODIPI.'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Quintanda Jupi, a marca dos melhores produtos da sua mesa presente também na Cidade Junina.'
            infoCard='A Jupi esteve presente nos 8 dias do Cidade Junina, levando muita alegria e, é claro, com as delícias preparadas com os produtos JUPI.'
            slug='/acoes'
          >
            <StaticImage
              src='../images/actions/action02.jpg'
              alt='Quintanda Jupi, a marca dos melhores produtos da sua mesa presente também na Cidade Junina.'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Aula Show com Lia Formiga. A reconhecida especialista em culinaria e as receitas com produtos Jupi pra você usar no seu dia-a-dia.'
            infoCard='Lia Formiga, uma das maiores especialistas em culinária e gastronomia, esteve no Carvalho Super da Avenida Joaquim Nelson no Dirceu, na primeira Aula Show!'
            slug='/acoes'
          >
            <StaticImage
              src='../images/actions/action03.jpg'
              alt='Aula Show com Lia Formiga. A reconhecida especialista em culinaria e as receitas com produtos Jupi pra você usar no seu dia-a-dia.'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Festival Gastronômico Maria Isabel. Os produtos e a valorização da culinária piauiense.'
            infoCard='O Festival Gastronômico Maria Isabel, que teve a participação da JUPI Alimentos, valorizou bastante a culinária do nosso Estado...'
            slug='/acoes'
          >
            <StaticImage
              src='../images/actions/action04.jpg'
              alt='Festival Gastronômico Maria Isabel. Os produtos e a valorização da culinária piauiense.'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Roleta da Sorte é mais uma promoção da JUPI, mais sorte pra você.'
            infoCard='Os participantes do Festival Gastronômico Maria Isabel puderam experimentar pratos deliciosos da culinária regional...'
            slug='/acoes'
          >
            <StaticImage
              src='../images/actions/action05.jpg'
              alt='Roleta da Sorte é mais uma promoção da JUPI, mais sorte pra você.'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Mix Atacarejo, é claro que a JUPI está presente!'
            infoCard='O lançamento do Mix Atacarejo em Teresina contou com a presença sempre destacada da JUPi Alimentos.'
            slug='/acoes'
          >
            <StaticImage
              src='../images/actions/action06.jpg'
              alt='Mix Atacarejo, é claro que a JUPI está presente!'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
      </div>
    </div>
  </Layout>
)

export default Actions
