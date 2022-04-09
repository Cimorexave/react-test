import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <h1>Signal Inbox</h1>
        <input type='text' placeholder='Search...' className='serach-bar' />
            <i className='serach-icon'></i>
        <p>Balance: $2,895,102</p>
        |
        <button>Connect Wallet</button>
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