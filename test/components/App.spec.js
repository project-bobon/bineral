import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../../src/components/App';
import SoilTable from '../../src/components/SoilTable';
import LeaveTable from '../../src/components/LeaveTable';
import TopBar from '../../src/components/TopBar';

describe('<App>', () => {
  it('should have an TopBar', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(TopBar)).to.have.length(1);
  });

  it('should have a SoilTable', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(SoilTable)).to.have.length(1);
  });

  it('should have a LeaveTable', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(LeaveTable)).to.have.length(1);
  });
});
