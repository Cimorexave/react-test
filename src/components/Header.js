import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <div className='header'>
        <h1>Signal Inbox</h1>
        <div>
          <input type='text' placeholder='Search...' className='search-bar' />
          <i className='serach-icon'></i>
        </div>
        <p className='balance-p'>Balance: $2,895,102</p>
        |
        <button className='connect-wallet'>Connect Wallet</button>
        |
        <button><i></i></button>
        <button><i></i></button>
        <button><i></i></button>
        <p>Jaxtyn Henry</p>
        <i></i>
    </div>
  )
}

export default Header