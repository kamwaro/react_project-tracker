import React from 'react'
import { FaTimes } from 'react-icons/fa';

const Project = ({project, onRemove,onUpdate}) => {
    let {id,name,deadline,done} = project
    return (
        <div className='project' style={{borderTop: done ? '5px solid green' : '' }} onDoubleClick={() => onUpdate(id)}>
            <h3>{name}</h3>
            <p>{deadline}</p>
            <p>{done ? 'Done!' : 'Not finished'}</p>
            <button className='fatimes' style={{border:done ? '2px solid green': ''}} onClick={() => onRemove(id)}>{<FaTimes/>}</button>
        </div>
    )
}

export default Project
