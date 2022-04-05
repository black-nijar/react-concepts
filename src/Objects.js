import React from "react";

const Objects = () => {
  const a = {
    name: "apple",
    age: 10,
  };
  const x = Object({
    name: "nijar",
    age: 22,
  });
  x.age = 25;
  console.log({ x });
  const b = a;
  console.log({ b });
  b.age = 11;
  console.log({ a });
  const c = { ...a };
  console.log({ c });
  c.name = "samsung";
  a.age = 12;
  return <div>Objects</div>;
};

export default Objects;
