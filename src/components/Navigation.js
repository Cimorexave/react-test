import React from 'react';
import '../styles/navigation.css';

const Navigation = () => {
  return (
    <div className='navigation'>
        <div className='warning'>
            <i></i>
            <p>You can view your purchased or saved analytics here.</p>
        </div>
        <div className='navigation-buttons'>
            <button>All Inbox</button>
            <button>Crypto Inbox</button>
            <button>Forex Inbox</button>
            <button>Stock Inbox</button>
            <button>Sort by <i></i></button>
            <button>Filter <i></i></button>
        </div>
    </div>
  )
}

export default Navigation