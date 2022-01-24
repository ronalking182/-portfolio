import React from 'react'
import './Container.css'

const ContainerX = (props) => {
    let design = 'con ' + props.className
    return (
        <div className={design}>{props.children}</div>
    )
}

export default ContainerX
