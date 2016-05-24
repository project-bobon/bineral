import { optimizedSoilValues } from './constants/optimizedValues';

export const getOptimizedSoilValues = (fe = 0) => {
  let feId = 0;
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
  } else if (fe >= 8) {
    feId = 13;
  }
  return optimizedSoilValues['fe' + feId];
};
