import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./components/Report";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path={`/:id`} component={Report} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
