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
            Build beautiful, recruiter-tested resumes in a few clicks! Our
            resume builder is powerful and easy to use, with a range of amazing
            functions. Custom-tailor resumes for any job within minutes.
            Increase your interview chances and rise above the competition. A
            resume builder is an online tool that you can use to quickly create
            a resume. Resume builders allow you to pick a pre-formatted resume
            template, fill in your contact and background information, and
            select pre-written work history bullet points — saving you a lot of
            time. We have developed a resume builder based on feedback from
            thousands of users, recruiter expertise, stellar template design and
            the best hiring practices. The goal is simple: help you land that
            dream job interview! Get an advantage in the modern professional
            environment.
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
