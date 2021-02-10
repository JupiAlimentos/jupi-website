import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
        <div className='col-md-12 col-lg-4'>
          <article className='cardBox'>
            <Img
              fluid={actionImage01.childImageSharp.fluid}
              alt='Família Jupi'
            />
            <h4>Tem degustação no Carvalho Super</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              ratione laborum incidunt corrupti, voluptatum, tempora quaerat at
              vero odio assumenda harum provident. Cupiditate porro vitae odit
              quod cum sed provident?
            </p>
            <Link className='linkText' to='/acoes'>
              Veja mais <span className='arrow' />
            </Link>
          </article>
        </div>
        <div className='col-md-6 col-lg-4'>
          <article className='cardBox'>
            <Img
              fluid={actionImage03.childImageSharp.fluid}
              alt='Família Jupi'
            />
            <h4>Aula Show com Lia Formiga</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              ratione laborum incidunt corrupti, voluptatum, tempora quaerat at
              vero odio assumenda harum provident. Cupiditate porro vitae odit
              quod cum sed provident?
            </p>
            <Link className='linkText' to='/acoes'>
              Veja mais <span className='arrow' />
            </Link>
          </article>
        </div>
        <div className='col-md-6 col-lg-4'>
          <article className='cardBox'>
            <Img
              fluid={actionImage02.childImageSharp.fluid}
              alt='Família Jupi'
            />
            <h4>Jupi também na Cidade Junina</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              ratione laborum incidunt corrupti, voluptatum, tempora quaerat at
              vero odio assumenda harum provident. Cupiditate porro vitae odit
              quod cum sed provident?
            </p>
            <Link className='linkText' to='/acoes'>
              Veja mais <span className='arrow' />
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SocialActions
