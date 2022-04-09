import React from 'react'

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
            <p>73M Followers</p>
            <p>98% Winrate</p>
            <p>2713 Signals</p>
            <p>75354 Point</p>
            <div className='inner-card'>
                <button>Overview</button>
                <button>Full Analysis</button>
                <div className='sticker'>
                    <i></i>
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
                </footer>
            </div>
        </div>
    </div>
  )
}

export default Card