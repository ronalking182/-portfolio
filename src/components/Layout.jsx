import React from 'react'
import NavBar from './NavBar/NavBar'
// import GreatherThan from './UI/GreatherThan'
// import { Link } from 'gatsby'
// import { Button } from 'react-bootstrap'
import FooterComponent from './Footer/FooterComponent'


const Layout = ({children}) => {
    return (
        <div className='layOut'>
        <NavBar/>
            {children}
            <FooterComponent/>
        </div>
    )
}

export default Layout
