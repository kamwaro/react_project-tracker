import React from 'react'
import { FaTimes ,FaHandMiddleFinger,FaHeart} from 'react-icons/fa';




const Project = ({project, onRemove,onUpdate,updLoveCounts,updHateCounts}) => {
    let {id,name,deadline,done,loveCounts,hateCounts} = project
    return (
        <div className='project' style={{borderTop: done ? '5px solid green' : '' }} >
            <div onDoubleClick={() => onUpdate(id)}>
            <h3>{name} </h3>
            <p>{deadline}</p>
            <p>{done ? 'Done!' : 'Not finished'}</p>
            </div>
            
            <div >
            <span className='likehateBtn'>
            <button className='heartBtn' onClick={() => updLoveCounts(id) }>{<FaHeart />}</button>
            <span className='loveCounts' style={{position:'absolute',color:'green',fontSize:'0.8rem'}}>{loveCounts}</span>
            </span>
            <span  className='hateCounts' >
            <button className='heartBtn' onClick={() => updHateCounts(id)}>
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
