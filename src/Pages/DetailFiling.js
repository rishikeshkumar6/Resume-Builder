import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import "./styles/DetailFiling.css"
import PersonalInfo from '../Components/PersonalInfo/PersonalInfo'

const DetailFiling = () => {
  return (
    <div  className='detailfilling'>
     <SideBar/> 
     <PersonalInfo />
    </div>
  )
}

export default DetailFiling
