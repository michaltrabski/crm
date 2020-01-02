import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import ReportWrapper from "./components/ReportWrapper";

function App() {
  return (
    <Router>
      <Nav />
      <div className="container pt-5">
        <div className="row">
          <div className="col">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path={`/:id`} component={ReportWrapper} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
