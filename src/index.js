import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap';
import './styles/index.scss';

const Index = () => {
  return <div className="container-fluid">Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));