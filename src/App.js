import React from 'react'
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import { Routes, Route } from "react-router-dom";
import MyResume from './Pages/MyResume';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/my/resumes" element={<MyResume />} />
        <Route exact path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
