import React from 'react'

const Header = ({toggleForm,showForm}) => {
    return (
        <div className='header'>
            <h1>Project Tracker</h1>
            <button className={showForm ? 'btn btnClose' : 'btn btnOpen'} onDoubleClick={() => toggleForm()}>{showForm ? 'Close Form' : 'Open Form'}</button>
        </div>
    )
}

export default Header
