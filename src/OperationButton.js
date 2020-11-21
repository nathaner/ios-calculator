import React from "react";
import "./Button.css";
import "./OperationButton.css";

export default function Button({ children, name, onClick }) {
  return (
    <div onClick={() => onClick(name)} className="button orange">
      {children}
    </div>
  );
}
