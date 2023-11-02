import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
        <div className='about' >
            
            <h1>About me</h1>
            <div className='nameplate'>
                <h2>A Ravi Teja</h2>
                <p>Full- stack developer</p>            
            </div>
            <hr />
            <div className="description">
                <p>
                    As a full stack developer with 3+ years of experience, 
                    I have built web applications using various technologies 
                    and frameworks, such as <b>Python, HTML, CSS, JavaScript, 
                    Django, React, and Node.js</b>.
                    <br /> 
                    <br /> 
                    I enjoy solving complex problems and creating user-friendly 
                    interfaces. I have a high standard for code quality and always 
                    seek to learn new things and improve my skills. 
                    My goal is to work on challenging projects that can make a 
                    positive difference in the world.
                </p>
            </div>
            <hr />

             
            <div className='languages'>
            <h2>My Skills and Expertise</h2>
                <h3>Languages</h3>

                <div className="grid-box">
                    <li className='skills'>Python <progress max="10" value="8" style={{accentColor:'green'}}></progress> </li> 
                    <li className='skills'>JavaScript  <progress max="10" value="8" style={{accentColor:'green'}}></progress></li>
                </div>
                
            </div>
            <div className='frameworks'>
                <h3>Frameworks and libraries</h3>

                <div className="grid-box">
                    <li className='skills'>Django <progress max="10" value="7" style={{accentColor:'green'}}></progress></li>
                    <li className='skills'>Node.js <progress max="10" value="4" style={{accentColor:'green'}}></progress></li>
                    <li className='skills'>Reactjs <progress max="10" value="7" style={{accentColor:'green'}}></progress></li>
                    <li className='skills'>Express.js <progress max="10" value="5" style={{accentColor:'green'}}></progress></li>
                </div>
                
            </div>
            <div className='tools'>
                <h3>Tools</h3>

                <div className='grid-box'>
                    <li className='skills' >Git version control</li>
                    <li className='skills' >Github actions</li>
                    <li className='skills' >Postman</li>
                </div>
                
            </div>
            
             
            <hr />
            <div className='exp-edu'>
                <div className='exp'>
                    <h3>Experience</h3>
                     <ul>
                        <li>
                            <span className='date'>2022 - 2023</span>
                            <span className='comp'> Full-stack engineer </span>
                            <span >Hey Mitty Pyt.Ltd</span>
                        </li>
                        <li>
                            <span className='date'>2021 - 2022</span>
                            <span className='comp'> Web developer </span>
                            <span >Ace and Spades Pvt.Ltd</span>
                        </li>
                        <li>
                            <span className='date'>2019 - 2020</span>
                            <span className='comp'> CTO </span>
                            <span >Future-step Enterprise LLP </span>
                        </li>
                    </ul>
                </div>
                <div className="edu">
                    <h3>Education</h3>
                    <br />
                    <div>
                        <i class="fa-solid fa-graduation-cap"></i><span> 2015 - 2022</span>
                        <p><b>Graduation : </b> Bachelor's in technology</p>
                        <p><b>Stream : </b> Electrnics and Communiction Engineering</p>
                        <p><b>Institute : </b> Vignana Bharathi Institute of technology (JNTU) </p>
                    </div>
                </div>
            </div>           
            
        </div>

         
    </>
  )
}

export default About