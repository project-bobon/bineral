import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import CardAvatar from './CardAvatar';

const cardStyle = {
  marginBottom: 20
};

const headerStyle = {
  background: '#000',
  color: '#fff'
};

const titleStyle = {
  color: '#fff'
};

const FertilizerList = ({ requiredFertilizers }) => (
  <section>
    { Object.keys(requiredFertilizers).map(k => {
        let el = requiredFertilizers[k];
        let innerContent = '';

        if (el.fertilizers.length > 0) {
          innerContent = <CardText> { el.fertilizers.map(v => JSON.stringify(v)) } </CardText>;
        }

        return (
          <Card
            key={el.id}
            style={ cardStyle }
          >
            <CardHeader
              title={ 'Required: ' + el.value.toFixed(2) + ' ' + el.unit}
              avatar={ <CardAvatar text={ el.id } /> }
              style={ headerStyle }
              titleStyle={ titleStyle }
            />
            { innerContent }
          </Card>
        );
      }) }
  </section>
);

export default FertilizerList;
