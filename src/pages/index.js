import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Link
              to={node.fields.slug}
            >
              <h4
                css={css`
                  margin-top: ${rhythm(1 / 4)};
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
              </h4>
            </Link>
          </li>
        ))}
        </ul>
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