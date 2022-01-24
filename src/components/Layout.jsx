import React from 'react'
import NavBar from './NavBar/NavBar'

const Layout = ({children}) => {
    return (
        <div>
            {/* <section> */}
        <NavBar/>
            {/* </section> */}
            {children}
        </div>
    )
}

export default Layout
