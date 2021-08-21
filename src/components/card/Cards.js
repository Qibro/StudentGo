import React, { Component } from "react";
import "./card.css";
class TrainingCard extends Component {
  state = {
    img: this.props.img,
    title: this.props.title,
    detail: this.props.detail,
  };
  render() {
    return (
      <div className="cardContainer">
        <div className="card">
          <img src={this.state.img} alt="library" className="cardImg" />
          <div className="cardContent">
            <h2 className="cardTitle">{this.state.title}</h2>
            <p className="cardDetail">{this.state.detail}</p>
            <p className="cardSubdetail">
              <i className="fas fa-file-video" /> 9 Video + 1 Tes Akhir
            </p>
            <p className="cardRating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainingCard;
