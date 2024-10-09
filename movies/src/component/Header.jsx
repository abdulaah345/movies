import React from 'react'
import './../component/Header.css'
import { Link,NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='Header'>
      <div className='container'>
        <div className='logo'>
            <Link to={'/'}> Movies</Link>
        </div>
        <ul className='nav-links'>
            <li>
              <NavLink to={'/'} >WatchList</NavLink>  
            </li>
            <li>
            <NavLink to={'/watched'} >Watched</NavLink> 
                
            </li>
            <li>
            <NavLink to={'/add'} className='btn'>ADD</NavLink> 
                
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
