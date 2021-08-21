import React, { Component } from "react";
import "./cardscholarship.css";
class CardScholarship extends Component {
  state = {
    img: this.props.img,
    title: this.props.title,
    detail: this.props.detail,
    date: this.props.date,
  };
  render() {
    return (
      <div className="cardScholarshipContainer">
        <div className="cardScholarship">
          <img
            src={this.state.img}
            alt="library"
            className="cardScholarshipImg"
          />
          <div className="cardScholarshipContent">
            <h2 className="cardScholarshipTitle">{this.state.title}</h2>
            <p className="cardScholarshipDetail">{this.state.detail}</p>
            <p>
              <span className="beasiswaDate">{this.state.date}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardScholarship;
