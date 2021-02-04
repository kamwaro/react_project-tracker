import React from 'react'
import {Link} from 'react-router-dom'

const Header = ({toggleForm,showForm}) => {
    return (
        <div className='header'>
            <h1 ><Link to='/' className='header_title'>Project Tracker</Link></h1>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <p style={{padding:'0px 3em 0 0'}}><Link to='/about' className='link'>About</Link></p>
            <p><button className={showForm ? 'btn btnClose' : 'btn btnOpen'}  onDoubleClick={() => toggleForm()}>{showForm ? 'Close Form' : 'Open Form'}</button> 
            </p>
            </div>
            
        </div>
    )
}

export default Header
