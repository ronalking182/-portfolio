import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import '../design/about/about.scss'
import Git from "../images/Git"
import LinkInt from '../images/LinkInt'
import Mail from '../images/Mail'

const About = () => {
    return (
        <Layout>
            <section class="about__page">
                <h1 className='big__intro'>I Have Always Loved Tech</h1>
                 <h3 className='S'><strong>My quick story</strong></h3>
                <p>When I was 11 years old, I began playing with computers. Since then, I've been experimenting with many technologies that have led me to work in the several fields such as music, photography, sound engineering,automation and programing.  My enthusiasm for design and structure has guided every decision I've made in my professional life. While still in school, I began developing websites and webapp for small enterprises.
                {/* <br/>
                <p>
                </p> */}
                </p>

                <h3 className='R'><b>As a developer</b></h3>
                <p> I try to pay <b> significant attention to the readability of my code.</b> Sure, I'll slap something together as soon as possible to get it to work, but I'll spend a lot of time after that commenting and arranging things. I want you to <b> feel comfortable in my code.</b>

                Code that is clean, <b>consistent, legible, and maintainable.</b> It's fantastic when features work, but it's even better when they can keep working no matter who's working on them.

                Working on new projects excites me since <b> I always learn something new</b>. I'm looking forward to the next challenge!</p>

                    <h3 className='T'><b>As a person</b></h3>
                <p>
                If I were to sum up my personality in a single word, i would say <b>resourceful.</b> I'll take a problem, break it down into smaller chunks, and MacGyver a solution for myself. Creativity has aided me in navigating difficult situations.

                <b>I'm naturally interested in learning new things.</b> I've accumulated a diverse set of abilities and hobbies that, when combined, fuel my profession in some way. I'm what's known as a T-shaped person.
                </p>
                 <div className='end__Intro'>
                  <h4 className='h4'><b>Let build something together!</b></h4>
                  {/* <h2>Let's have a chat ☁️</h2> */}
                  <p className='reachOut'>Feel free to reach out if you are looking for a developer, have a question or just want to connect</p>
                  <h1 className='icon__social'>
                      <Link><Git/></Link>
                      <Link><LinkInt/></Link>
                      <Link><Mail/></Link>
                  </h1>
                  </div> 
            </section>
        </Layout>
    )
}

export default About
