import React from 'react';
import '../styles/navigation.css';

const Navigation = () => {
  return (
    <div className='navigation'>
        <div className='warning'>
            <i className=' warning-icon bi bi-exclamation-triangle-fill'></i>
            <p>You can view your purchased or saved analytics here.</p>
        </div>
        <div className='navigation-buttons'>
            <button className='inbox-btn'>All Inbox</button>
            <button className='inbox-btn'>Crypto Inbox</button>
            <button className='inbox-btn'>Forex Inbox</button>
            <button className='inbox-btn'>Stock Inbox</button>
            <button className='sort-btn r-btn'>Sort by <i className='bi bi-sort-down'></i></button>
            <button className='filter-btn r-btn'>Filter <i className='bi bi-filter-right'></i></button>
        </div>
    </div>
  )
}

export default Navigation