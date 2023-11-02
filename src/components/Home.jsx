import React, { useState } from 'react'
import dp from '../assets/dp.jpg'


export default function Home() {
  return (
    <>
        <div className='hero'>
            <div className='hero-item-1'>
                <img src={dp} alt="dp" className='disp'  />
            </div>
            <div className='hero-item-2'>
                <h1>A RAVI TEJA</h1>
                <p>Hi, I am a <b>Full-stack</b> developer. I am focused on developing end to end software solutions</p>
                <div className='social'>
                    <a href="https://www.linkedin.com/in/a-ravi-teja-7b7bb4a3/" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://codepen.io/araviteja91" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-codepen"></i>
                    </a>
                    <a href="https://github.com/ARaviteja91" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </div>        
    </>
  )
}
