import React from "react";
import ReactDom from "react-dom";

const fName = "Chidpon";
const lName = "Jaimun";
const luckyNumber = 13;
ReactDom.render(
  <div>
    <h1>
      Hello {fName} {lName}!.
    </h1>
    <p>Your lucky number is {3 + 10}.</p>
  </div>,
  document.getElementById("root")
);
