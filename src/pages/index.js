import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Picture from "../components/image/picture"
import '../styles/index.scss'
import ContainerX from "../components/UI/Container"
import { Button, Col, Container, Row } from 'react-bootstrap';
import Pic from '../images/51 11.png'
import PicX from '../images/42 11.png'
import Js from '../images/Frame 5.png'
import Icons from "../components/UI/Icons"
import Html from "../images/html"
import Boot from "../images/Boot"
import Git from "../images/Git"
import GreatherThan from "../components/UI/GreatherThan"



// markup
const IndexPage = () => {
  return (
    <>
      <Layout>
    <div className="w">
      <div className='home-wrapper'>
            <div className="image_and_small_text">
              <Picture/>
              <div className="text">
                <ContainerX className="shown_text">
                  <p>👋 Hi I am KingDavid</p>
                  {/* <p>KingDavid</p> */}
                  </ContainerX>
                <ContainerX className="hidden_text"><p>UI Designer</p></ContainerX>
                <ContainerX className="hidden_text"><p>Java Developer</p></ContainerX>
              </div>
            </div>
            <div className="big_text">
              <span className="job"><p>Software Developer</p></span>
              <span className="location"><p>Based in Abuja, Nigeria.</p></span>
              </div>
            <div className="small_text"><p>Let's work!</p></div>
        </div>
    
    </div>
      <div className="services">
      <Container  fluid>
        <Col className=" justify-content-md-center">
          <Row>
          <h3 className="quote">Just because something doesn’t do what you planned it to do</h3></Row>
          <Row> <h3 className="ending">doesn’t mean it’s useless.</h3></Row>
          <Row> <p className="quote_name">- Thomas Edison</p></Row>
        </Col>
        </Container>
        <Container className="my_services">
            <div className="my_Services">
              <div className="s1">
              <h3>My services</h3>
              <h2>The most creative intuitive workmate</h2>
              </div>
                <Html className='n'/>
              <div className="s2">
                <img src={Js} style={{width:'30px',height:'30px'}} />
                <img src={Pic} className="bit"/>
                <Git className='p'/>
              </div>
                <Boot className='l'/>
            </div>
            <span>
            {/* <Icons/> */}
            </span>
            <div className="my_services2">
                <ul className='con__con'>
                  <li className='con__one'>
                  <span className='developer__skills'>
                    <p className='dk'>Developer Skills</p>
                    <span className='text'>
                      <p className='text__content'>A full knowledge of HTML / CSS and Javascript. I make responsive applications with Bootstrap and interactive UI's with React.</p>
                    </span>
                  </span>
                  </li>
                  <li className='con__two'>
                  <span className='ui'>
                  <p className='dp'>Developer Skills</p>
                    <span className='text'>
                      <p className='text__content'>A full knowledge of HTML / CSS and Javascript. I make responsive applications with Bootstrap and interactive UI's with React.</p>
                    </span>
                  </span>
                  </li>
                  <li className='con__three'>
                  <span className='figma'>
                  <p className='dg'>Developer Skills</p>
                    <span className='text'>
                      <p className='text__content'>A full knowledge of HTML / CSS and Javascript. I make responsive applications with Bootstrap and interactive UI's with React.</p>
                    </span>
                  </span>
                  </li>
                </ul>
            </div>
        </Container>
        <Container className="projects" fluid>
                <Container className="project__text">
                    <h3>My Projects</h3>
                    <h2>A selection of my best projects.</h2>
                </Container>
                <Container className="main__project">
                  <div className="my__project">
                      <span className="project"></span>
                      <span className="project"></span>
                      <span className="project"></span>
                      <span className="project"></span>
                  </div>
                </Container>
                <Container className="project__text">
                    <p className="visit">Curious about the process </p>
                    <p className="visit1"><Link>Visit my Github</Link></p>
                </Container>
        </Container>
          <Container className="about_me">
          <Container className="project__text">
                    <h3>About me</h3>
                    <h2>Welcome to KingDavid's world</h2>
                </Container>
                <Container className="main__about">
                  <div className="rem">
                  <div className="my__about">
                      <span className="about">
                      <section className='con__one'>
                     <span className='developer__skills'>
                     <p className='dk'>Developer Skills</p>
                     <span className='text'>
                      <p className='text__content'>A full knowledge of HTML / CSS and Javascript. I make responsive applications with Bootstrap and interactive UI's with React.</p>
                     </span>
                     </span>
                     </section>
                      </span>
                      <span className="about">
                      <section className='con__three'>
                      <span className='figma'>
                      <p className='dg'>Developer Skills</p>
                        <span className='text'>
                          <p className='text__content'>A full knowledge of HTML / CSS and Javascript. I make responsive applications with Bootstrap and interactive UI's with React.</p>
                        </span>
                      </span>
                      </section>
                          </span>
                          <span className="about">
                          <section className='con__two'>
                      <span className='ui'>
                      <p className='dp'>Developer Skills</p>
                        <span className='text'>
                          <p className='text__content'>A full knowledge of HTML / CSS and Javascript. I make responsive applications with Bootstrap and interactive UI's with React.</p>
                        </span>
                      </span>
                      </section>
                          </span>
                          <span className="about">
                          <section className='con__one'>
                      <span className='developer__skills'>
                        <p className='dm'>Developer Skills</p>
                        <span className='text'>
                          <p className='text__content'>A full knowledge of HTML / CSS and Javascript. I make responsive applications with Bootstrap and interactive UI's with React.</p>
                        </span>
                      </span>
                       </section>
                          </span>
                          </div>
                    <div>
                      <img src={PicX} className="picx"/>
                      </div> 
                  </div>
                  <Container className="project__text">
                    <h2 className="m">Focus. Dedicated. Intuitive.</h2>
                    <h4 className="t">Wanna know more? Visit my Instagram</h4>
                </Container>
                </Container>
          </Container>
      </div>
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
          </Layout>
      </>
  )
}

export default IndexPage


