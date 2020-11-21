import React from "react";
import "./Button.css";

export default function Button({ children, type, size, onNumberClick }) {
  let classes = "button " + type;
  if (size === "double") classes += " double";
  return (
    <div onClick={() => onNumberClick(children)} className={classes}>
      {children}
    </div>
  );
}
