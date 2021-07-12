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
          description='Sabor que é sucesso! Fonte de proteínas e fibras, ainda contém vitaminas como as do Complexo B e Vitamina C.'
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
        {/* <ProductItemWide
          title='Linha de Farinhas Jupi'
          description='Fonte de energia, devido aos carboidratos de sua composição, a farinha de mandioca branca Tio Jady é um delicioso...'
          slug='/'
        >
          <StaticImage
            src='../images/products/farinha-goma-puba.png'
            alt='Linha de Farinhas Jupi'
            placeholder='blurred'
            layout='constrained'
          />
        </ProductItemWide> */}

        {/* Line 03 */}
        <ProductItem
          title='Flocão de Milho e Arroz'
          description='Sabor e energia para começar o dia, para o lanche e para todo momento. Produzido a partir de milho não...'
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
          description='A tapioca nossa de cada dia é consumida de várias formas e deixou de ser só mais um acompanhamento para o...'
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
          description='Para as horas mais divertidas, ela é companheira inseparável. Mata a fome e é fonte de energia, além de ser rica...'
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
          description='O queridinho dos brasileiros! Possui grãos de cor bege e rajas marrom que lembram o calçadão de Copacabana...'
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
          description='Faz sucesso desde a época da vovó e só de pensar dá água na boca! Tipicamente brasileira, a canjica traz...'
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
          description='Pães de Queijo, Tapioca, e mais um monte de preparação gostosa leva a fécula de mandioca na receita...'
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
