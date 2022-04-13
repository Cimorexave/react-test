import React from 'react';
import '../styles/card.css';

const Card = () => {
  return (
    <div className='card'>
        <div className='card-header'>
            <i className='avatar'></i>
            <h1>Abhish Mohanty</h1>
            <i className='badge'>badge 1</i>
            <i className='badge'>badge 2</i>
            <button>Follow</button>
            <hr/>
            <div className="status">
            </div>
            <p>73M Followers</p>
            <p>98% Winrate</p>
            <p>2713 Signals</p>
            <p>75354 Point</p>
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