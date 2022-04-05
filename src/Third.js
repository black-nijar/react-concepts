import React from "react";

const Third = ({ counter = 1 }) => {
  console.log("Functional");

  return <div>Functional Component - {counter}</div>;
};

export default Third;
