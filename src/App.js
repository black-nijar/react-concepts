import React, { lazy, Suspense } from "react";
import Call from "./Call";
import { Closure } from "./closure";
import Hoisting from "./Hoisting";
import Objects from "./Objects";
import Spread from "./Spread";

const OptimizeComp = lazy(() => import("./Lazy"));
const App = () => {
  // console.log("1");
  // setTimeout(() => {
  //   console.log("2");
  // }, 0);
  // console.log("3");

  const testDec = async () => {
    // console.log("0");
    // await timed;
    // console.log("3");
  };
  return (
    <div>
      {/* <OptimizeComp /> */}
      {/* {testDec()} */}
      {/* <Call /> */}
      {/* <Closure /> */}
      {/* <Hoisting /> */}
      {/* <Objects /> */}
      <Spread />
    </div>
  );
};

export default App;
