// Importing the action types from the actionTypes file
import * as actionTypes from "../actionTypes/actionTypes";

// Action creator for selecting a template
export const selectTemplate = (id) => ({
type: actionTypes.SELECTTEMPLATE,
payload: id,
});

// Action creator for selecting a resume
export const selectResume = (id) => ({
type: actionTypes.SELECTRESUME,
payload: id,
});

// Action creator for adding personal information
export const addPersonalInfo = (details) => ({
type: actionTypes.ADDPERSONALINFO,
payload: details,
});

// Action creator for adding a single experience
export const addExperience = (experience) => ({
type: actionTypes.ADDEXPERIENCE,
payload: experience,
});

// Action creator for adding all experiences
export const addAllExperience = (experiences) => ({
type: actionTypes.ADDALLEXPERIENCE,
payload: experiences,
});

// Action creator for adding new skills
export const addNewSkills = () => ({
type: actionTypes.ADDNEWSKILLS,
payload: null,
});

// Action creator for editing a skill
export const editSkill = (skills) => ({
type: actionTypes.EDITSKILL,
payload: skills,
});

// Action creator for deleting a skill
export const deleteSkill = (id) => ({
type: actionTypes.DELETESKILL,
payload: id,
});

// Action creator for adding education details
export const addEducation = (details) => ({
type: actionTypes.ADDEDUCATION,
payload: details,
});

// Action creator for adding new projects
export const addNewProjects = (details) => ({
type: actionTypes.ADDNEWPROJECTS,
payload: details,
});

// Action creator for adding new achievements
export const addNewAchievements = (details) => ({
type: actionTypes.ADDNEWACHIEVEMENTS,
payload: details,
});

// Action creator for editing a project
export const editProject = (projects) => ({
type: actionTypes.EDITPROJECT,
payload: projects,
});

// Action creator for deleting a project
export const deleteProject = (id) => ({
type: actionTypes.DELETEPROJECT,
payload: id,
});

// Action creator for editing an achievement
export const editAchievement = (achivements) => ({
type: actionTypes.EDITACHIEVEMENT,
payload: achivements,
});

// Action creator for deleting an achievement
export const deleteAchievement = (id) => ({
type: actionTypes.DELETEACHIEVEMENT,
payload: id,
});