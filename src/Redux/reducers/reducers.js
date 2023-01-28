import * as actionTypes from "../actionTypes/actionTypes";

// Initial state for the selected template
const initialSelectedTemplateState = {
  // The ID of the currently selected template
  selectedTemplateId: null,
  // The ID of the currently selected resume
  selectedResumeId: null,
};

// Initial state for the personal info section
const initialPersonalInfoState = {
  // Object containing the personal information of the user
  personalInfo: {
    profileImg: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    objective: "",
  },
};

// Initial state for the work experience section
const initialWorkExperienceState = {
  // Array of objects containing the user's work experience
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

// Initial state for the education section
const initialEducationState = {
  // Object containing the user's education information
  educationInfo: {
    domain: "",
    university: "",
    degree: "",
    startYear: "",
    endYear: "",
  },
};

// Initial state for the skills section
const initialSkillsState = {
  skills: ["", "", "",""],
};

// Initial state for the projects section
const initialProjectsState = {
  projects: ["", "", "",""],
};

// Initial state for the achievements section
const initialAchievementsState = {
  // Array of the user's achievements
  achievements: ["", "", "",""],
};


// Reducer function for the selected template state
export const selectedTemplateReducer = (
  state = initialSelectedTemplateState,
  action
) => {
  // Switch statement to handle different actions
  switch (action.type) {
    // Case to handle SELECTTEMPLATE action
    case actionTypes.SELECTTEMPLATE:
      return { ...state, selectedTemplateId: action.payload };
    // Case to handle SELECTRESUME action
    case actionTypes.SELECTRESUME:
      return { ...state, selectedResumeId: action.payload };
    // Default case to return the current state
    default:
      return state;
  }
};

// Reducer function for the personal info state
export const personalInfoReducer = (
  state = initialPersonalInfoState,
  action
) => {
  // Switch statement to handle different actions
  switch (action.type) {
    // Case to handle ADDPERSONALINFO action
    case actionTypes.ADDPERSONALINFO:
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      };
    // Default case to return the current state
    default:
      return state;
  }
};

// Reducer function for the work experience state
export const workExperienceReducer = (
  state = initialWorkExperienceState,
  action
) => {
  // Switch statement to handle different actions
  switch (action.type) {
    // Case to handle ADDEXPERIENCE action
    case actionTypes.ADDEXPERIENCE:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };
    // Case to handle ADDALLEXPERIENCE action
    case actionTypes.ADDALLEXPERIENCE:
      return {
        ...state,
        experiences: action.payload,
      };
    // Default case to return the current state
    default:
      return state;
  }
};

// Reducer function for the skills state
export const keySkillsReducer = (state = initialSkillsState, action) => {
  // Switch statement to handle different actions
  switch (action.type) {
    // Case to handle ADDNEWSKILLS action
    case actionTypes.ADDNEWSKILLS:
      return { ...state, skills: [...state.skills, ""] };
    // Case to handle EDITSKILL action
    case actionTypes.EDITSKILL: {
      return {
        ...state,
        skills: action.payload,
      };
    }
    // Case to handle DELETESKILL action
    case actionTypes.DELETESKILL: {
      const newSkills = state.skills.filter(
        (skill, id) => id !== action.payload
      );

      return { ...state, skills: newSkills };
    }
    // Default case to return the current state
    default:
      return state;
  }
};

// Reducer function for the education state
export const educationDetailsReducer = (
  state = initialEducationState,
  action
) => {
  // Switch statement to handle different actions
  switch (action.type) {
    // Case to handle ADDEDUCATION action
    case actionTypes.ADDEDUCATION:
      return { ...state, educationInfo: action.payload };
    // Default case to return the current state
    default:
      return state;
  }
};

// Reducer function for the projects state
export const keyProjectsReducer = (state = initialProjectsState, action) => {
  // Switch statement to handle different actions
  switch (action.type) {
    // Case to handle ADDNEWPROJECTS action
    case actionTypes.ADDNEWPROJECTS:
      return { ...state, projects: [...state.projects, ""] };
    // Case to handle EDITPROJECT action
    case actionTypes.EDITPROJECT: {
      return {
        ...state,
        projects: action.payload,
      };
    }
    // Case to handle DELETEPROJECT action
    case actionTypes.DELETEPROJECT: {
      const newProjects = state.projects.filter(
        (project, id) => id !== action.payload
      );

      return { ...state, projects: newProjects };
    }
    // Default case to return the current state
    default:
      return state;
  }
};

// Reducer function for the achievements state
export const keyAchievementsReducer = (state = initialAchievementsState, action) => {
  // Switch statement to handle different actions
  switch (action.type) {
    // Case to handle ADDNEWACHIEVEMENTS action
    case actionTypes.ADDNEWACHIEVEMENTS:
      return { ...state, achievements: [...state.achievements, ""] };
    // Case to handle EDITACHIEVEMENT action
    case actionTypes.EDITACHIEVEMENT: {
      return {
        ...state,
        achievements: action.payload,
      };
    }
    // Case to handle DELETEACHIEVEMENT action
    case actionTypes.DELETEACHIEVEMENT: {
      const newAchievements = state.achievements.filter(
        (achievement, id) => id !== action.payload
      );

      return { ...state, achievements: newAchievements };
    }
    // Default case to return the current state
    default:
      return state;
  }
};