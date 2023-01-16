import React, { useState } from 'react'
import SideBar from '../Components/SideBar/SideBar'
import "./styles/DetailFiling.css"
import PersonalInfo from '../Components/PersonalInfo/PersonalInfo'

const DetailFiling = () => {
  const [click ,setClick] = useState(0)
  return (
    <div  className='detailfilling'>
     <SideBar click={click} setClick={setClick}/> 
     <PersonalInfo />
    </div>
  )
}

export default DetailFiling
