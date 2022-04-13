import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <div className='header'>
        <h1>Signal Inbox</h1>
        <div className='search-bar-con'>
          <i className='search-icon bi bi-search'></i>
          <input type='text' placeholder='Search...' className='search-bar' />
        </div>
        <p className='balance-p'>Balance: $2,895,102</p>
        <p className="line">|</p>
        <button className='connect-wallet'><p>Connect Wallet</p></button>
        <p className="line">|</p>
        <button className='btn moon-btn'><i className=' btn-i bi bi-moon-fill'></i></button>
        <button className='btn bell-btn'><i className=' btn-i bi bi-bell-fill'></i></button>
        <button className='btn person-btn'><i className=' btn-i bi bi-person-circle'></i></button>
        <p className='jax'>Jaxtyn Henry</p>
        <i className='i bi bi-chevron-down'></i>
    </div>
  )
}

export default Header