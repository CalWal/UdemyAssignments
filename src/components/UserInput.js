import React from "react";

const UserInput = props => {
  return (
    <div className="inputStyle">
      <input
        type="text"
        placeholder="Try typing something!"
        onChange={props.change}
        value={props.inputName}
      />
      <p>{props.inputName}</p>
    </div>
  );
};

export default UserInput;
