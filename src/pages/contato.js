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
        Fale com a Jupi Alimentos <br />
        <a href='tel:+558621061710' data-telegram='telegram'>
          (86) 2106-1710
        </a>
      </h2>
      <div className='row innerContainer row-cols-md-2 row-cols-lg-3 g-3'>
        <div className='col'>
          <div className='generalBox'>
            <h4>Departamento Administrativo</h4>
            <p>
              Entre em contato com nosso departamento administrativo das 8h às
              18h de segunda a sexta.
            </p>
            <br />
            <p>Ramal: 1716</p>
            <p>
              <a href='mailto:gerencia@jupialimentos.com.br'>
                gerencia@jupialimentos.com.br
              </a>
            </p>
          </div>
        </div>
        <div className='col'>
          <div className='generalBox'>
            <h4>Departamento Comercial</h4>
            <p>
              Entre em contato com nosso departamento comercial das 8h às 18h de
              segunda a sexta.
            </p>
            <br />
            <p>Ramal: 1712</p>
            <p>
              <a href='mailto:vendas@jupialimentos.com.br'>
                vendas@jupialimentos.com.br
              </a>
            </p>
          </div>
        </div>
        <div className='col'>
          <div className='generalBox'>
            <h4>Departamento de Logística</h4>
            <p>
              Entre em contato com nosso departamento de logística das 8h às 18h
              de segunda a sexta.
            </p>
            <br />
            <p>Ramal: 1727</p>
            <p>
              <a href='mailto:logistica@jupialimentos.com.br'>
                logistica@jupialimentos.com.br
              </a>
            </p>
          </div>
        </div>
        <div className='col'>
          <div className='generalBox'>
            <h4>Departamento Financeiro</h4>
            <p>
              Entre em contato com nosso departamento financeiro das 8h às 18h
              de segunda a sexta.
            </p>
            <br />
            <p>Ramal: 1721</p>
            <p>
              <a href='mailto:financeiro@jupialimentos.com.br'>
                financeiro@jupialimentos.com.br
              </a>
            </p>
          </div>
        </div>
        <div className='col'>
          <div className='generalBox'>
            <h4>Departamento de Compras</h4>
            <p>
              Entre em contato com nosso departamento de compras das 8h às 18h
              de segunda a sexta.
            </p>
            <br />
            <p>Ramal: 1715</p>
            <p>
              <a href='mailto:compras@jupialimentos.com.br'>
                compras@jupialimentos.com.br
              </a>
            </p>
          </div>
        </div>
        <div className='col'>
          <div className='generalBox'>
            <h4>Departamento de Qualidade</h4>
            <p>
              Entre em contato com nosso departamento de qualidade das 8h às 18h
              de segunda a sexta.
            </p>
            <br />
            <p>Ramal: 1724</p>
            <p>
              <a href='mailto:qualidade@jupialimentos.com.br'>
                qualidade@jupialimentos.com.br
              </a>
            </p>
          </div>
        </div>
        <div className='col'>
          <div className='generalBox'>
            <h4>Departamento de RH</h4>
            <p>
              Entre em contato com nosso departamento de RH das 8h às 18h de
              segunda a sexta.
            </p>
            <br />
            <p>Ramal: 1725</p>
            <p>
              <a href='mailto:qualidade@jupialimentos.com.br'>
                rh@jupialimentos.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Contact
