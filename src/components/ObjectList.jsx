import React from "react";
import objects from "../data/objects.json";

const ObjectList = () => {
  return (
    <div className="object-container">
      {objects.map((obj) => (
        <div key={obj.id} className="object-card">
          <img src={obj.image} alt={obj.title} />
          <h3>{obj.title}</h3>
          <p>{obj.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ObjectList;