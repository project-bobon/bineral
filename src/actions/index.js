import * as types from '../constants/actionTypes';

export const updateReading = (id, value) => {
  return {
    type: types.UPDATE_READING,
    id,
    value
  };
};

export const updateOmClayPercentage = (value) => {
  return {
    type: types.UPDATE_OM_CLAY_PERCENTAGE,
    value
  };
};

export const setLanguage = (language) => {
  return {
    type: types.SET_LANGUAGE,
    language
  };
};
