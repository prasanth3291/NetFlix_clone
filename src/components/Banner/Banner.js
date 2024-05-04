import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div>
 <div className='banner'>
        <div className='content' >
                <h1 className='title'>Unlimited movies, TV shows, and more  </h1>
                <h1 className='subtitle'>Watch anywhere. Cancel anytime.</h1>
                <h1 className='description'>Ready to watch? Enter your email to create or restart your membership.</h1>
                <div class="input-container">
                <input type="text" class="transparent-input" placeholder="Email address" />
                <button class="custom-button">Get Started</button>
                </div>
            </div>
        <div className="fade_bottom"></div>
    </div>
    <div className='gray'></div>
    </div>
  )
}

export default Banner
