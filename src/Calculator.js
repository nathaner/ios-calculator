import React, { useState } from "react";
import "./Calculator.css";
import Screen from "./Screen";
import Button from "./Button";
import OperationButton from "./OperationButton";

function performOperation(firstNumber, secondNumber, operation) {
  switch (operation) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber + secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
    default:
      console.error("Operation not defined.");
  }
}

export default function Calculator() {
  const [clean, setClean] = useState(true);
  const [result, setResult] = useState(0);
  const [lastNumber, setLastNumber] = useState(0);
  const [newNumber, setNewNumber] = useState(0);
  const [operation, setOperation] = useState("");

  const handleClean = () => {
    setClean(true);
    setResult(0);
  };

  const handleNumberClick = (number) => {
    if (lastNumber === result) {
      setResult(parseFloat(number, 10));
    } else {
      setResult(parseFloat("" + result + number, 10));
    }
    setClean(false);
  };

  const handleOperationClick = (operation) => {
    if (operation === "") {
      setOperation(operation);
      setLastNumber(result);
    } else {
      performOperation(lastNumber, newNumber, operation);
    }
  };

  const handleSum = () => {
    setOperation("+");
  };

  const handleEqual = () => {};

  return (
    <div className="calculator">
      <Screen>{result}</Screen>
      <div className="panel">
        <div className="panel-group">
          <Button onNumberClick={handleClean} type="light-grey">
            {clean ? "AC" : "C"}
          </Button>
          <Button onNumberClick={handleNumberClick} type="light-grey">
            +/-
          </Button>
          <Button onNumberClick={handleNumberClick} type="light-grey">
            %
          </Button>
          <OperationButton name="division" onClick={handleOperationClick}>
            /
          </OperationButton>
        </div>
        <div className="panel-group">
          <Button onNumberClick={handleNumberClick} type="dark-grey">
            7
          </Button>
          <Button onNumberClick={handleNumberClick} type="dark-grey">
            8
          </Button>
          <Button onNumberClick={handleNumberClick} type="dark-grey">
            9
          </Button>
          <OperationButton name="division" onClick={handleOperationClick}>
            x
          </OperationButton>
        </div>
        <div className="panel-group">
          <Button onNumberClick={handleNumberClick} type="dark-grey">
            4
          </Button>
          <Button onNumberClick={handleNumberClick} type="dark-grey">
            5
          </Button>
          <Button onNumberClick={handleNumberClick} type="dark-grey">
            6
          </Button>
          <OperationButton name="division" onClick={handleOperationClick}>
            -
          </OperationButton>
        </div>
        <div className="panel-group">
          <Button onNumberClick={handleNumberClick} type="dark-grey">
            1
          </Button>
          <Button onNumberClick={handleNumberClick} type="dark-grey">
            2
          </Button>
          <Button onNumberClick={handleNumberClick} type="dark-grey">
            3
          </Button>
          <OperationButton name="division" onClick={handleOperationClick}>
            +
          </OperationButton>
        </div>
        <div className="panel-group">
          <Button
            size="double"
            type="dark-grey"
            onNumberClick={handleNumberClick}
          >
            0
          </Button>
          <Button onNumberClick={handleNumberClick} type="dark-grey">
            ,
          </Button>
          <OperationButton name="division" onClick={handleOperationClick}>
            =
          </OperationButton>
        </div>
      </div>
    </div>
  );
}
