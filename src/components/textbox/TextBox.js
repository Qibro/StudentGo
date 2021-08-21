import React, { Component } from "react";
import "./textbox.css";
class TextBox extends Component {
  state = {};
  render() {
    return (
      <div className="searchBar">
        <input
          placeholder="Cari pelatihan keahlian terkini..."
          className="textBox"
          type="text"
        />
      </div>
    );
  }
}

export default TextBox;
