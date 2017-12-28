import React, { Component } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PlanetsContainer from "./containers/PlanetsContainer";
import PeopleContainer from "./containers/PeopleContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { PlanetsProfile } from "./components/Planets";
import "antd/dist/antd.css";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

const componseEnhancers = composeWithDevTools({});

const store = createStore(
  reducers,
  /* preloadedState, */ componseEnhancers(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/planets" exact component={PlanetsContainer} />
            <Route path="/people" exact component={PeopleContainer} />
            <Route path="/planets/:planet" exact component={PlanetsProfile} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
