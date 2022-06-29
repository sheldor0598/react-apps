import React from "react";

const Button = (props) => {
  const { btnText = "", btnHandler = "" } = props;
  return <button onClick={btnHandler}>{btnText}</button>;
};

export default Button;
