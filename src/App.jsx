import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { useId, useState } from 'react' 

function App() {

  const [theme, settheme] = useState('light')
  let themeId = useId()
  
   
  

  const changeTheme = (e)=>{
    //  console.log(e.target.checked)
     if(e.target.checked == true){
      settheme('dark')
    }else{
       settheme('light')
     }
  }

  return (
    <>        
      
      <div className={`main ${theme}`}>
        <div className='navbar'>           
          <Link className='nav-link' to='/' >Home</Link>
          <Link className='nav-link' to='/about' >About me</Link>
          <Link className='nav-link' to='/projects' >Portfolio</Link>
          <Link className='nav-link' to='/contact' >Contact</Link>
          <div className='switch'>
            <input type="checkbox" id={themeId} onChange={changeTheme}/>
            <label htmlFor={themeId}>Dark</label>
          </div>
        </div>
        <div className='content'>           
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/projects' element={<Projects/>} />
          </Routes>
        </div>
      </div>
      

      
    </>
  )
}

export default App
