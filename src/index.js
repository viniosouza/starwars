import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
const render = Component => {
  ReactDOM.render(<Component />, document.getElementById("root"));
};

render(App);

if (module.hot) {
  module.hot.accept(`./App`, () => {
    render(App);
  });
}
registerServiceWorker();
