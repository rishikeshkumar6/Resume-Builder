import {
  WhatsApp,
  Facebook,
  LinkedIn,
  Instagram,
  Twitter,
  Reddit,
  Email,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./styles/About.css";

const AboutUs = () => {
  return (
    <div>
      <Stack p={{ xs: "15px", sm: "25px", md: "30px", lg: "33px " }}>
        <h2 className="header-title">Resume Builder</h2>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Typography
            className="Typography"
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
            }}
          >
            Our resume builder website is designed to help job seekers create professional and effective resumes in minutes. With our user-friendly interface, you can easily input your information and choose from a variety of customizable templates to create a resume that highlights your skills and experiences. Our platform also includes a variety of tools to help you optimize your resume for Applicant Tracking Systems, which are used by many companies to automatically screen resumes. Additionally, you can also get feedback and suggestions on your resume to make it stand out. Our website also provides a feature for creating cover letters that match the style of your resume. With our resume builder, you can be confident that your resume will make a great first impression and help you stand out from the competition. Sign up now and take the first step in landing your dream job!
          </Typography>
          <Stack className="img">
            <img
              src="https://media.istockphoto.com/id/849410148/vector/human-resources-management-concept.jpg?s=612x612&w=0&k=20&c=YCuOlwFaN2jwhCUmu3px_4AdPctg_EH8ud-9iGYwr2M="
              alt="resume-bulider-img"
            />
          </Stack>
        </Stack>
        <Stack>
          <Typography
            className="Share"
            sx={{
              fontSize: {
                lg: "30px",
                md: "28px",
                sm: "27px",
                sx: "25px",
              },
              fontWeight: "550",
              marginTop: "25px",
            }}
          >
            Please share your with friends
          </Typography>
        </Stack>
        <Box className="icons">
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp
              className="WhatsApp"
              sx={{ fontSize: "35px", margin: 1 }}
            ></WhatsApp>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              className="Facebook"
              sx={{ fontSize: "35px", margin: 1 }}
            ></Facebook>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn
              className="LinkedIn"
              sx={{ fontSize: "35px", margin: 1 }}
            ></LinkedIn>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              className="Instagram"
              sx={{ fontSize: "35px", margin: 1 }}
            ></Instagram>
          </a>
          <a
            href="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email
              className="Email"
              sx={{ fontSize: "35px", margin: 1 }}
            ></Email>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter
              className="Twitter"
              sx={{ fontSize: "35px", margin: 1 }}
            ></Twitter>
          </a>
          <a
            href="https://www.reddit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Reddit
              className="Reddit"
              sx={{ fontSize: "35px", margin: 1 }}
            ></Reddit>
          </a>
        </Box>
      </Stack>
    </div>
  );
};

export default AboutUs;
