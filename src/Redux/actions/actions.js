import * as actionTypes from "../actionTypes/actionTypes";

export const selectTemplate = (id) => ({
  type: actionTypes.SELECTTEMPLATE,
  payload: id,
});

export const selectResume = (id) => ({
  type: actionTypes.SELECTRESUME,
  payload: id,
});

export const addPersonalInfo = (details) => ({
  type: actionTypes.ADDPERSONALINFO,
  payload: details,
});

export const addExperience = (experience) => ({
  type: actionTypes.ADDEXPERIENCE,
  payload: experience,
});

export const addAllExperience = (experiences) => ({
  type: actionTypes.ADDALLEXPERIENCE,
  payload: experiences,
});

export const addNewSkills = () => ({
  type: actionTypes.ADDNEWSKILLS,
  payload: null,
});

export const editSkill = (skills) => ({
  type: actionTypes.EDITSKILL,
  payload: skills,
});

export const deleteSkill = (id) => ({
  type: actionTypes.DELETESKILL,
  payload: id,
});

export const addEducation = (details) => ({
  type: actionTypes.ADDEDUCATION,
  payload: details,
});

export const addProjects = (details) => ({
  type: actionTypes.ADDNEWPROJECTS,
  payload: details,
});

export const addAchievements = (details) => ({
  type: actionTypes.ADDNEWACHIEVEMENTS,
  payload: details,
});

export const editProject = (projects) => ({
  type: actionTypes.EDITPROJECT,
  payload: projects,
});

export const deleteProject = (id) => ({
  type: actionTypes.DELETEPROJECT,
  payload: id,
});

export const editAchievements = (achivements) => ({
  type: actionTypes.EDITACHIEVEMENT,
  payload: achivements,
});

export const deleteAchievements = (id) => ({
  type: actionTypes.DELETEACHIEVEMENT,
  payload: id,
});