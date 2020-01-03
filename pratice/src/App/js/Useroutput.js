import React from "react";

const userOutput = props => {
  return (
    <div className="p">
      <p onClick={props.click}>{props.type} is fine</p>
      <p>{props.children}</p>
    </div>
  );
};

export default userOutput;
