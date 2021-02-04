import {Link} from 'react-router-dom'
import { FaTimes ,FaHandMiddleFinger,FaHeart,FaCommentAlt} from 'react-icons/fa';




const Project = ({project, onRemove,onUpdate,updLoveCounts,updHateCounts}) => {
    let {id,name,deadline,done,loveCounts,hateCounts,messageCounts} = project;
    
    return (
        
            <div>
            
            <div className='project mobile_project' style={{borderTop: done ? '5px solid green' : '' }} >
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
                <span>
                <span className="tag">
                    <Link className="link" to={`/projectTrack/${id}`}><FaCommentAlt className="comment"/></Link>
                </span>
                <span style={{color:'green',fontSize:'0.8rem',position:'absolute'}}>
                    {messageCounts}
                </span>
                </span>
              
               </div>
               
               <button className='fatimes' style={{border:done ? '2px solid green': ''}} onClick={() => onRemove(id)}>{<FaTimes/>}</button>
           </div>
           
        </div>
    )
}

export default Project
