import React, {useState} from 'react'
import './NavBar.css'
import { Link } from 'gatsby'
import  Hamburger from './hamburger'
import CloseHamburger  from './closeHamburger'
import { motion } from 'framer-motion'


const NavBar = (props) => {
const [openNav, setOpenNav] = useState(false)


const handleNavBar = () =>{
   setOpenNav(!openNav)
}

    return (
        <nav className='myNav'> 
                    <motion.div
                    initial={{y:-50}}
                    animate={{y:0}}
                    transition={{duration:0.5, type:'spring', stiffness:150}}
                     className='main__navigation1'
>
                    <motion.span whileHover={{scale:1.3}}>
                        <Link  to='/'>KingDavid AbuTanko</Link>
                        </motion.span>
                    </motion.div>
                    <div className='main__navigation2' onClick={handleNavBar} >
                      {openNav ? <CloseHamburger/> :< Hamburger />}
                    </div>
            <div className={openNav ? 'main__navigation3' : 'closeMe'}>
            <ul className={openNav ? 'navigation2__item' : 'closeItem'}>
                <motion.li whileHover={{scale:1.1}}><Link activeClassName='active' to='/'>Home</Link></motion.li>
                {/* <motion.li whileHover={{scale:1.1}}><Link activeClassName='active' to='/services'>Services</Link></motion.li> */}
                <motion.li whileHover={{scale:1.1}}><Link activeClassName='active' to='/project'>Projects</Link></motion.li>
                <motion.li whileHover={{scale:1.1}}><Link activeClassName='active' to='/about'>About Me</Link></motion.li>
                <motion.li whileHover={{scale:1.1}}><Link activeClassName='active' to='/contact'>Contact</Link></motion.li>
            </ul>
            </div>
            {/* <div className='nav__container'>
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
            </ul>
              <span className={openNav ? 'responsive__minConX' : 'minConX testing'}>
                <Link to='/work'>Work request</Link>
                </span>
            </div> */}
        </nav>
    )
}

export default NavBar
