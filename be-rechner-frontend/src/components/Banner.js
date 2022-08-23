import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Sugar, Sugar, Sugar</h1>
          <p className="lead">not so good</p>
        </div>
      </div>
    );
  }
}

export default Banner;
