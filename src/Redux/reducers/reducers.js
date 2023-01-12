import * as actionTypes from "./actionTypes";

const initialSelectedTemplateState = {
  selectedTemplateId: null,
  selectedResumeId: null,
};

const initialPersonalInfoState = {
  personalInfo: {
    profileImg: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    objective: "",
  },
};

const initialWorkExperienceState = {
  experiences: [
    {
      id: 1,
      jobTitle: "",
      organizationName: "",
      startYear: "",
      endYear: "",
    },
  ],
};

const initialEducationState = {
  educationInfo: {
    domain: "",
    university: "",
    degree: "",
    startYear: "",
    endYear: "",
  },
};


const initialProjectsState = {
    Projects: ["", "", ""],
};


const initialAchivementsState = {
    Achivements: ["", "", ""],
};