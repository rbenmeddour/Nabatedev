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

<<<<<<< HEAD
const Page = ({ data }) => {
=======
const PageTemplate = ({ data }) => {
>>>>>>> 950ef2c (createpages dynamicly works)
  const { title, content } = data.wpPage

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

<<<<<<< HEAD
export default Page
=======
export default PageTemplate
>>>>>>> 950ef2c (createpages dynamicly works)
