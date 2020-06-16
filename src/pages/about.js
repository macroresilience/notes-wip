import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>
        Permanently work-in-progress notes and essays of all lengths, all edits and 
        history on Github. Not written consciously for public consumption.       
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `