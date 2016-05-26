import { elements } from './chemistry';
import t from '../t';

const labels = [
  {
    id: 'soilOm',
    text: t('OM'),
    unit: '%'
  },
  {
    id: 'soilN',
    text: elements.N,
    unit: 'meq%'
  },
  {
    id: 'soilP2o5',
    text: elements.P2O5,
    unit: 'ppm'
  },
  {
    id: 'soilK',
    text: elements.K,
    unit: 'meq%'
  },
  {
    id: 'soilCa',
    text: elements.Ca,
    unit: 'meq%'
  },
  {
    id: 'soilMg',
    text: elements.Mg,
    unit: 'meq%'
  },
  {
    id: 'soilCation',
    text: elements.Cation,
    unit: '%'
  }
];

export default labels;
