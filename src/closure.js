import React, { useEffect } from "react";

export const Closure = () => {
  // function along with its lexical scope is known as closure
  function a() {
    var a = 7;
    a = 11;
    console.log(a);
    function b() {
      let a = 33;
      console.log(a);
    }
    console.log(a);
    return b;
  }
  useEffect(() => {
    let c = a();
    c();
  }, []);
  return <div>closure</div>;
};
