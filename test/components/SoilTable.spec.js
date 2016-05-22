import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import SoilTable from '../../src/components/SoilTable';

describe('<SoilTable>', () => {
  it('should have input field for om clay percentage', () => {
    const wrapper = mount(<SoilTable/>);
    expect(wrapper.find('#om_clay_p')).to.have.length(1);
  });

  it('should have input field for soil density', () => {
    const wrapper = mount(<SoilTable/>);
    expect(wrapper.find('#soil_density')).to.have.length(1);
  });
});
