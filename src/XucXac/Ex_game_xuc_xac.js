import React, { Component } from "react";
import bgGame from "../assets/bgGame.png";
import "./game.css";
import KetQua from "./KetQua";
import XucXac from "./XucXac";

export default class Ex_game_xuc_xac extends Component {
  render() {
    return (
      <div
        className="bg_game"
        style={{
          backgroundImage: `url(${bgGame})`,
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="container">
          <XucXac />
          <KetQua />
          <div className="row"></div>
        </div>
      </div>
    );
  }
}
