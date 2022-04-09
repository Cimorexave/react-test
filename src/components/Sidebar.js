import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <button className='close-sidebar'></button>
        <div className='logo'>
            Rising
            <i className='logo-icon'></i>
        </div>
        <div className='list-item'>
            Dashboard
            <i className='dasboard-icon'></i>
        </div>
        <p>Main</p>
        <div className='list-item'>
            Home
            <i className='home-icon'></i>
        </div>
        <div className='list-item'>
            Inbox
            <i className='inbox-icon'></i>
        </div>
        <div className='list-item'>
            Setting
            <i className='setting-icon'></i>
        </div>
        <div className='help-card'>
            <i className='help-icon'></i>
            <p>Need Help with Rising?</p>
            <button className='help-button'>Go to help center</button>
        </div>
    </div>
  )
}

export default Sidebar