import React, { useState }  from 'react'
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import { Routes, Route } from "react-router-dom";
import MyResume from './Pages/MyResume';
import Navbar from './Components/Navbar/Navbar';



const App = () => {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.title = 'NR - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.title = 'NR - Light Mode';
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Routes>
        <Route exact path="/" element={<Home mode={mode}/>} />
        <Route exact path="/my/resumes" element={<MyResume mode={mode}/>} />
        <Route exact path="/about-us" element={<AboutUs mode={mode} />} />
      </Routes>
    </>
  )
}

export default App
