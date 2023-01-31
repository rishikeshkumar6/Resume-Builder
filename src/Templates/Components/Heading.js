import React from 'react'
import './styles/Heading.css'

const Heading = (props) => {
    return (
      <div>
        <h2
          style={{ color: props.color }}
          className="professionalexpheading">
          {props.title}
        </h2>
        <hr style={{ backgroundColor: props.color }} className="verticalline" />
      </div>
    );
  };

export default Heading
