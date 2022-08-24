import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import "./App.css";
import Home from "./pages/Home.js";
import NewEntry from "./pages/NewEntry.js";
import Contact from "./pages/Contact.js";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/newentry" component={NewEntry} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
