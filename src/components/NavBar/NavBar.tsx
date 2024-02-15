import React from 'react'
import VideoHutLogo from '../VideoHutLogo/VideoHutLogo'
import './style.css'
import Button from '../Button'

function NavBar() {
  return (
    <nav>
      <div className='nav-left-cont'>
        <VideoHutLogo />
        <ul className='nav-menus'>
          <li id='home-menu'><Button text='Home' type='basic' onClick={()=>{}} /></li>
          <li id='tv-show-menu'><Button text='Tv show' type='basic' /></li>
          <li id='movies-menu'><Button text='Movies' type='basic' active /></li>
        </ul>
      </div>
      <div className='nav-right-cont'>
      <Button text='Profile' type='basic' />
      <Button text='Settings' type='basic' />
      </div>
    </nav>
  )
}

export default NavBar