import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./reports/Report";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <div class="container">
        <div class="row">
          <div class="col">
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
