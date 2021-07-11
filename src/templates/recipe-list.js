import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import CardBox from '../components/CardBox'
import Pagination from '../components/Pagination'

const ListOfRecipes = props => {
  const recipeList = props.data.recipes.edges

  const {
    currentRecipePage: currentPage,
    numRecipesPages: numPages
  } = props.pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/receitas' : `/receitas/page/${currentPage - 1}`
  const nextPage = `/receitas/page/${currentPage + 1}`

  return (
    <Layout>
      <Seo title='Receitas' />

      <div className='container'>
        <h2 className='topSectionHeadings'>Últimas Receitas</h2>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
          {recipeList.map(
            ({
              node: {
                id,
                frontmatter: { description, title, coverImage },
                fields: { slug }
              }
            }) => (
              <div key={id} className='col d-flex'>
                <CardBox titleCard={title} infoCard={description} slug={slug}>
                  <Link to={slug} title={title}>
                    <GatsbyImage
                      alt={title}
                      image={coverImage.childImageSharp.gatsbyImageData}
                      placeholder='blurred'
                      layout='fullWidth'
                    />
                  </Link>
                </CardBox>
              </div>
            )
          )}
        </div>
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query recipeList($skip: Int!, $limit: Int!) {
    recipes: allMdx(
      filter: { fileAbsolutePath: { glob: "**/receitas/*.mdx" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            description
            title
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            coverImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  layout: CONSTRAINED
                )
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default ListOfRecipes
