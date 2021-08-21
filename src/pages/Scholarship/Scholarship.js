import React, { Component } from "react";
import { GridList, GridListTile } from "@material-ui/core";
import PosterScholarship from "../../components/scholarship/PosterScholarship/PosterScholarship";
import beasiswaList from "../../data/beasiswa.json";
import TextBox from "../../components/textbox/TextBox";
import CardScholarship from "../../components/scholarship/CardScholarship/CardScholarship";
class Scholarship extends Component {
  render() {
    return (
      <div>
        <div className="searchBar">
          <TextBox />
        </div>
        <div className="titleContainer">
          <h2 className="yellowTitle">Beasiswa Unggulan</h2>
        </div>
        <GridList
          cellHeight={"100%"}
          cols={5}
          style={{ width: "100%", height: "100%" }}
        >
          {beasiswaList.slice(0, 5).map((data) => (
            <GridListTile key={data.id}>
              <PosterScholarship
                img={data.image}
                title={data.title}
                detail={data.description}
              />
            </GridListTile>
          ))}
        </GridList>
        <div className="titleContainer">
          <h2 className="yellowTitle">Semua Beasiswa</h2>
        </div>
        <GridList
          cellHeight={"100%"}
          cols={3}
          style={{ width: "100%", height: "100%" }}
        >
          {beasiswaList.map((data) => (
            <GridListTile key={data.id}>
              <CardScholarship
                img={data.img}
                title={data.title}
                detail={data.detail}
                date={data.date}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default Scholarship;
