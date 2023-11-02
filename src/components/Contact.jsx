import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  

  
  

  return (
    <>
      <div className="contact">
        <h1>Contact me</h1>
        <div>
          <p><b>Email me : </b></p>
          <p>arigraraviteja@gmail.com</p>  
          <br />
        </div>

          <p><b><u>Connect me on ther platforms</u></b></p>
          <div className='social' >
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
    </>
  )
}

export default Contact