import * as React from "react"
// import Layout from "../components/Layout"
import '../styles/index.scss'

import Home from "../components/Home/Home"
import Project from "../components/Project/Project"
// import FooterComponent from "../components/Footer/FooterComponent"
// import NavBar from "../components/NavBar/NavBar"



// markup
const IndexPage = () => {
  return (
    <>
      {/* <NavBar/> */}
        <Home/>
        <Project/>
     </>
  )
}

export default IndexPage



