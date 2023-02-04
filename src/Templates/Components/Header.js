import React from 'react'
import "./styles/Header.css"

// The `Header` component takes in personal information, work experience, and color-related props as its arguments
const Header = (props) => {
  return (
    // The header has a background color specified by the `bgColor` prop
    <div style={{ backgroundColor: props.bgColor }}>
      <div className="templateheading">
        <div className="firsttemplateheading">
          {/* If a profile image is available, display it */}
          {props.personalInfo.profileImg.length > 0 ? (
            <div className="imgcontainertemplate">
              <img
                className="profileimgtemplate"
                src={props.personalInfo.profileImg}
                alt="profile-img"
              />
            </div>
          ) : (
            // If a profile image is not available, display a colored block with initials
            <div
              style={{ backgroundColor: props.primaryColor }}
              className="imgcontainertemplate">
              <p style={{ color: props.bgColor }} className="imgtexttemplate">
                AM
              </p>
            </div>
          )}
          <div className="userdetailtemplate">
            {/* Display the user's name */}
            <h2
              style={{ color: props.primaryColor }}
              className="usernametemplate">
              {props.personalInfo.firstName + " " + props.personalInfo.lastName}
            </h2>
            {/* Display the user's job title */}
            <h3 style={{ marginLeft: "5px" }}>
              {props.workExperience[0].jobTitle}
            </h3>
            {/* Display the user's mobile number */}
            <h5 style={{ marginLeft: "5px" }}>
            {props.personalInfo.mobile} 
            </h5>
            {/* Display the user's email */}
            <h5 style={{ marginLeft: "5px" }}>
            {props.personalInfo.email}
            </h5>
          </div>
        </div>
        {/* Display the user's address */}
        <p
          style={{ color: props.primaryColor }}
          className="secondheadertemplate">
          {props.personalInfo.address} {""}
          <br />
          {props.personalInfo.city} {""}
          <br />
          {props.personalInfo.state} {""}
          <br />
          {props.personalInfo.pinCode} {""}
        </p>
      </div>
      <div style={{ padding: "0px 20px 5px" }}>
      {/* Display the user's objective */}
      <p
        style={{ color: props.secondaryColor,
          fontSize:"14px", margin:"5px"}}>
        {props.personalInfo.objective}
      </p>
      </div>
    </div>
  );
};

export default Header