import React from "react";

const char = props => {
  const inline = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textAligh: "center"
  };

  return (
    <div style={inline} onClick={props.click}>
      <p>{props.ca}</p>
    </div>
  );
};

export default char;
