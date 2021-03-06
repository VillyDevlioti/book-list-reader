import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
    <div>
      <Nav />
  {/*Switch is useful for nomatch cases*/}
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route exact path="/books" component={Books} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>
  
  );
}

export default App;
