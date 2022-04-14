import React from 'react';
import '../styles/card.css';
import medal from '../resources/gold-medal.jpg';

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
                    <p><i className='inner-card-pi bi bi-trophy-fill'></i>Analysy Type: Premium</p>
                    <p><i className='inner-card-pi bi bi-currency-exchange'></i>BTCUSDT Bitcoing/Tether</p>
                    <p><i className='inner-card-pi bi bi-bounding-box'></i>ExChange: Binance</p>
                    <p><i className='inner-card-pi bi bi-calendar-week'></i>TimeFrame: 4H</p>
                    <p><i className='inner-card-pi bi bi-graph-up'></i>Market: Futures</p>
                    <p><i className='inner-card-pi bi bi-bullseye'></i>Method: Swing Trading</p>
                    <p><i className='inner-card-pi bi bi-arrow-left-right'></i>Position: Short</p>
                    <p><i className='inner-card-pi bi bi-x-diamond-fill'></i>Leverage: 5X</p>
                </div>
                <div className='sticker'>
                    <img className='medal' src={medal} alt="medal" />
                    <p className='sticker-p'>Premium Analysis</p>
                    <p className='sticker-p'>0.10 $</p>
                    <p className='sticker-p'>
                        But the Signal now and add it to your inbox <br />
                        if the signal is successfull, <br />
                        the cost will be multiplied with your account.
                        otherwise will be refunded to your account.
                    </p>
                    <button>Buy Now</button>
                </div>
                <footer className='card-footer'>
                    <div className="card-footer-stats">
                    <p className='cfp'><i className='bi bi-eye-fill'></i> 1,967,381</p>
                    <p className='cfp'><i className='bi bi-bag-dash-fill'></i> 471,292</p>
                    <p className='cfp'> Published in 12-15-2021</p>
                    <p className='cfp'> 23:18:51</p>
                    </div>
                    <div className="footer-icons">
                        <i className='cfpr bi bi-bookmark-dash-fill'></i>
                        <i className='cfpr bi bi-bell-fill'></i>
                        <i className='cfpr bi bi-box-arrow-right'></i>
                    </div>
                </footer>
            </div>
    </div>
  )
}

export default Card