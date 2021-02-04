import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
    return (
       
        <div className='aboutStyles'>
            <div >
            <h2>Peterson's Project Tracker</h2>
            </div>
            <div className='about'>
            <p ><Link to='/' className='link'>Back home </Link></p>
            <p> &copy; 2021</p>
            </div>
            

        </div>
       
            
    )
}

export default About
