import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allFile
  const tagHeader = `${totalCount} note${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <div>
        <h3>{tagHeader}</h3>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.childMarkdownRemark.fields
            const { title } = node.childMarkdownRemark.frontmatter
            return (
              <li key={slug}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          })}
        </ul>
        {/*
                This links to a page that does not yet exist.
                You'll come back to it!
              */}
        <Link to="/tags">All tags</Link>
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allFile(sort: {fields: [birthTime], order: DESC}, filter: {childMarkdownRemark: {frontmatter: {tags: {in: [$tag]}}}}) {
    totalCount
    edges {
      node {
        id
        modifiedTime(fromNow: true)
        birthTime(fromNow: true)
        childMarkdownRemark {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
}
`