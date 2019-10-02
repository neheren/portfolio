import React from 'react'
import { graphql } from 'gatsby'
import {ThemeProvider} from 'styled-components'
import Front from '../components/Front/index.js'
import theme from '../styles/theme'
import Cases from '../components/Cases'
import Menu from '../components/Menu';
import About from '../components/About/About';

const IndexPage = ({ data }) => (
  <ThemeProvider theme={theme}>
    <Menu />
    <Front />
    <Cases />
    <About />
  </ThemeProvider>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
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
