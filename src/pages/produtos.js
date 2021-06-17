import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import ProductItem from '../components/ProductItem'
import ProductItemWide from '../components/ProductItemWide'

const Products = () => (
  <Layout>
    <Seo title='Produtos' />
    <main className='container'>
      <h2 className='topSectionHeadings'>Família Jupi</h2>
      <div className='row flex-wrap'>
        {/* Line 01 */}
        <ProductItemWide
          title='Conheça a Fava Jupi'
          description='Algum texto promocional que descreva a seção. Elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
          slug='/'
        >
          <StaticImage
            src='../images/products/fava.png'
            alt='Conheça a Fava Jupi'
            placeholder='blurred'
            layout='constrained'
          />
        </ProductItemWide>

        {/* Line 02 */}
        <ProductItemWide
          title='Linha de Farinhas Jupi'
          description='Algum texto promocional que descreva a seção. Elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
          slug='/'
        >
          <StaticImage
            src='../images/products/farinha-goma-puba.png'
            alt='Linha de Farinhas Jupi'
            placeholder='blurred'
            layout='constrained'
          />
        </ProductItemWide>

        {/* Line 03 */}
        <ProductItem
          title='Flocão de Milho e Arroz'
          description='Algum texto promocional que descreva a seção. Elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
          slug='/'
        >
          <StaticImage
            src='../images/products/flocao-milho-arroz.png'
            alt='Flocão de Milho e Arroz'
            placeholder='blurred'
            layout='constrained'
          />
        </ProductItem>

        <ProductItem
          title='Tapioca e Goma de Mandioca'
          description='Algum texto promocional que descreva a seção. Elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
          slug='/'
        >
          <StaticImage
            src='../images/products/tapioca-goma-mandioca.png'
            alt='Tapioca e Goma de Mandioca'
            placeholder='blurred'
            layout='constrained'
          />
        </ProductItem>

        {/* Line 04 */}
        <ProductItemWide
          title='Milho de Pipoca'
          description='Algum texto promocional que descreva a seção. Elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
          slug='/'
        >
          <StaticImage
            src='../images/products/pipoca.png'
            alt='Milho de Pipoca'
            placeholder='blurred'
            layout='constrained'
          />
        </ProductItemWide>

        {/* Line 05 */}
        <ProductItemWide
          title='Família de Feijões Jupi'
          description='Algum texto promocional que descreva a seção. Elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
          slug='/'
        >
          <StaticImage
            src='../images/products/linha-feijao.png'
            alt='Família de Feijões Jupi'
            placeholder='blurred'
            layout='constrained'
          />
        </ProductItemWide>

        {/* Line 06 */}
        <ProductItem
          title='Nossas Canjicas'
          description='Algum texto promocional que descreva a seção. Elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
          slug='/'
        >
          <StaticImage
            src='../images/products/nossas-conjicas.png'
            alt='Tapioca e Goma de Mandioca'
            placeholder='blurred'
            layout='constrained'
          />
        </ProductItem>

        <ProductItem
          title='Fécula de Mandioca'
          description='Algum texto promocional que descreva a seção. Elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
          slug='/'
        >
          <StaticImage
            src='../images/products/fecula-mandioca.png'
            alt='Tapioca e Goma de Mandioca'
            placeholder='blurred'
            layout='constrained'
          />
        </ProductItem>
      </div>
    </main>
  </Layout>
)

export default Products
