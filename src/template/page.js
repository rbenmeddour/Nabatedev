import React from "react"
import { graphql } from "gatsby"




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
