import template1Img from "./Components/Assets/Templates1.jpg";
import template2Img from "./Components/Assets/Template2.png";
import template3Img from "./Components/Assets/Template3.jpg";
import template4Img from "./Components/Assets/Template4.jpg";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2";
import Template3 from "./Templates/Template3";
import Template4 from "./Templates/Template4";

export const templates = [
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