import React from "react";

const checklength = props => {
  let ValidationText = "Text long enough";

  if (props.text <= 5) {
    ValidationText = "Text too short";
  }

  return (
    <div>
      <p>{ValidationText}</p>
    </div>
  );
};

export default checklength;
