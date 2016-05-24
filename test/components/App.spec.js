import App from '../../src/components/App';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

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

  it('should have all mineral fields', () => {
    const ids = Object.keys(getOptimizedSoilValues());
    const wrapper = renderApp();
    ids.forEach((id) => {
      expect(wrapper.find('.soil-reading-row-' + id)).to.have.length(1);
      expect(wrapper.find('#' + id)).to.have.length(1);
    });
  });
});
