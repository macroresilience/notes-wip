import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
          `}
        >
          {data.site.siteMetadata.title}
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Notes</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — modified {node.fields.gitModifiedTime}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort:{fields:[fields___gitModifiedTime], order:DESC}) {
      edges {
        node {
          frontmatter {
            title
          }
          excerpt
          fields {
            slug
            gitModifiedTime(fromNow: true)
            gitCreatedTime(fromNow: true)
          }
        }
      }
    totalCount
  }
  site {
    siteMetadata {
      title
    }
  }
}
`