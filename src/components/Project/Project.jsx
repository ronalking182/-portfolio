import React from 'react'
import './Project.scss'
import { Link } from 'gatsby'
import ContainerX from "../UI/Container"
import { Button, Col, Container, Row } from 'react-bootstrap';
import Pic from '../../images/51 11.png'
import PicX from '../../images/42 11.png'
import Js from '../../images/Frame 5.png'
import Icons from "../UI/Icons"
import Html from "../../images/html"
import Boot from "../../images/Boot"
import Git from "../../images/Git"
import FooterComponent from '../Footer/FooterComponent'



const Project = () => {
  return (
      <>
    <div className='Project__part'>
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
      <Icons/> 
      </span> 
      <div className="my_services2">
          <ul className='con__con'>
            <li className='con__one'>
            <span className='developer__skills'>
              <p className='dk'>Developer Skills</p>
              <span className='text'>
                <p className='text__content'>I use Bootstrap, with other tools I have learnt over time, to create interactive UI's and responsive React website and webapp. </p>
              </span>
            </span>
            </li>
            <li className='con__two'>
            <span className='ui'>
            <p className='dp'>UI Design</p>
              <span className='text'>
                <p className='text__content'>A passion for design and a keen sense of creativity. Wireframing, color theory, and visual communication are among my skills.</p>
              </span>
            </span>
            </li>
            <li className='con__three'>
            <span className='figma'>
            <p className='dg'>Git</p>
              <span className='text'>
                <p className='text__content'>For storing projects on solutions like GitHub, Bitbucket, and GitLab, Git is a must-have in every developer's toolkit. Git is a skills that should be a part of a developer day-to-day routine.</p>
              </span>
            </span>
            </li>
          </ul>
      </div>
  </Container>
  <Container className="projects" fluid>
          <Container className="project__text">
              <h3>My Projects</h3>
              <h2>What I've been working on</h2>
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
               <p className='dk'>Education</p>
               <span className='text'>
                <p className='text__content'>Certificated Front-End-Developer by Zero To Master (ZTM).</p>
               </span>
               </span>
               </section>
                </span>
                <span className="about">
                <section className='con__three'>
                <span className='figma'>
                <p className='dg'>My Skills</p>
                  <span className='text'>
                    <p className='text__content'>Through my studies, I have gained a solid understanding of computer science and web development concept, and have dedicated  lot of my free time to apply this concept to real world scenarios and application </p>
                  </span>
                </span>
                </section>
                    </span>
                    <span className="about">
                    <section className='con__two'>
                <span className='ui'>
                <p className='dp'>Networking</p>
                  <span className='text'>
                    <p className='text__content'>Created a blog <Link className='blog' to='/'> KingsCode.com </Link> to share my journey and connect with everyone as possible.</p>
                  </span>
                </span>
                </section>
                    </span>
                    <span className="about">
                    <section className='con__one'>
                <span className='developer__skills'>
                  <p className='dm'>Music and Game</p>
                  <span className='text'>
                    <p className='text__content'>Pianist and a guitarist in my freetime. I also enjoy playing videogames as a hobby.</p>
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
   
    <FooterComponent/>
    </div>
    </>
  )
}

export default Project