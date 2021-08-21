import React, { Component } from "react";
import "./category.css";
class Category extends Component {
  state = { title: this.props.title };
  render() {
    return (
      <div className="categoryContainer">
        <a href="#" className="categoryYellow">
          {this.state.title}
        </a>
      </div>
    );
  }
}

export default Category;
