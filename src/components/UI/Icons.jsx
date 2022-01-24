import React from 'react'
import Html from '../../images/html'
import Boot from '../../images/Boot'
import Git from '../../images/Git'
import Js from '../../images/Frame 5.png'

const Icons = () => {
    return (
        <div className='ic'>
            <Boot/>
              <Html/>
              <img src={Js} className='log'/>
              <Git/>
        </div>
    )
}

export default Icons
