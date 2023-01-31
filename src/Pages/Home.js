import React from "react";
import "./styles/Home.css";
import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { templates } from "../templates";
import BlackScreen from "../Components/BlackScreen/BlackScreen";
import { selectTemplate } from "../Redux/actions/actions";
import { connect } from 'react-redux';

// This section creates an array of template objects, each of which contains an id, template name, image and the template component.

// This section maps the state and dispatch to props so that the component can access the selected template id and set the selected template id.

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
});

const Home = (props) => {

  // This section defines the main Home component and uses the useNavigate hook to navigate to a different page, and a function to navigate to the details filling page and set the selected template id.

  const navigate = useNavigate();

  const navigateToDetailFilling = (id) => {
    props.setSelectedTemplateId(id);
    navigate("/template/fill-details");
  };

  return (
    <>
    {/* This section returns the JSX that renders the template images and a button to navigate to the details filling page. It uses a Stack component from the material-ui library to create a grid of templates and maps over the templates array to render each template's image and button. */}
      <div className="Home-container">
        <h1 className="header-title">Templates</h1>
        <p className="paragraph">Select a Template</p>
        <Stack
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: {
              sm: "1fr 1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            },
            gap: "30px",
          }}
        >
          {templates.map((template) => {
            return (
              <div key={template.id} id="template" className="img-container">
                <img
                  className="template-img"
                  src={template.template_img}
                  alt={template.template_name}
                />
                <BlackScreen></BlackScreen>
                <Button
                  className="use-template-btn"
                  onClick={() => navigateToDetailFilling(template.id)}
                  size="medium"
                  variant="contained"
                >
                  Use Template
                </Button>
              </div>
            );
          })}
        </Stack>
      </div>
    </>
  );
};
//exports the component and connects the component to the redux store.
export default connect(mapStateToProps, mapDispatchToProps)(Home);