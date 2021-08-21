import React, { Component } from "react";
import "./footer.css";
import facebook from "../../img/facebook.png";
import twitter from "../../img/twitter.png";
import instagram from "../../img/instagram.png";
import whatsapp from "../../img/whatsapp.png";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="main-footer">
          <div className="col-info">
            <ul className="list-address">
              <li className="title">
                Student<span className="go">Go</span>
              </li>
              <li className="text">
                Jl. Petemon IV No.32-A, RT 014/RW 008 (Sebelah Bank BCA)
              </li>
              <li className="text">
                Kel. Petemon, Kec. Sawahan, Kota Surabaya,
              </li>
              <li className="text">Jawa Timur, 60252</li>
            </ul>
          </div>
          <div className="col-contact">
            <p className="text">Temukan dan Hubungi kami di:</p>
            <ul className="list-contact">
              <li className="logo">
                <img src={whatsapp} />
              </li>
              <li className="logo">
                <img src={facebook} />
              </li>
              <li className="logo">
                <img src={twitter} />
              </li>
              <li className="logo">
                <img src={instagram} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
