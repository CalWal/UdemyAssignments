import React from "react";

const Char = props => {
  const buttonStyle = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black"
  };
  return (
    <div onClick={props.clicked} style={buttonStyle}>
      {props.character}
    </div>
  );
};

export default Char;
