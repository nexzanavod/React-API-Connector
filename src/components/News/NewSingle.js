import React from "react";

const NewSingle = ({ item }) => (
  <div className="col s4">
    <div className="card">
      <div className="card-image">
        <img src={item.thumbnailUrl} alt={item.name} />
      </div>
    </div>
  </div>
);

export default NewSingle;
