import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../../src/components/App';
import SoilReadings from '../../src/containers/SoilReadings';
import TopBar from '../../src/components/TopBar';

describe('<App>', () => {
  it('should have an TopBar', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(TopBar)).to.have.length(1);
  });

  it('should have an om clay percentage field', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(TopBar)).to.have.length(1);
  });

  it('should have SoilReadings', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(SoilReadings)).to.have.length(1);
  });
});
