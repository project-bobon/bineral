import * as types from '../constants/actionTypes';

export default updateData = (id, value) => {
  return {
    type: types.UPDATE_DATA,
    id,
    value
  };
};

export default setLanguage = (language) => {
  return {
    type: types.SET_LANGUAGE,
    language
  };
};
