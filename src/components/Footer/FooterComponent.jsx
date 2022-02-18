import React from 'react'
import './FooterComponent.scss'
import GreatherThan from '../UI/GreatherThan'
import { Link } from 'gatsby'
import { Button } from 'react-bootstrap'

const FooterComponent = () => {
  return (
    <div className='footer'>
    <div className="closing__message">
      <h1>Let's work together!</h1>
      <Button className="btN" >Connect me <GreatherThan/></Button>
    </div>
    <div className="ending">
       <span className="footer__name"><p>&#169;KingDavid AbuTanko</p></span>
       <span className="title_D"><p>Software Developer, UI Designer</p></span>
       <span className="socials">
         <span className="socials_D">
           <div className="ff">
           <span><p><Link>Github</Link></p></span>
           <span><p><Link>Email</Link></p></span>
           <span><p><Link>Linkedin</Link></p></span>
           </div>
           <div><p><Link>Instagram</Link></p></div>
         </span>
       </span>
    </div>
 </div>
  )
}

export default FooterComponent