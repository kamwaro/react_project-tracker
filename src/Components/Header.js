import React from 'react'

const Header = ({toggleForm}) => {
    return (
        <div className='header'>
            <h1>Project Tracker</h1>
            <button className="btn" onDoubleClick={() => toggleForm()}>Open Form</button>
        </div>
    )
}

export default Header
