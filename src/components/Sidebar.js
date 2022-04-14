import React from 'react';
import '../styles/sidebar.css';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <button className='close-sidebar'>
            <i class=" bi-i bi bi-arrow-left-short"></i>
        </button>
        <div className='logo-comp'>
            <i className=" bi-i logo-icon bi bi-boxes"></i>
            <p className='logo-comp-p'>Rising</p>
        </div>
        <div className='list-item'>
            <i className='bi-i dasboard-icon bi bi-house-door-fill'></i>
            Dashboard
        </div>
        <p className='main-p'>Main</p>
        <div className='list-item'>
            <i className='bi-i home-icon bi bi-display-fill'></i>
            Home
        </div>
        <div className='list-item'>
            <i className='bi-i inbox-icon bi bi-inbox-fill'></i>
            Inbox
        </div>
        <div className='list-item'>
            <i className='bi-i setting-icon bi bi-gear-fill'></i>
            Setting
        </div>
        <div className='help-card'>
            <i className='bi-i help-icon bi bi-question-lg'></i>
            <p>Need Help with Rising?</p>
            <button className='help-button'>Go to help center</button>
        </div>
    </div>
  )
}

export default Sidebar