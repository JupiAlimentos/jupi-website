import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import CardBox from '../CardBox'
import Button from '../Button'

const SocialActions = () => {
  const { actionImage01, actionImage02, actionImage03 } = useStaticQuery(
    graphql`
      query {
        actionImage01: file(relativePath: { eq: "actions/action01.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        actionImage02: file(relativePath: { eq: "actions/action02.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        actionImage03: file(relativePath: { eq: "actions/action03.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <section className='container'>
      <h2 className='sectionHeadings'>Ações Sociais</h2>
      <div className='row'>
        <div className='col-md-12 col-lg-4 d-flex'>
          <CardBox
            imageCard={actionImage01.childImageSharp.gatsbyImageData}
            titleCard='Tem degustação no Carvalho Super'
            infoCard='No aniversário do @carvalhosupermercado da Santa Maria da Codipi, em Teresina, levamos uma degustação do melhor cuscuz do Brasil. Até a Dona Van Fernandes provou e aprovou o cuscuz feito com o Flocão de Milho Jupi. E você? Já provou seu cuscuz JUPI hoje?'
          />
        </div>
        <div className='col-md-6 col-lg-4 d-flex'>
          <CardBox
            imageCard={actionImage03.childImageSharp.gatsbyImageData}
            titleCard='Aula Show com Lia Formiga'
            infoCard='Lia Formiga, uma das maiores especialistas em culinária e gastronomia, esteve no Carvalho Super da Avenida Joaquim Nelson no Dirceu, na primeira Aula Show! O evento foi gratuito e os participantes puderam aprender as melhores receitas com produtos Jupi para usar no dia a dia!'
          />
        </div>
        <div className='col-md-6 col-lg-4 d-flex'>
          <CardBox
            imageCard={actionImage02.childImageSharp.gatsbyImageData}
            titleCard='Jupi também na Cidade Junina'
            infoCard='A Jupi esteve presente nos 8 dias do Cidade Junina, levando muita alegria e, é claro, com as delícias preparadas com os produtos JUPI. Agradecemos a oportunidade de fazer parte da maior festa junina do Piauí.'
          />
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
