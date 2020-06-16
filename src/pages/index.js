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
            border-bottom: 1px solid;
          `}
        >
          Notes and Work-in-Progress
        </h1>
        <h4>{data.allFile.totalCount} Notes</h4>
        {data.allFile.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.childMarkdownRemark.fields.slug}
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
                {node.childMarkdownRemark.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.birthTime}
                </span>
              </h3>
              <p>{node.childMarkdownRemark.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
  allFile(sort:{fields:[modifiedTime], order:DESC}) {
    edges {
      node {
        id
        birthTime(fromNow: true)
        modifiedTime(fromNow: true)
        childMarkdownRemark {
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
    totalCount
  }
}
`