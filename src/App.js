import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
