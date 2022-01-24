import React, {useState} from 'react'
import './NavBar.css'
import { Link } from 'gatsby'
import  Hamburger from './hamburger'
import CloseHamburger  from './closeHamburger'


const NavBar = (props) => {
const [openNav, setOpenNav] = useState(false)


const handleNavBar = () =>{
   setOpenNav(!openNav)
    console.log("working");
}

    return (
        <nav className='myNav'> 
            <div className='nav__container'>
                <div className='name__ham'>
                <span><Link to='/'>KingDavid AbuTanko</Link></span>
                <span className='hame' onClick={handleNavBar}>
            {openNav ? <CloseHamburger/> :< Hamburger />}
                </span>
                </div>
            <ul className={openNav ? 'responsive__minCon' : 'minCon testing'}>
                <li style={{color:'whitesmoke'}}><Link activeClassName='active' to='/'>Home</Link></li>
                <li><Link activeClassName='active' to='/services'>Services</Link></li>
                <li><Link activeClassName='active' to='/project'>Projects</Link></li>
                <li><Link activeClassName='active' to='/about'>About Me</Link></li>
                <li><Link activeClassName='active' to='/contact'>Contact</Link></li>
                <li className='special'> <Link activeClassName='active' to='/work'>Work request</Link></li>
            </ul>
              <span className={openNav ? 'responsive__minConX' : 'minConX testing'}>
                <Link to='/work'>Work request</Link>
                </span>
            </div>
        </nav>
    )
}

export default NavBar
