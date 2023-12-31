import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {

  let projects_list = [
    {
      id:1,
      name: 'Python Socket',
      url:'https://github.com/ARaviteja91/python-socket',
      thumbnail:'',
    },     
    {
      id:2,
      name: 'Django blog',
      url:'https://github.com/ARaviteja91/djang-blog',
      thumbnail:'',
    },     
    {
      id:3,
      name: 'Theme changer',
      url:'https://github.com/ARaviteja91/themechanger',
      thumbnail:'',
    },     
    {
      id:4,
      name: 'Threejs Project',
      url:'https://github.com/ARaviteja91/threejs-project',
      thumbnail:'',
    },     
    {
      id:5,
      name: 'Cards stack',
      url:'https://github.com/ARaviteja91/cards-stack',
      thumbnail:'',
    },     
    { 
      id:6,
      name: 'Photo grid',
      url:'https://github.com/ARaviteja91/photogrid',
      thumbnail:'',
    },     
    
    { 
      id:7,
      name: 'Business card generator',
      url:'https://github.com/ARaviteja91/card-generator',
      thumbnail:'',
    },     
    { 
      id:8,
      name: 'Text to Speech',
      url:'https://github.com/ARaviteja91/texttospeech',
      thumbnail:'',
    },     
    
  ]
   

  return (
    <>

    <div className='portfolio'>
      <h1>My Portfolio</h1>

       
      <div className='prj-grid'>
         {projects_list.map(item=>(
          <div key={item.id} className='prj-card'>
            <img src={item.thumbnail} alt="" className="thumbnail" />
            <h3 className='prj-title'>{item.name}</h3>
            <Link to={item.url} className='prj-link'>View on Github</Link>
          </div>
            
         ))}
      </div>

    
    </div>
    </>
  )
}

export default Projects

// @fortawesome/fontawesome-svg-core@6.4.2
// ├── @fortawesome/free-regular-svg-icons@6.4.2
// ├── @fortawesome/free-solid-svg-icons@6.4.2
// ├── @fortawesome/react-fontawesome@0.2.0