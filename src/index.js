import React from "react";
import ReactDom from "react-dom";

const name = "Joe";
const luckyNumber = 13;
ReactDom.render(
  <div>
    <h1>Hello! {name}.</h1>
    <p>Your lucky number is {luckyNumber}.</p>
  </div>,
  document.getElementById("root")
);
