import chemistry from './chemistry';
import t from '../t';

const labels = [
  {
    id: "soilOm",
    text: t("OM"),
    unit: "%"
  },
  {
    id: "soilN",
    text: chemistry.N,
    unit: "meq%"
  },
  {
    id: "soilP2o5",
    text: chemistry.P2O5,
    unit: "ppm"
  },
  {
    id: "soilK",
    text: chemistry.K,
    unit: "meq%"
  },
  {
    id: "soilCa",
    text: chemistry.Ca,
    unit: "meq%"
  },
  {
    id: "soilMg",
    text: chemistry.Mg,
    unit: "meq%"
  },
  {
    id: "soilCation",
    text: chemistry.Cation,
    unit: "%"
  }
];

export default labels;
