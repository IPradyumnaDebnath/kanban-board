import React from "react";

export const Card = ({ cardTitle = "", cardContent = "" }) => {
  return (
    <div className="card">
      <div className="card-body ">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardContent}</p>
      </div>
    </div>
  );
};
export default Card;
