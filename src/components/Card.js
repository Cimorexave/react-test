import React from 'react';
import '../styles/card.css';

const Card = () => {
  return (
    <div className='card'>
        <div className='card-header'>
            <div className="card-header-top">
            <i className='avatar bi bi-person-fill'></i>
            <h1>Abhish Mohanty</h1>
            <i className='bi bi-shield-fill-check badge'></i>
            <i className='bi bi-trophy-fill badge'></i>
            <button>Follow</button>
            </div>
            <hr/>
            <div className="status">
            <p className='status-p'>73M Followers</p>
            <p className='status-p'>98% Winrate</p>
            <p className='status-p'>2713 Signals</p>
            <p className='status-p'>75354 Point</p>
            </div>
        </div>
        <div className='inner-card'>
                <button className='inner-card-btn inner-card-btn-one'>Overview</button>
                <button className='inner-card-btn inner-card-btn-two'>Full Analysis</button>
                <div className="inner-card-ps">
                    <p><i></i>Analysy Type: Premium</p>
                    <p><i></i>BTCUSDT Bitcoing/Tether</p>
                    <p><i></i>ExChange: Binance</p>
                    <p><i></i>TimeFrame: 4H</p>
                    <p><i></i>Market: Futures</p>
                    <p><i></i>Method: Swing Trading</p>
                    <p><i></i>Position: Short</p>
                    <p><i></i>Leverage: 5X</p>
                </div>
                <div className='sticker'>
                    <i className='sticker-icon'>i</i>
                    <p>Premium Analysis</p>
                    <p>0.10 $</p>
                    <p>Some description</p>
                    <button>Buy Now</button>
                </div>
                <footer className='card-footer'>
                    <p><i></i>1,967,381</p>
                    <p><i></i>471,292</p>
                    <p>Published in 12-15-2021</p>
                    <p>23:18:51</p>
                    <i></i>
                    <i></i>
                    <i> </i>
                </footer>
            </div>
    </div>
  )
}

export default Card