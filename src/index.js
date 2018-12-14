import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap';
import './styles/index.scss';

const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));