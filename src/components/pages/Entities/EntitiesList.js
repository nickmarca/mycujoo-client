import React from "react";
import EntityItem from "./EntityItem";

const EntityList = ({entities}) => (
  <div style={{display: 'flex', flexWrap: "wrap", paddingTop: 40, justifyContent: "space-between"}}>
    {entities.map(entity => <EntityItem {...entity} key={entity.id}/>)}
  </div>
);

export default EntityList;