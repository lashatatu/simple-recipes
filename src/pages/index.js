import React from "react"
import {Link} from "gatsby"

export default function Home () {
  return (
    <div>
      <h1>Hello people</h1>
      <div>
      <Link to={'/about'}>about</Link>
      <Link to={'/contact'}>contact</Link>
      <Link to={'/company/history'}>history</Link>
      </div>

    </div>
  )
}
