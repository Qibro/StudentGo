import React, { Component } from "react";
import "./coverscholarship.css";

class CoverScholarship extends Component {
  state = { img: this.props.img };
  render() {
    return (
      <div className="containerCoverBeasiswa">
        <img src={this.state.img} className="coverBeasiswa" />
      </div>
    );
  }
}

export default CoverScholarship;
