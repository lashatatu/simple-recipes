import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"
import {ExampleButton} from "../examples/button"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <ExampleButton>click me</ExampleButton>
        <h1>Home Page</h1>
        <h1>Hello World</h1>
        <h1>Hello people</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquid
          distinctio dolor expedita fugit nesciunt omnis possimus, quam
          recusandae sit tempora tenetur vel, veritatis! Aperiam consequatur
          error illum itaque non.
        </p>
      </div>
    </Layout>
  )
}
