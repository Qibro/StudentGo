import React, { Component } from "react";
import { GridList, GridListTile } from "@material-ui/core";
import TextBox from "../../components/textbox/TextBox";
import TrainingCard from "../../components/card/Cards";
import trainingList from "../../data/training.json";
import Category from "../../components/category/Category";
import categoryList from "../../data/category.json";
import { RemoveScrollBar } from "react-remove-scroll-bar";

class Training extends Component {
  render() {
    return (
      <div>
        <div className="searchBar">
          <TextBox />
        </div>
        <div className="titleContainer">
          <h2 className="yellowTitle">Pelatihan Favorit</h2>
          <GridList
            cellHeight={"100%"}
            cols={3}
            style={{ width: "100%", height: "100%" }}
          >
            {trainingList.slice(0, 6).map((data) => (
              <GridListTile key={data.id}>
                <TrainingCard
                  img={data.image}
                  title={data.title}
                  detail={data.description}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <div>
          <h2 className="yellowTitle">Kategori Pelatihan</h2>
          <GridList
            cellHeight={"100%"}
            cols={3}
            style={{ width: "100%", height: "100%" }}
          >
            {categoryList.map((data) => (
              <GridListTile key={data.id}>
                <Category title={data.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <div className="titleContainer">
          <h2 className="yellowTitle">Pelatihan Favorit</h2>
          <GridList
            cellHeight={"100%"}
            cols={3}
            style={{ width: "100%", height: "100%" }}
          >
            {trainingList.map((data) => (
              <GridListTile key={data.id}>
                <TrainingCard
                  img={data.image}
                  title={data.title}
                  detail={data.description}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

export default Training;
