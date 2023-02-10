//import React from 'react'
import './topbar.css'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { useContext } from 'react'
import { myContext } from '../../context/Context'

export default function Topbar() {
  const {user,dispatch} = useContext(myContext)
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleLogout = () => {
    dispatch({type:'LOGOUT'})
  }

 

  const toggleNav = () =>{
    setToggleMenu(!toggleMenu)
  }
  return (
    <div className='topbar'>

      <div className='topbarOne'>
        <div className='mediaIcon'>
          <div className='icon'>  <a href = 'https://facebook.com'><FaFacebookSquare /> </a> </div>
          <div className='icon'> <a href= 'https://www.linkedin.com/'> <FaLinkedinIn /> </a> </div>
          <div className='icon'>  <a href='https://www.twitter.com'> <FaTwitterSquare /> </a> </div>
      </div>
    <div className='menu'>
      
      <ul className='menuList'>
        <li className='menulistItem'> 
        <Link to='/' className='link'>Home</Link>
         </li>
        {/* <li className='menulistItem'>
        <Link to='/about' className='link'>about</Link>
           </li> */}
        <li className='menulistItem'>
        <Link to='/Write' className='link'>write</Link>
         </li>
        {/* <li className='menulistItem'> 
        <Link to='/contact' className='link'>Contact</Link>
        </li> */}
        <li className='menulistItem' onClick={handleLogout}> 
          {user && 'LOGOUT'}
        </li>
      </ul>

    </div>
    {user ? (
      <></>
      
    ): (
      <div className='profile'>
      <div className='profileList'> 
         <Link to ='/signup'> SignUp  </Link>
         </div>
      <div className='profileList'>
         <Link to ='/login'> Login  </Link>
         </div>
    </div>
    )}
    

    </div>

    <div className='topbarTwo'>
      
      <button onClick={toggleNav} className='mobileIcon' > 
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
      </button>
      
      {(toggleMenu && (
      <ul className='topbarList'>
        <li className='topbarlistItems'> Signup </li>
        <li className='topbarlistItems'> Loginin </li>
        <li className='topbarlistItems'> Home </li>
        <li className='topbarlistItems'> About </li>
        <li className='topbarlistItems'> Articles </li>
        <li className='topbarlistItems'> Contact </li>
      </ul>
      )
      )}
      
      <ul className='mediaiconTwo'>
          <div className='icon'> <FaFacebookSquare /> </div>
          <div className='icon'> <FaLinkedinIn /> </div>
          <div className='icon'> < FaTwitterSquare/> </div>

      </ul>


    </div>
    
    </div>

  )
}
