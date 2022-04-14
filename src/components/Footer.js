import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <p className="footer-p"><i className='bi bi-plus-circle-fill'></i> Publish Analysis</p>
        <p>|</p>
        <p className="footer-p"><i className='bi bi-chat-dots-fill'></i> Global Chat</p>
    </div>
  )
}

export default Footer