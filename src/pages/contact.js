import React from 'react'
import Layout from '../components/Layout'
import '../design/contact/contact.scss'
import PicX from '../images/42 11.png'
import Git from "../images/Git"
import LinkInt from '../images/LinkInt'
import Mail from '../images/Mail'
import {Link} from 'gatsby'

const Contact = () => {
    return (
        <Layout>
           <section className='main__contact'>
               <div className='contact__main__container'>
                  <div className='picture'>
                    <img className='picME' src={PicX}/>
                    </div>
               
                <div className='block__contact'>
                <span className='icon__social__contact'>
                    <Link><Git/></Link>
                    <Link><LinkInt/></Link>
                    <Link><Mail/></Link>
                </span>
                </div>
               </div>
           </section> 
        </Layout>
    )
}

export default Contact
