import React  from 'react'
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyResume from './Pages/MyResume';
import Navbar from './Components/Navbar/Navbar';
import DetailFiling from './Pages/DetailFiling'; 
import SelectTemp from './Templates/Components/SelectTemp';

const App = () => {
  return (
    // Wrapping the entire App with Router component
    <Router>
      {/* Navbar component for navigation */}
      <Navbar />
      {/* Defining different routes using Routes component */}
      <Routes>
        {/* Home route */}
        <Route exact path="/" element={<Home />} />  
        {/* Detail filing route */}
        <Route exact path="/template/fill-details" element={ <SelectTemp><DetailFiling /></SelectTemp>}/>
        {/* My Resumes route */}
        <Route exact path="/my/resumes" element={<MyResume />} />
        {/* About Us route */}
        <Route exact path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App