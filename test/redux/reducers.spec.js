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

const initialReadingsState = [
  { id: 'omClayPercentage', value: 0 },
  { id: 'soilDensity', value: 0 },
  { id: 'soilOm', value: 0 },
  { id: 'soilN', value: 0 },
  { id: 'soilP2o5', value: 0 },
  { id: 'soilK', value: 0 },
  { id: 'soilCa', value: 0 },
  { id: 'soilMg', value: 0 },
  { id: 'soilCation', value: 0 }
];

const initialRequiredInputState = initialReadingState.slice(2);

describe('readings reducers', () => {
  it('should have the initial state', () => {
    expect(
      readings(undefined, {})
    ).to.eql(initialReadingsState);
  });

  it('should update readings state values when changed', () => {
    let newValue = 20;
    labels.forEach((l) => {
      expect(
        readings(initialReadingsState, {
          type: types.UPDATE_READING,
          id: l.id,
          value: newValue
        }).find((v) => v.id === l.id).value
      ).to.eql(newValue);
    });
  });
});
