import React from 'react'
import './styles/Home.css'
import { Stack, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import template1Img from "../Components/Assets/Template1.png";
import template2Img from "../Components/Assets/Template2.png";
import template3Img from "../Components/Assets/Template3.png";
import template4Img from "../Components/Assets/Template4.png";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";
import BlackScreen from '../Components/BlackScreen/BlackScreen';

const templates = [
  {
    id: 1,
    template_name: "Template 1",
    template_img: template1Img,
    template: <Template1 />,
  },
  {
    id: 2,
    template_name: "Template 2",
    template_img: template2Img,
    template: <Template2 />,
  },
  {
    id: 3,
    template_name: "Template 3",
    template_img: template3Img,
    template: <Template3 />,
  },
  {
    id: 4,
    template_name: "Template 4",
    template_img: template4Img,
    template: <Template4 />,
  },
];


const Home = (props) => {
  const navigate = useNavigate();

  const navigateToDetailFilling = (id) => {
    props.setSelectedTemplateId(id);
    navigate("/template/fill-details");
  };

  return (
    <>
      <div className="Home-container">
        <h1 className="header-title">
          Templates
        </h1>
        <p className='paragraph'>
          Select a Template
        </p>
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
          }}>
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
                  variant="contained">
                  Use Template
                </Button>
              </div>
            );
          })}
        </Stack>

      </div>
    </>
  )
}

export default Home
