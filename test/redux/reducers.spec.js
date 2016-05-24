import { expect } from 'chai';

import * as actions from '../../src/actions';
import * as types from '../../src/constants/actionTypes';
import optimizedSoilValues  from '../../src/reducers/optimizedSoilValues';
import readings from '../../src/reducers/readings';
import { getOptimizedSoilValues } from '../../src/helpers';
import labels from '../../src/constants/labels';

describe('optimizesSoilValue', () => {
  it('should have the initial state', () => {
    expect(
      optimizedSoilValues(undefined, {})
    ).to.eql(
      getOptimizedSoilValues()
    );
  });
});


describe('readings', () => {
  const initialState = [
    { id: 'omClayPercentage', value: 0, requiredInput: '' },
    { id: 'soilDensity', value: 0, requiredInput: '' },
    { id: 'soilOm', value: 0, requiredInput: '' },
    { id: 'soilN', value: 0, requiredInput: '' },
    { id: 'soilP2o5', value: 0, requiredInput: '' },
    { id: 'soilK', value: 0, requiredInput: '' },
    { id: 'soilCa', value: 0, requiredInput: '' },
    { id: 'soilMg', value: 0, requiredInput: '' },
    { id: 'soilCation', value: 0, requiredInput: '' }
  ];

  it('should have the initial state', () => {
    expect(
      readings(undefined, {})
    ).to.eql(initialState);
  });

  it('should update readings state values when changed', () => {
    let newValue = 20;
    labels.forEach((l) => {
      expect(
        readings(initialState, {
          type: types.UPDATE_READING,
          id: l.id,
          value: newValue
        }).find((v) => v.id === l.id).value
      ).to.eql(newValue);
    });
  });

  it('should update required input value based on optimized val', () => {
    let newValue = 0.2;
    let omClayPercentage = 34;
    let expectedOptimizedValues = getOptimizedSoilValues(omClayPercentage);
    let expectedValues = initialState.slice(2).map((v) => {
      let requiredInput = expectedOptimizedValues[v.id] - newValue;
      if (requiredInput < 0) {
        requiredInput = '';
      }
      return {
        ...v,
        requiredInput,
        value: newValue
      };
    });
    let startingState = [
      { id: 'omClayPercentage', value: omClayPercentage, requiredInput: '' },
      ...initialState.slice(1)
    ];
    labels.forEach((l) => {
      let expectedSingleState = expectedValues.find((v) => v.id === l.id);
      let resultSingleState = readings(
          startingState,
          { type: types.UPDATE_READING, id: l.id, value: newValue }
        ).find((v) => v.id === l.id)
      expect(resultSingleState).to.eql(expectedSingleState);
    });
  });
});
