import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SoilReadings from '../../src/components/SoilReadings';
import OmClayPercentage from '../../src/containers/OmClayPercentage';
import SoilDensity from '../../src/components/SoilDensity';
import SoilTable from '../../src/components/SoilTable';

describe('<SoilReadings>', () => {
  it('should have input field for om clay percentage', () => {
    const wrapper = shallow(<SoilReadings/>);
    expect(wrapper.find(OmClayPercentage)).to.have.length(1);
  });

  it('should have input field for soil density', () => {
    const wrapper = shallow(<SoilReadings/>);
    expect(wrapper.find(SoilDensity)).to.have.length(1);
  });

  it('should have a soil readings table', () => {
    const wrapper = shallow(<SoilReadings/>);
    expect(wrapper.find(SoilTable)).to.have.length(1);
  });
});
