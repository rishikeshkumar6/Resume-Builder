import React from 'react'
import './styles/Educationtemp.css'

const EducationTemp = (props) => {
  return (
    <h3 className="templatedetailseducation">
      {props.education.degree} in {props.education.domain}{" "}
      <span className="templateuniversity">
        {props.education.university}
      </span>
      <span className="startendeducation">
        ({props.education.startYear} - {props.education.endYear})
      </span>
    </h3>
  );
};

export default EducationTemp
