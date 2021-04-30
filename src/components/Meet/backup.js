import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import styled from 'styled-components'

import { getImage } from 'gatsby-plugin-image'

import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "meet-jupi.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)

  // Use like this:
  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag='section'
      className={className}
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      backgroundColor='#1c1d1f'
      preserveStackingContext
    >
      <div className='gradientDarkRed pd-40'>
        <h3 className='titleBox'>Visite a Jupi</h3>
        <p className='infoBox'>
          Conheça a nossa história, a nossa cultura e os nossos valores.
        </p>
        <Link className='linkText' to='/sobre'>
          Saiba mais <span className='arrow' />
        </Link>
      </div>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 767.98px) {
    height: 500px;
  }
`

export default StyledBackgroundSection