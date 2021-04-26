import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li>
            <Link to={'/company/history'}>History</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar