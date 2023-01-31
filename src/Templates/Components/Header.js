import React from 'react'
import "./styles/Header.css"

const Header = (props) => {
  return (
    <div style={{ backgroundColor: props.bgColor }}>
      <div className="templateheading">
        <div className="firsttemplateheading">
          {props.personalInfo.profileImg.length > 0 ? (
            <div className="imgcontainertemplate">
              <img
                className="profileimgtemplate"
                src={props.personalInfo.profileImg}
                alt="profile-img"
              />
            </div>
          ) : (
            <div
              style={{ backgroundColor: props.primaryColor }}
              className="imgcontainertemplate">
              <p style={{ color: props.bgColor }} className="imgtexttemplate">
                AM
              </p>
            </div>
          )}
          <div className="userdetailtemplate">
            <h2
              style={{ color: props.primaryColor }}
              className="usernametemplate">
              {props.personalInfo.firstName + " " + props.personalInfo.lastName}
            </h2>
            <p
              style={{ color: props.secondaryColor }}
              className="designationuser">
              {props.workExperience[0].jobTitle}
            </p>
          </div>
        </div>
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
      <p
        style={{ color: props.secondaryColor, marginLeft: '5px' }}
        className="usermobilemailtemplate">
        {props.personalInfo.mobile}
      </p>
      <p
        style={{ color: props.secondaryColor, marginLeft: '5px' }}
        className="usermobilemailtemplate">
        {props.personalInfo.email}
      </p>
      <p
        style={{ color: props.secondaryColor }}
        className="aboutusertemplate">
        {props.personalInfo.objective}
      </p>
    </div>
  );
};

export default Header;