module.exports = {
  siteMetadata: {
    title: 'Jupi Alimentos',
    description: 'Website of Jupi Alimentos.',
    author: '@laurielmesquita'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Raleway',
              variants: ['500', '600', '700']
            },
            {
              family: 'Poppins',
              variants: ['600', '700']
            }
          ]
        }
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'jupi-alimentos',
        short_name: 'jupi',
        start_url: '/',
        background_color: '#e02d2d',
        theme_color: '#e02d2d',
        display: 'minimal-ui',
        icon: 'src/images/icons/jupi-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline'
  ]
}
