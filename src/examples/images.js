import React from "react"
import styled from "styled-components"
import big from '../assets/images/pexels-dimitri-kuliuk-2183022.jpg'

const Images = () => {
  return (
    <Wrapper>
      <img
        src={big}
        alt="food" />
      <h2>gatsby image</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
img{
  width: 200px;
}
`

export default Images
