import React from 'react';
import '../styles/sidebar.css';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <button className='close-sidebar'></button>
        <div className='logo-comp'>
            <i className='logo-icon'>i</i>
            Rising
        </div>
        <div className='list-item'>
            Dashboard
            <i className='dasboard-icon'>i</i>
        </div>
        <p>Main</p>
        <div className='list-item'>
            Home
            <i className='home-icon'>i</i>
        </div>
        <div className='list-item'>
            Inbox
            <i className='inbox-icon'>i</i>
        </div>
        <div className='list-item'>
            Setting
            <i className='setting-icon'>i</i>
        </div>
        <div className='help-card'>
            <div className='help-icon'>?</div>
            <p>Need Help with Rising?</p>
            <button className='help-button'>Go to help center</button>
        </div>
    </div>
  )
}

export default Sidebar