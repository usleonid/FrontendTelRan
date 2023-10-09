import React from "react";
import { withBackGround } from "../hoc/withBackGround";

const Student = ({ name, age }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
    </div>
  );
};

export default withBackGround(Student);
