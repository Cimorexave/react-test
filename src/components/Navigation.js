import React from 'react';
import '../styles/navigation.css';

const Navigation = () => {
  return (
    <div className='navigation'>
        <div className='warning'>
            <i>i</i>
            <p>You can view your purchased or saved analytics here.</p>
        </div>
        <div className='navigation-buttons'>
            <button className='inbox-btn'>All Inbox</button>
            <button className='inbox-btn'>Crypto Inbox</button>
            <button className='inbox-btn'>Forex Inbox</button>
            <button className='inbox-btn'>Stock Inbox</button>
            <button>Sort by <i></i></button>
            <button>Filter <i></i></button>
        </div>
    </div>
  )
}

export default Navigation