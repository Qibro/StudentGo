import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Scholarship from "../../pages/Scholarship/Scholarship";
import Contact from "../../pages/Contact/Contact";
import Training from "../../pages/Training/Training";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <HashRouter>
        <div className="navbar">
          <ul>
            <li className="navItem navTitle">
              Student<span className="go">Go</span>
            </li>
            <li className="navItem">
              <NavLink className="navLink" to="#">
                Profile
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink className="navLink" to="#">
                Acara
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink className="navLink" to="/training">
                Latihan
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink className="navLink" to="/scholarship">
                Beasiswa
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink className="navLink" to="/">
                Beranda
              </NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/scholarship" component={Scholarship} />
            <Route path="/contact" component={Contact} />
            <Route path="/training" component={Training} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Navbar;
