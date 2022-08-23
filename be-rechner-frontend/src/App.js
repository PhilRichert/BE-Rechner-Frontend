import React, {Component} from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

        </div>
          <div className="App-header">

          </div>
            <div className="App-logo">

            </div>
              <div className="Footer">
                <Route path="../components/Footer.js" />
              </div>
      </Router>
    );
  }
}      
export default App;
