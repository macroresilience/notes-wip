import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Note({ data }) {
	const note = data.markdownRemark
  return (
    <Layout>
    	<SEO title={note.frontmatter.title} description={note.excerpt} />
      <div>
        <h1>{note.frontmatter.title}</h1>
        <p css={css`color: #bbb;`}>created {note.parent.birthTime}, modified {note.parent.modifiedTime}.</p>
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
      parent {
      ... on File {
        modifiedTime(fromNow: true)
        birthTime(fromNow: true)
      }
    }
    }
  }
`