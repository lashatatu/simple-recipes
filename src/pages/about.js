import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"
import { ExampleButton } from "../examples/button"
import styled from "styled-components"

const About = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>about page</h1>
        <ExampleButton>lasha</ExampleButton>
        <p className={text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          asperiores, at atque consectetur debitis earum exercitationem fugiat
          in inventore ipsam iure numquam ratione reiciendis repudiandae
          tempora. Delectus dolor eos nostrum!
        </p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: blue;

  h1 {
    color: yellowgreen;
  }

  .text {
    text-transform: uppercase;
  }
`

export default About
