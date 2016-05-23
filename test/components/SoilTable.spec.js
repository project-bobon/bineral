import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SoilTable from '../../src/components/SoilTable';
import labels from '../../src/data/labels';

describe('<SoilTable>', () => {
  it('should have all mineral rows', () => {
    const wrapper = shallow(<SoilTable/>);
    labels.forEach((l) => {
      expect(wrapper.find('.soil-reading-row-' + l.id)).to.have.length(1);
    });
  });
});
