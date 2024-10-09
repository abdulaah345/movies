import React from 'react'
import './../component/Header.css'
const Header = () => {
  return (
    <div className='Header'>
      <div className='container'>
        <div className='logo'>
            <a href='#'>Movies</a>
        </div>
        <ul className='nav-links'>
            <li>
            <a>WatchList</a>
                
            </li>
            <li>
            <a>Watched</a>
                
            </li>
            <li>
            <a className='btn'> ADD</a>
                
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
