import React from 'react'
import { Link, graphql } from 'gatsby'
import styled, {ThemeProvider} from 'styled-components'
import Front from '../components/Front'
import theme from '../styles/theme'

const IndexPage = ({ data }) => (
  <ThemeProvider theme={theme}>
    <Front/>
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
