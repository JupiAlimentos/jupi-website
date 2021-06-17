import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import CardBox from '../CardBox'
import Button from '../Button'

const SocialActions = () => {
  return (
    <section className='container'>
      <h2 className='sectionHeadings'>Ações Sociais</h2>
      <div className='row'>
        <div className='col-md-12 col-lg-4 d-flex'>
          <CardBox
            titleCard='Tem degustação no Carvalho Super'
            infoCard='No aniversário do @carvalhosupermercado da Santa Maria da Codipi, em Teresina, levamos uma degustação do melhor cuscuz do Brasil. Até a Dona Van Fernandes provou e aprovou o cuscuz feito com o Flocão de Milho Jupi. E você? Já provou seu cuscuz JUPI hoje?'
          >
            <StaticImage
              src='../../images/actions/action01.jpg'
              alt='Tem degustação no Carvalho Super'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col-md-6 col-lg-4 d-flex'>
          <CardBox
            titleCard='Aula Show com Lia Formiga'
            infoCard='Lia Formiga, uma das maiores especialistas em culinária e gastronomia, esteve no Carvalho Super da Avenida Joaquim Nelson no Dirceu, na primeira Aula Show! O evento foi gratuito e os participantes puderam aprender as melhores receitas com produtos Jupi para usar no dia a dia!'
          >
            <StaticImage
              src='../../images/actions/action02.jpg'
              alt='Aula Show com Lia Formiga'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col-md-6 col-lg-4 d-flex'>
          <CardBox
            titleCard='Jupi também na Cidade Junina'
            infoCard='A Jupi esteve presente nos 8 dias do Cidade Junina, levando muita alegria e, é claro, com as delícias preparadas com os produtos JUPI. Agradecemos a oportunidade de fazer parte da maior festa junina do Piauí.'
          >
            <StaticImage
              src='../../images/actions/action03.jpg'
              alt='Jupi também na Cidade Junina'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
      </div>
      <p className='mt-40 d-flex flex-drct'>
        <Button
          slug='/acoes'
          buttonClass='secondaryButton endButton'
          buttonTitle='Veja todas as ações'
        >
          Veja todas as ações
        </Button>
      </p>
    </section>
  )
}

export default SocialActions
