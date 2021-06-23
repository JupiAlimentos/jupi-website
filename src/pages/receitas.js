import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import CardBox from '../components/CardBox'

const Recipes = () => (
  <Layout>
    <Seo title='Receitas' />
    <div className='container'>
      <h2 className='topSectionHeadings'>Nossas receitas</h2>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
        <div className='col d-flex'>
          <CardBox
            titleCard='Fava com costela e bisteca de porco'
            infoCard='Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux'
            slug='/receitas'
          >
            <StaticImage
              src='../images/recipes/recipe-1.png'
              alt='Fava com costela e bisteca de porco'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Cuscuz de milho com feijão verde'
            infoCard='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy'
            slug='/receitas'
          >
            <StaticImage
              src='../images/recipes/recipe-2.png'
              alt='Cuscuz de milho com feijão verde'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Beiju com coco'
            infoCard='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'
            slug='/receitas'
          >
            <StaticImage
              src='../images/recipes/recipe-3.png'
              alt='Beiju com coco'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Feijão carioca, o prato básico'
            infoCard='But I must explain to you how all this mistaken idea of denouncing pleasure'
            slug='/receitas'
          >
            <StaticImage
              src='../images/recipes/recipe-4.png'
              alt='Feijão carioca, o prato básico'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Almoço com feijão preto Jupi'
            infoCard='The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog'
            slug='/receitas'
          >
            <StaticImage
              src='../images/recipes/recipe-5.png'
              alt='Almoço com feijão preto Jupi'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Canjica amarela Jupi blábláblá'
            infoCard='Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im Eva und ihren Mops durch Sylt'
            slug='/receitas'
          >
            <StaticImage
              src='../images/recipes/recipe-6.png'
              alt='Canjica amarela Jupi blábláblá'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Farinha amarela ongabonga and the bugs... very bgus, ops'
            infoCard='Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que'
            slug='/receitas'
          >
            <StaticImage
              src='../images/recipes/recipe-7.png'
              alt='Farinha amarela ongabonga and the bugs... very bgus, ops'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Receita de farofa Jupi'
            infoCard='Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux de graphie en kit mais bref'
            slug='/receitas'
          >
            <StaticImage
              src='../images/recipes/recipe-8.png'
              alt='Receita de farofa Jupi'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Tapioca com carne de sol por Lia Formiga'
            infoCard='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy'
            slug='/receitas'
          >
            <StaticImage
              src='../images/recipes/recipe-9.png'
              alt='Tapioca com carne de sol por Lia Formiga'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
        <div className='col d-flex'>
          <CardBox
            titleCard='Lia Formiga e uma receita de feijão sem igual'
            infoCard='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'
            slug='/receitas'
          >
            <StaticImage
              src='../images/recipes/recipe-10.png'
              alt='Lia Formiga e uma receita de feijão sem igual'
              placeholder='blurred'
              layout='fullWidth'
            />
          </CardBox>
        </div>
      </div>
    </div>
  </Layout>
)

export default Recipes
