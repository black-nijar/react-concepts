import React from "react";

const Four = ({ counter = 1 }) => {
  console.log("Memo");

  return <div>Functional Memo Comp - {counter}</div>;
};

export default React.memo(Four);
