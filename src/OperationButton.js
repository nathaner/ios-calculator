import React from "react";
import "./Button.css";
import "./OperationButton.css";

export default function Button({ children, onClick }) {
  return (
    <div onClick={() => onClick(children)} className="button orange">
      {children}
    </div>
  );
}
