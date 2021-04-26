import React from "react"
import {Link} from 'gatsby'
import Navbar from "../../components/Navbar"

const History = () => {
  return (
    <div>
      <Navbar/>
      <h2>
      <Link to={'/'}>home page</Link>
      </h2>
this is history of our company
    </div>
  )
}

export default History