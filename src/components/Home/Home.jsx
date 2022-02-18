import React from 'react'
import './Home.scss'
import Picture from '../image/picture'
import NavBar from '../NavBar/NavBar'
import FooterComponent from '../Footer/FooterComponent'

const Home = () => {
  return (
      <>
      <NavBar/>
         <div className='classic__homePage'>
            <div className='wrapper__page'>

                <div className='my__self'>
                    <span className='pictureMe'>
                    <Picture/>
                    </span>
                    <span className='self X'>
                    <p className='myName'>👋 Hi I am KingDavid
                    <p  className="big_text">Software Developer</p>
                    </p>
                    </span>
                </div>
                <div className='what_i_know'>
                  <span className='self'>
                    <p className='self_introduction'>
                    My name is KingDavid, however most people refer to me as "David." I'm a software developer who specializes in React apps as well as CSS and HTML that are cross-platform and cross-browser compatible. I'm passionate in creating interfaces that are usable, pleasant, and responsive for as many users as possible.
                    </p>
                  </span>
                  <span className='self'>
                <p className='myName'>My Skills</p>
                <ul className="skill__con">
                    <li className="skill_set">HTML</li>
                    <li className="skill_set">Css</li>
                    <li className="skill_set">Javascript</li>
                    <li className="skill_set">React</li>
                    <li className="skill_set">Gatsby</li>
                    <li className="skill_set">Next.js</li>
                    <li className="skill_set">Node.js</li>
                    <li className="skill_set">Mongodb</li>
                    <li className="skill_set">Sass</li>
                    <li className="skill_set">Bootstrap</li>
                    <li className="skill_set">Tailwind Css</li>
                    <li className="skill_set">Git</li>
                    <li className="skill_set">Framer Motion</li>
                    <li className="skill_set">Java</li>
                </ul>
                </span>
                </div>
        </div>
  </div>
        {/* <FooterComponent/> */}
  </>
  )
}

export default Home