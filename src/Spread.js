import React, { useEffect } from "react";

const Spread = () => {
  const restOp = (a, ...rest) => {
    console.log(a, ...rest);
  };

  useEffect(() => {
    restOp(10, 20, 30, 40);
  }, []);
  const a = [10, 20, 30, 40, 50];
  const b = a;
  b[0] = 100;
  console.log({ b });
  console.log({ a });

  const c = [100, 200, 300];
  const d = [...c];
  d[0] = 1000;
  console.log({ c });
  console.log({ d });
  return <div>Spread</div>;
};

export default Spread;
