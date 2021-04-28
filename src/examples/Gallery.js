import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: {grayscale: true}
            width: 200
          )
        }
      }
    }
  }
`
const Gallery = () => {
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <div>
      <h2>simple gallery</h2>
    </div>
  )
}

export default Gallery
