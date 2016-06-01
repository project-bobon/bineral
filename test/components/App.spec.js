import React from 'react';
import { TableHeaderColumn } from 'material-ui/table';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import App from '../../src/components/App';
import FertRecommendations from '../../src/containers/FertRecommendations';
import SoilReadings from '../../src/containers/SoilReadings';
import TopBar from '../../src/components/TopBar';
import { getOptimizedSoilValues } from '../../src/helpers';
import { renderApp } from '../testHelpers';

describe('<App>', () => {
  it('should have an TopBar', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(TopBar)).to.have.length(1);
  });

  it('should have an om clay percentage field', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('#omClayPercentage')).to.have.length(1);
  });

  it('should have an soil density field', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('#soilDensity')).to.have.length(1);
  });

  it('should have SoilReadings', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(SoilReadings)).to.have.length(1);
  });

  it('should have FertRecommendations', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(FertRecommendations)).to.have.length(1);
  });
});

describe('<SoilReadings/>', () => {
  it('should have 3 columns', () => {
    const wrapper = renderApp();
    expect(wrapper.find('th')).to.have.length(3);
  });

  it('should have all mineral fields', () => {
    const wrapper = renderApp();
    const ids = Object.keys(getOptimizedSoilValues());
    ids.forEach((id) => {
      expect(wrapper.find('.soil-reading-row-' + id)).to.have.length(1);
      expect(wrapper.find('#' + id)).to.have.length(1);
    });
  });
});
