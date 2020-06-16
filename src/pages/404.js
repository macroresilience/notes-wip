import React from "react"
import { css } from "@emotion/core"
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
          Page Not Found
        </h1>
        <p>This page does not exist and if it ever did, it has been removed.</p>
      </div>
    </Layout>
  )
}
