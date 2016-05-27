import React from 'react';
import { connect } from 'react-redux';

import FertilizerResults from '../components/FertilizerResults';

const calculateFertilizers = (state) => {
  let requiredFertilizers = {};
  let readings = state.readings;
  let optimizedSoilValues = state.optimizedSoilValues;
  let soilFactor = 10000 * (readings.soilDepth / 100) * (readings.soilDensity * 1000);
  let K = 0,
      Mg = 0,
      Ca = 0,
      N = 0,
      P = 0;

  // Calculate N.
  if (readings.soilN >= optimizedSoilValues.soilN) {
    N = 0;
    requiredFertilizers.N = 0;
  } else {
    N = optimizedSoilValues.soilN;
    requiredFertilizers.N = (N - readings.soilN) / 0.1 / 1000 * soilFactor;
  }

  // Calculate P.
  if (readings.soilP >= optimizedSoilValues.soilP2o5) {
    P = 0;
    requiredFertilizers.P = 0;
  } else {
    P = optimizedSoilValues.soilP2o5;
    requiredFertilizers.P = (P - readings.soilP2o5) / 0.1 / 1000 * soilFactor;
  }

  // Calculate input of KCl.
  if (readings.soilK >= optimizedSoilValues.soilK) {
    K = readings.soilK;
    requiredFertilizers.KCl = 0;
    requiredFertilizers.K = 0;
  } else {
    K = parseFloat(optimizedSoilValues.soilK);
    requiredFertilizers.KCl = 2 * soilFactor * (K - readings.soilK) / 0.1 / 1000 * 78;
    requiredFertilizers.K = 2 * soilFactor * (K - readings.soilK) / 0.1 / 1000;
  }

  // Calculate input of MgO.
  let MgOFactor = soilFactor * 20.16 / 1000;
  if (readings.soilMg / K < 3) {
    Mg = K * 3;
    requiredFertilizers.MgO = (Mg - readings.soilMg) / 0.1 * MgOFactor;
  } else {
    Mg = readings.soilMg;
    requiredFertilizers.MgO = 0;
  }

  // Calculate input of dolomite.
  requiredFertilizers.dolomite = requiredFertilizers.MgO / 17 * 100;

  // Calculate required CaO.
  let CaOFromDolomite = requiredFertilizers.dolomite * 28.3 / 100;
  let CaFromDolomite = CaOFromDolomite / 56.0774 / 1.3999 / soilFactor * 100;
  if ((readings.soilCa + Mg) / K < 10) {
    Ca = K * 10 - Mg;
    requiredFertilizers.CaO = (Ca - readings.soilCa) / 0.1 / 1000 * soilFactor * 1.399;
    if (requiredFertilizers.CaO < 0) {
      requiredFertilizers.CaO = 0;
    }
  } else {
    Ca = readings.soilCa;
    requiredFertilizers.CaO = 0;
  }

  return requiredFertilizers;
};

const mapStateToProps = (state) => {
  const requiredFertilizers = calculateFertilizers(state);
  return {
    requiredFertilizers
  };
};

const RequiredFertilizer = connect(mapStateToProps)(FertilizerResults);

export default RequiredFertilizer;
