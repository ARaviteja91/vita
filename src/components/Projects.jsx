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
      name: 'Cards stack',
      url:'https://github.com/ARaviteja91/cards-stack',
      thumbnail:'',
    },     
    { 
      id:5,
      name: 'Photo grid',
      url:'https://github.com/ARaviteja91/photogrid',
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