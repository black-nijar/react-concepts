import React from "react";

const AdvancedJS = () => {
  const outter = () => {
    let count = 0;

    const inner = () => {
      count++;
      console.log(count);
    };
    return inner;
  };
  // const closure = outter();
  return (
    <div>
      AdvancedJS
      {outter()}
      {outter()}
    </div>
  );
};

export default AdvancedJS;
