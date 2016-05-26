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

const initialReadingsState = {
  omClayPercentage: 0,
  soilDensity: 0,
  soilOm: 0,
  soilN: 0,
  soilP2o5: 0,
  soilK: 0,
  soilCa: 0,
  soilMg: 0,
  soilCation: 0,
  soilDepth: 20
};

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
        })[l.id]
      ).to.equal(newValue);
    });
  });
});
