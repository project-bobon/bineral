import { optimizedSoilValues } from '../constants/optimizedValues';

const getOptimizedSoilValues = (fe = 13) => {
  let feId = 13;
  if (fe >= 37.5 ) {
    feId = 41;
  } else if (fe >= 31) {
    feId = 34;
  } else if (fe >= 25.5) {
    feId = 28;
  } else if (fe >= 20.5) {
    feId = 23;
  } else if (fe >= 15.5) {
    feId = 18;
  }
  return optimizedSoilValues['fe' + feId];
};

export default getOptimizedSoilValues;
