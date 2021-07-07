import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import Cover from '../components/Cover'

const About = () => (
  <Layout>
    <Seo title='Sobre Nós' />
    <section className='container mt-main'>
      <Cover>
        <StaticImage
          src='../images/cover-contact-jupi.jpg'
          alt='Visite a Jupi Alimentos'
          placeholder='blurred'
          layout='fullWidth'
        />
      </Cover>
    </section>
    <div className='container verticalSpacer'>
      <div className='row'>
        <div className='col-12 col-lg-10 offset-lg-1 verticalTxtSpacer'>
          <h1 className='postTitle'>Conheça a nossa história</h1>
          <p className='highlightBody'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
          </p>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='wrapperBoxWhite'>
            <h1>Nossa cultura</h1>
            <p className='highlightBody'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore.
            </p>
            <hr className='divider' />
            <div className='row'>
              <div className='col-lg-4'>
                <div className='contextBox'>
                  <h4>Missão</h4>
                  <p>
                    A Jupi Alimentos e nossas iniciativas de sustentabilidade
                    estão impulsionando o futuro dos alimentos e desafiando o
                    que significa ser uma importante ação no setor. Desde o
                    cultivo dos grãos em fazendas modernas onde as práticas de
                    fabricação responsáveis ​​e membros ativos de nossas
                    comunidades onde vivemos e trabalhamos.
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='contextBox'>
                  <h4>Visão</h4>
                  <p>
                    A Jupi Alimentos e nossas iniciativas de sustentabilidade
                    estão impulsionando o futuro dos alimentos e desafiando o
                    que significa ser uma importante ação no setor. Desde o
                    cultivo dos grãos em fazendas modernas onde as práticas de
                    fabricação responsáveis ​​e membros ativos de nossas
                    comunidades onde vivemos e trabalhamos.
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='contextBox mb-0'>
                  <h4>Valores</h4>
                  <p>
                    A Jupi Alimentos e nossas iniciativas de sustentabilidade
                    estão impulsionando o futuro dos alimentos e desafiando o
                    que significa ser uma importante ação no setor. Desde o
                    cultivo dos grãos em fazendas modernas onde as práticas de
                    fabricação responsáveis ​​e membros ativos de nossas
                    comunidades onde vivemos e trabalhamos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
