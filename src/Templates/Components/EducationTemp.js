import React from 'react'
import './styles/Educationtemp.css'

// EducationTemp component to display education details
const EducationTemp = (props) => {
  // render an h3 element with the education details
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