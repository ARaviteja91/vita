import React from 'react'
import { Link } from 'react-router-dom'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import codepen from '../assets/codepen.svg'

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
          <div className='social'>
            <a href="https://www.linkedin.com/in/a-ravi-teja-7b7bb4a3/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className='lkn' width={20} />
            </a>
            <a href="https://codepen.io/araviteja91" target="_blank" rel="noopener noreferrer">
                <img src={codepen} alt="Codepen" className='cdp' width={20} />
            </a>
            <a href="https://github.com/ARaviteja91" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Github" className='git' width={20} />
            </a>
          </div>      
      </div>
    </>
  )
}

export default Contact