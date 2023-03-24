import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const root = document.querySelector("#root");
const reactRoot = ReactDOM.createRoot(root);
// const App = () => {
//   return <h1>Hello World</h1>;
// };
reactRoot.render(<App></App>);
