import React from 'react'
import { Link } from 'gatsby'

import { StaticImage } from 'gatsby-plugin-image'

import CardBox from '../CardBox'
import Button from '../Button'

const SocialActions = () => {
  return (
    <section className='container'>
      <h2 className='sectionHeadings'>Ações Sociais</h2>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
        <div className='col-md-12 col-lg-4 d-flex'>
          <CardBox
            titleCard='Qual emoji respresenta você comendo Jupi?'
            infoCard='O Safadão irá escolher três comentários para responder com o emoji preferido dele!'
            slug='/acoes/qual-emoji-respresenta-voce-comendo-jupi/'
          >
            <Link
              to='/acoes/qual-emoji-respresenta-voce-comendo-jupi/'
              title='Qual emoji respresenta você comendo Jupi?'
            >
              <StaticImage
                src='../../../static/assets/images/action07-01.jpg'
                alt='Qual emoji respresenta você comendo Jupi?'
                placeholder='blurred'
                layout='fullWidth'
              />
            </Link>
          </CardBox>
        </div>
        <div className='col-md-6 col-lg-4 d-flex'>
          <CardBox
            titleCard='Mix Atacarejo Teresina. É claro que a JUPI está presente!'
            infoCard='O Mix Atacarejo em Teresina contou com a presença sempre destacada da JUPi.'
            slug='/acoes/mix-atacarejo-teresina–e-claro-que-a-jupi-esta-presente/'
          >
            <Link
              to='/acoes/mix-atacarejo-teresina–e-claro-que-a-jupi-esta-presente/'
              title='Mix Atacarejo Teresina. É claro que a JUPI está presente!'
            >
              <StaticImage
                src='../../../static/assets/images/action06-01.jpg'
                alt='Mix Atacarejo Teresina. É claro que a JUPI está presente!'
                placeholder='blurred'
                layout='fullWidth'
              />
            </Link>
          </CardBox>
        </div>
        <div className='col-md-6 col-lg-4 d-flex'>
          <CardBox
            titleCard='A JUPI no Festival Gastronômico Maria Isabel'
            infoCard='Os produtos e a valorização da culinária piauiense.'
            slug='/acoes/a-jupi-no-festival-gastronômico-maria-isabel/'
          >
            <Link
              to='/acoes/a-jupi-no-festival-gastronômico-maria-isabel/'
              title='A JUPI no Festival Gastronômico Maria Isabel'
            >
              <StaticImage
                src='../../../static/assets/images/action05-01.jpg'
                alt='A JUPI no Festival Gastronômico Maria Isabel'
                placeholder='blurred'
                layout='fullWidth'
              />
            </Link>
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
