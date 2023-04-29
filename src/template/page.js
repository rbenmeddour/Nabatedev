import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
    }
  }
`

const Page = ({ data }) => {
  const { title, content } = data.wpPage

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default Page
