import chemistry from './chemistry';
import t from '../t';

const labels = [
  {
    id: "Om",
    text: t("OM"),
    unit: "%"
  },
  {
    id: "N",
    text: chemistry.N,
    unit: "ppm"
  },
  {
    id: "P2o5",
    text: chemistry.P2O5,
    unit: "ppm"
  },
  {
    id: "K",
    text: chemistry.K,
    unit: "ppm"
  },
  {
    id: "Ca",
    text: chemistry.Ca,
    unit: "ppm"
  },
  {
    id: "Mg",
    text: chemistry.Mg,
    unit: "ppm"
  }
];

export default labels;
