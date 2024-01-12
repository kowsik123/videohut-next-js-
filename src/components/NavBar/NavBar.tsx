import React from 'react'
import VideoHutLogo from '../VideoHutLogo/VideoHutLogo'
import './style.css'

function NavBar() {
  return (
    <nav>
      <div className='nav-left-cont'>
        <VideoHutLogo />
        <ul className='nav-menus'>
          <li>home</li>
          <li>tv shows</li>
          <li>movies</li>
        </ul>
      </div>
      <div className='nav-right-cont'>
        <div>profile</div>
        <div>settings</div>
      </div>
    </nav>
  )
}

export default NavBar