import React from 'react'
import { graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import Front from '../components/Front/index.js'
import theme from '../styles/theme'
import Cases from '../components/Cases'
import Menu from '../components/Menu'
import About from '../components/About/About'

const IndexPage = ({data}) => (
	<ThemeProvider theme={theme}>
		<Menu/>
		<Front videoLink={data.home.modelVideo.url} isProject={false}/>
		<Cases />
		<About data={data.about}/>
	</ThemeProvider>
)

IndexPage.propTypes = {}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    home: datoCmsHome {
      modelVideo {
        url
      }
    }

    about: datoCmsAboutPage {
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
