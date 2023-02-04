import React from 'react'
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

// This function maps the state to the props
const mapStateToProps = (state) => ({
    // This line gets the selectedTemplateId from the state
    selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
  });
  
  // This function dispatches actions
  const mapDispatchToProps = (dispatch) => {
    return {};
  };

// This component checks if a selectedTemplateId exists
const SelectTemp = (props) => {
    // Destructure the selectedTemplateId from the props
    const selectedId = props.selectedTemplateId;
    // Return the children if selectedTemplateId exists
    // Otherwise, navigate to the "/" path
    return selectedId ? props.children : <Navigate to={"/"} />;
  };

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(SelectTemp);