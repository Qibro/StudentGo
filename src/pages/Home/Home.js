import React, { Component } from "react";
import CoverScholarship from "../../components/scholarship/CoverScholarship/CoverScholarship";
import TextBox from "../../components/textbox/TextBox";
import { GridList, GridListTile } from "@material-ui/core";
import beasiswaList from "../../data/beasiswa.json";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="searchBar">
          <TextBox />
        </div>
        <div className="titleContainer">
          <h2 className="yellowTitle">Beasiswa Unggulan</h2>
          <GridList
            cellHeight={"100%"}
            cols={5}
            style={{ width: "100%", height: "100%" }}
          >
            {beasiswaList.map((data) => (
              <GridListTile key={data.id}>
                <CoverScholarship img={data.img} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

export default Home;
