import React, { useState } from 'react'
import SideBar from '../Components/SideBar/SideBar'
import "./styles/DetailFiling.css"
import PersonalInfo from '../Components/PersonalInfo/PersonalInfo'
import WorkExperience from '../Components/WorkExperience/WorkExperience'
import Education from '../Components/Education/Education'
import KeySkill from '../Components/KeySkill/KeySkill'
import Achievements from '../Components/Achievements/Achievements'
import Projects from '../Components/Projects/Projects'
import Preview from '../Components/Preview/Preview'

const DetailFiling = (props) => {
  const [click, setClick] = useState(0)
  return (
    <div>
      {click === 6 ? null : (
        <div className='detailfilling'>
          <SideBar click={click} setClick={setClick} />
          {click === 0 ? <PersonalInfo   click={click} setClick={setClick} /> : null}
          {click === 1 ? <WorkExperience click={click} setClick={setClick} /> : null}
          {click === 2 ? <Education      click={click} setClick={setClick} /> : null}
          {click === 3 ? <KeySkill       click={click} setClick={setClick} /> : null}
          {click === 4 ? <Achievements   click={click} setClick={setClick} /> : null}
          {click === 5 ? <Projects       click={click} setClick={setClick} /> : null}
        </div>
      )}
      {click === 6 ? <Preview click={click} setClick={setClick} /> : null}
    </div>
  )
}

export default DetailFiling