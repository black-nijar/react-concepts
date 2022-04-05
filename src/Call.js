import React, { useEffect } from "react";

const Call = () => {
  let name = {
    fName: "Nijar",
    lName: "Rajak",
  };
  let pFName = function (city, state) {
    console.log("full Name", this.fName, this.lName, city, state);
  };

  let name2 = {
    fName: "Fahath",
    lName: "Rajak",
  };
  let learning = {
    technology: "JavaScript",
    printActivity: function () {
      console.log("Learning ", this.technology);
    },
  };

  let learningSomethingNew = {
    technology: "React",
  };
  learning.printActivity.call(learningSomethingNew);
  useEffect(() => {
    // borrowing function immediatly invoked
    pFName.call(name2, "SA", "US");
    pFName.apply(name, ["DGL", "TN"]);

    let fullName = pFName.bind(name, "Chennai", "TN");

    // copy the func invoke later
    console.log(fullName());
  }, []);

  return <div>Call</div>;
};

export default Call;
