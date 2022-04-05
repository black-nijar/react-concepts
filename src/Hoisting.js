import React, { useEffect } from "react";

const Hoisting = () => {
  var a = 100;
  function dummy() {
    var a = 111;
    console.log(a);
  }
  console.log(a);
  useEffect(() => {
    dummy();
  }, []);

  return <div>Hoisting</div>;
};

export default Hoisting;
