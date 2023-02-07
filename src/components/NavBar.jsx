import React from 'react'
import "./styles/NavBar.css"

const NavBar = ({changetheme, theme}) => {
  return (
    <nav className='navBar'>
      <h2 className='navBar__title'>Where in the world?</h2>
      <div className='navBar__theme' onClick={changetheme}>
      <i  className={`bx bx-${theme === "light" ? "moon" : "sun"}`}></i>
      <h4 className='navBar__themetext'>Dark mode</h4>
        
      </div>
    </nav>
  )
}

export default NavBar