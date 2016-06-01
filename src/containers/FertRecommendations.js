import React from 'react';
import { connect } from 'react-redux';

import FertilizerTable from '../components/FertilizerTable';

const calculateFertilizers = (state) => {
  const defaultUnit = 'mol/ha';
  let requiredFertilizers = {
    N: {
      id: 'N',
      value: 0,
      fertilizers: [],
      unit: defaultUnit
    },
    P: {
      id: 'P',
      value: 0,
      fertilizers: [],
      unit: 'ppm/ha'
    },
    K: {
      id: 'K',
      value: 0,
      fertilizers: [],
      unit: defaultUnit
    },
    Mg: {
      id: 'Mg',
      value: 0,
      fertilizers: [],
      unit: defaultUnit
    },
    Ca: {
      id: 'Ca',
      value: 0,
      fertilizers: [],
      unit: defaultUnit
    }
  };

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
    requiredFertilizers.N.value = 0;
  } else {
    N = optimizedSoilValues.soilN;
    requiredFertilizers.N.value = (N - readings.soilN) / 0.1 / 1000 * soilFactor;
  }

  // Calculate P.
  if (readings.soilP >= optimizedSoilValues.soilP2o5) {
    P = 0;
    requiredFertilizers.P.value = 0;
  } else {
    P = optimizedSoilValues.soilP2o5;
    requiredFertilizers.P.value = (P - readings.soilP2o5) / 0.1 / 1000000 * soilFactor;
  }

  // Calculate input of KCl.
  let requiredKCl = 0;
  if (readings.soilK >= optimizedSoilValues.soilK) {
    K = readings.soilK;
    requiredFertilizers.K.value = 0;
  } else {
    K = parseFloat(optimizedSoilValues.soilK);
    requiredKCl = 2 * soilFactor * (K - readings.soilK) / 0.1 / 1000 * 78;
    requiredFertilizers.K.value = 2 * soilFactor * (K - readings.soilK) / 0.1 / 1000;
  }
  requiredFertilizers.K.fertilizers.push({
    id: 'KCl',
    value: requiredKCl
  });

  // Calculate input of MgO.
  let requiredMgO = 0;
  if (readings.soilMg / K < 3) {
    Mg = K * 3;
    requiredFertilizers.Mg.value = (Mg - readings.soilMg) * soilFactor / 0.1 / 1000;
    requiredMgO = requiredFertilizers.Mg.value * 20.16;
  } else {
    Mg = readings.soilMg;
    requiredMgO = 0;
  }
  requiredFertilizers.Mg.fertilizers.push({
    id: 'MgO',
    value: requiredMgO
  });

  // Calculate input of dolomite.
  requiredFertilizers.Mg.fertilizers.push({
    id: 'dolomite',
    value: requiredMgO / 17 * 100
  });

  // Calculate required CaO.
  let requiredCaO = 0;
  let CaOFromDolomite = requiredFertilizers.dolomite * 28.3 / 100;
  let CaFromDolomite = CaOFromDolomite / 56.0774 / 1.3999 / soilFactor * 100;
  if ((readings.soilCa + Mg) / K < 10) {
    Ca = K * 10 - Mg;
    requiredFertilizers.Ca.value = (Ca - readings.soilCa) / 0.1 / 1000 * soilFactor;
    requiredCaO = (Ca - readings.soilCa) / 0.1 / 1000 * soilFactor * 1.399;
    if (requiredFertilizers.CaO < 0) {
      requiredCaO = 0;
    }
  } else {
    Ca = readings.soilCa;
    requiredCaO = 0;
  }
  requiredFertilizers.Ca.fertilizers.push({
    id: 'CaO',
    value: requiredCaO
  });

  return requiredFertilizers;
};

const mapStateToProps = (state) => {
  return {
    requiredFertilizers: calculateFertilizers(state)
  };
};

const FertRecommendations = connect(mapStateToProps)(FertilizerTable);

export default FertRecommendations;
