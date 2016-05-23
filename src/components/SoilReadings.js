import React from 'react';
import OmClayPercentage from '../containers/OmClayPercentage';
import SoilDensity from './SoilDensity';
import SoilTable from './SoilTable';

const SoilReadings = () => (
  <section>
    <OmClayPercentage />
    <SoilDensity />
    <SoilTable />
  </section>
);

export default SoilReadings;
