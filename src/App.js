import React  from 'react'
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyResume from './Pages/MyResume';
import Navbar from './Components/Navbar/Navbar';
import DetailFiling from './Pages/DetailFiling'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />  
        <Route exact path="/template/fill-details" element={<DetailFiling />}/>
        <Route exact path="/my/resumes" element={<MyResume />} />
        <Route exact path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App
