import React from 'react'
import { FaTimes ,FaHandMiddleFinger,FaHeart} from 'react-icons/fa';
import {useState} from 'react'




const Project = ({project, onRemove,onUpdate}) => {
    const [loveCounts,setLoveCounts] = useState(0);
    const [hateCounts,setHaterCounts] = useState(0);
    let {id,name,deadline,done} = project
    return (
        <div className='project' style={{borderTop: done ? '5px solid green' : '' }} >
            <div onDoubleClick={() => onUpdate(id)}>
            <h3>{name} </h3>
            <p>{deadline}</p>
            <p>{done ? 'Done!' : 'Not finished'}</p>
            </div>
            
            <div >
            <span style={{position:'relative',padding:'9px'}}>
            <button className='heartBtn' onClick={e => {e.preventDefault(); setLoveCounts(loveCounts + 1)}}>{<FaHeart />}</button>
            <span style={{position:'absolute',color:'green',fontSize:'0.8rem'}}>{loveCounts}</span>
            </span>
            <span style={{position:'relative',padding:'9px'}}>
            <button onClick={e => {e.preventDefault(); setHaterCounts(hateCounts + 1) }}>
            {<FaHandMiddleFinger/>}
            </button>
            <span style={{color:'red',fontSize:'0.8rem',position:'absolute'}} >{hateCounts}</span>
            </span>
            </div>
            
            <button className='fatimes' style={{border:done ? '2px solid green': ''}} onClick={() => onRemove(id)}>{<FaTimes/>}</button>
        </div>
    )
}

export default Project
