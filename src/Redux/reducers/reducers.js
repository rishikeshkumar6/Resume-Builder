import * as actionTypes from "../actionTypes/actionTypes";

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

const initialSkillsState = {
  skills: ["", "", ""],
};

const initialProjectsState = {
  projects: ["", "", ""],
};


const initialAchievementsState = {
  achievements: ["", "", ""],
};


export const selectedTemplateReducer = (
  state = initialSelectedTemplateState,
  action
) => {
  switch (action.type) {
    case actionTypes.SELECTTEMPLATE:
      return { ...state, selectedTemplateId: action.payload };
    case actionTypes.SELECTRESUME:
      return { ...state, selectedResumeId: action.payload };
    default:
      return state;
  }
};

export const personalInfoReducer = (
  state = initialPersonalInfoState,
  action
) => {
  switch (action.type) {
    case actionTypes.ADDPERSONALINFO:
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      };
    default:
      return state;
  }
};

export const workExperienceReducer = (
  state = initialWorkExperienceState,
  action
) => {
  switch (action.type) {
    case actionTypes.ADDEXPERIENCE:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };
    case actionTypes.ADDALLEXPERIENCE:
      return {
        ...state,
        experiences: action.payload,
      };
    default:
      return state;
  }
};

export const keySkillsReducer = (state = initialSkillsState, action) => {
  switch (action.type) {
    case actionTypes.ADDNEWSKILLS:
      return { ...state, skills: [...state.skills, ""] };
    case actionTypes.EDITSKILL: {
      return {
        ...state,
        skills: action.payload,
      };
    }
    case actionTypes.DELETESKILL: {
      const newSkills = state.skills.filter(
        (skill, id) => id !== action.payload
      );

      return { ...state, skills: newSkills };
    }
    default:
      return state;
  }
};

export const educationDetailsReducer = (
  state = initialEducationState,
  action
) => {
  switch (action.type) {
    case actionTypes.ADDEDUCATION:
      return { ...state, educationInfo: action.payload };
    default:
      return state;
  }
};



export const keyProjectsReducer = (state = initialProjectsState, action) => {
  switch (action.type) {
    case actionTypes.ADDNEWPROJECTS:
      return { ...state, Projects: [...state.projects, ""] };
    case actionTypes.EDITPROJECT: {
      return {
        ...state,
        projects: action.payload,
      };
    }
    case actionTypes.DELETEPROJECT: {
      const newProjects = state.projects.filter(
        (projects, id) => id !== action.payload
      );

      return { ...state, projects: newProjects };
    }
    default:
      return state;
  }
};

export const keyAchievementsReducer = (state = initialAchievementsState, action) => {
  switch (action.type) {
    case actionTypes.ADDNEWACHIEVEMENTS:
      return { ...state, Achievements: [...state.achievements, ""] };
    case actionTypes.EDITACHIEVEMENT: {
      return {
        ...state,
        projects: action.payload,
      };
    }
    case actionTypes.DELETEACHIEVEMENT: {
      const newAchievements = state.achievements.filter(
        (achievements, id) => id !== action.payload
      );

      return { ...state, achievements: newAchievements };
    }
    default:
      return state;
  }
};