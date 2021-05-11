import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import Cover from '../components/Cover'

const Contact = () => (
  <Layout>
    <Seo title='Contato' />
    <section className='container mt-40'>
      <section className='container'>
        <h2 className='sidePdTxt topSectionHeadings'>
          Visite a Jupi Alimentos
        </h2>
      </section>
      <Cover>
        <StaticImage
          src='../images/cover-contact-jupi.jpg'
          alt='Visite a Jupi Alimentos'
          placeholder='blurred'
          layout='fullWidth'
        />
      </Cover>
      <p className='sidePdTxt infoCover'>
        Av. Prefeito Wall Ferraz, 13619 - Parque Jacinta, Teresina - PI,
        64035-180
      </p>
    </section>
    <section className='container'>
      <h2 className='sidePdTxt topSectionHeadings mb-0'>
        Fale com a Jupi Alimentos
      </h2>
      <div className='row innerContainer row-cols-md-2 row-cols-lg-3 g-3'>
        <div className='col'>
          <div className='generalBox'>
            <h4>Departamento Número 1</h4>
            <p>
              Entre em contato com nosso departamento number 1 das 8h às 18h de
              segunda a sexta.
            </p>
            <br />
            <p>
              <a href='tel:+558632220000' data-telegram='telegram'>
                (86) 3222-0000
              </a>
            </p>
            <p>
              <a href='mailto:departamento01@jupi.com.br'>
                departamento01@jupi.com.br
              </a>
            </p>
          </div>
        </div>
        <div className='col'>
          <div className='generalBox'>
            <h4>Departamento Número 2</h4>
            <p>
              Entre em contato com nosso departamento number 2 das 8h às 18h de
              segunda a sexta.
            </p>
            <br />
            <p>
              <a href='tel:+558632220000' data-telegram='telegram'>
                (86) 3222-0000
              </a>
            </p>
            <p>
              <a href='mailto:departamento01@jupi.com.br'>
                departamento01@jupi.com.br
              </a>
            </p>
          </div>
        </div>
        <div className='col'>
          <div className='generalBox'>
            <h4>Departamento Número 3</h4>
            <p>
              Entre em contato com nosso departamento number 3 das 8h às 18h de
              segunda a sexta.
            </p>
            <br />
            <p>
              <a href='tel:+558632220000' data-telegram='telegram'>
                (86) 3222-0000
              </a>
            </p>
            <p>
              <a href='mailto:departamento01@jupi.com.br'>
                departamento01@jupi.com.br
              </a>
            </p>
          </div>
        </div>
        <div className='col'>
          <div className='generalBox'>
            <h4>Departamento Número 4</h4>
            <p>
              Entre em contato com nosso departamento number 4 das 8h às 18h de
              segunda a sexta.
            </p>
            <br />
            <p>
              <a href='tel:+558632220000' data-telegram='telegram'>
                (86) 3222-0000
              </a>
            </p>
            <p>
              <a href='mailto:departamento01@jupi.com.br'>
                departamento01@jupi.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Contact
