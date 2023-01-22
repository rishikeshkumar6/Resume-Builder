// Importing the createStore and combineReducers functions from the 'redux' library
import { createStore } from "redux";
import { combineReducers } from "redux";

// Importing all the different reducers that will be combined in this file
import {
  selectedTemplateReducer,
  personalInfoReducer,
  workExperienceReducer,
  keySkillsReducer,
  educationDetailsReducer,
  keyAchievementsReducer,
  keyProjectsReducer,
} from "../reducers/reducers";

// Creating a store by combining all the different reducers
export const store = createStore(
  combineReducers({
    selectedTemplateReducer,
    personalInfoReducer,
    workExperienceReducer,
    keySkillsReducer,
    educationDetailsReducer,
    keyAchievementsReducer,
    keyProjectsReducer,
  })
);
