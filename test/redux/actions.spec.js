import { expect } from 'chai';
import * as actions from '../../src/actions';
import * as types from '../../src/constants/actionTypes';

describe('actions', () => {
  it('should create an action to update reading', () => {
    const expectedAction = {
      type: types.UPDATE_READING,
      id: 'omClayPercentage',
      value: 80
    };
    expect(actions.updateReading('omClayPercentage', 80)).to.eql(expectedAction);
  });

  it('should create an action to switch language', () => {
    const expectedAction = {
      type: types.SET_LANGUAGE,
      id: 'EN'
    };
    expect(actions.setLanguage('EN')).to.eql(expectedAction);
  });
});
