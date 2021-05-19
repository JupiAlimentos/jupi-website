import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import ProductItem from '../components/ProductItem'

const Products = () => (
  <Layout>
    <Seo title='Produtos' />
    <main className='container'>
      <h2 className='sidePdTxt topSectionHeadings'>Família Jupi</h2>
      <div className='row'>
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
      </div>
    </main>
  </Layout>
)

export default Products
