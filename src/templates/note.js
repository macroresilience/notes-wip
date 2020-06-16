import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Note({ data }) {
	const note = data.markdownRemark
  return (
    <Layout>
    	<SEO title={note.frontmatter.title} description={note.excerpt} />
      <div>
        <h1>{note.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: note.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`