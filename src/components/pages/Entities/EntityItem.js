import React from  'react';
import {Card, Icon} from "semantic-ui-react";


const EntityItem = ({name, officialFifa, type}) => (
  <Card style={{margin: 10}}>
    <Card.Content header={name} />
    <Card.Content description={`This is of type: ${type}`} />
    <Card.Content extra>
      <Icon name='trophy' />
      {officialFifa ? "Official Fifa Certified" : "Non official Fifa"}
    </Card.Content>
  </Card>
);

export default EntityItem;