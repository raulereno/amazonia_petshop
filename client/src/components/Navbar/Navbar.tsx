import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Bottombar from './Bottombar/Bottombar'
import Topbar from './Topbar/Topbar'
import './navbar.scss'

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const [scrollY, setScrollY] = useState(0)
  const location = useLocation().pathname

  window.onscroll = () => {
    const y = window.scrollY
    setScrollY(y)
  }

  return (
    <header
      id='container_navbar'
      className={`${scrollY === 0 ? 'static_navbar' : 'scroll_navbar'} ${
        location !== '/' ? 'other_pages' : ''
      }`}
    >
      <Topbar />
      <Bottombar scrolling={scrollY === 0 ? false : true} location={location} />
    </header>
  )
}

export default Navbar
