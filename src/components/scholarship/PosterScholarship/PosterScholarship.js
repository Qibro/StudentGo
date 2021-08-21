import React, { Component } from "react";
import "./posterscholarship.css";
class PosterScholarship extends Component {
  state = {};
  render() {
    return (
      <div className="containerCard">
        <div className="cardBeasiswa">
          <img
            className="cardImg"
            src="https://www.unesa.ac.id/files/eceba7251acfaf8be7c56a30e7551a65/Kompas-Poster-beasiswa-juara-2019.jpg"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="cardBeasiswaContent">
            <p className="beasiswaTitle">Nama Beasiswa</p>
            <p>
              <span className="beasiswaDate">10 Desember 2021</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PosterScholarship;
