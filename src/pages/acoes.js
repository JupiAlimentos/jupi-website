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
            titleCard='Cuscuz Jupi, o melhor do Brasil'
            infoCard='tem degustação no Carvalho Super da Santa Maria da CODIPI.'
            slug='/acoes'
          >
            <StaticImage
              src='../images/actions/action01.jpg'
              alt='Cuscuz Jupi, o melhor do Brasil'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Quintanda Jupi'
            infoCard='A marca dos melhores produtos da sua mesa presente também na Cidade Junina.'
            slug='/acoes'
          >
            <StaticImage
              src='../images/actions/action02.jpg'
              alt='Quintanda Jupi'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Aula Show com Lia Formiga'
            infoCard='A reconhecida especialista em culinaria e as receitas com produtos Jupi pra você usar no seu dia-a-dia.'
            slug='/acoes'
          >
            <StaticImage
              src='../images/actions/action03.jpg'
              alt='Aula Show com Lia Formiga'
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
