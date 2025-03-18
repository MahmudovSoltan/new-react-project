import React from 'react'
import Logo from './Logo'
import Search from './Search'
import HeaderNotes from './HeaderNotes'
import "../../index.css";
const Header = () => {
  return (
    <header className='header'>
      <Logo/>
      <Search/>
      <HeaderNotes/>
    </header>
  )
}

export default Header
