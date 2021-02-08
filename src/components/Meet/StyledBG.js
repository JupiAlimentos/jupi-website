import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "meet-jupi.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag='section'
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <div className='gradientDarkRed pd-40'>
        <h3 className='titleBox'>Conheça a Jupi</h3>
        <p className='infoBox'>
          Texto explicativo para a chamada aqui, que tenha esse comprimento.
        </p>
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
