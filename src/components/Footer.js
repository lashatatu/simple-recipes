import React from "react"

const Footer = () => {
  return (
    <footer className={"page-footer"}>
      <p>
        &copy; {new Date().getFullYear()} <span>LashasRecipes</span> Built by{" "}
        <a
          href="https://github.com/lashatatu"
          target={"_blank"}
          rel={"noreferrer"}
        >
          Lasha Tatulashvili
        </a>
      </p>
    </footer>
  )
}

export default Footer
