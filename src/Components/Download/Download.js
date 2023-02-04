import React from 'react'
import "./Download.css"
import icon from "../Assets/download.png"

function Download() {
    return (
        <div className="Modal" id="Modal">
            <div className="modalContainer">
                <div className="RightTickImage">
                    <img style={{ height: "50px", width: "50px" }} src={icon} alt="" />
                </div>
                <div className="Para">
                    <p>Your resume has been download successfully.</p>
                </div>
            </div>
        </div>
    )
}

export default Download;