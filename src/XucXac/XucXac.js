import React, { Component } from "react";
import { connect } from "react-redux";
import { LUA_CHON } from "./redux/constant/xucXacConstant";
import { Tai, Xiu } from "./utils/xucXacUtil";

let styles = {
  btnGame: {
    fontSize: "40px",
    width: 200,
    height: 150,
  },
};
class XucXac extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="d-flex justify-content-between align-items-center pt-5 ">
        <button
          onClick={() => {
            this.props.handleChooseOption(Tai);
          }}
          style={styles.btnGame}
          className="btn-danger text-white"
        >
          Tài
        </button>
        <div>
          {this.props.mangXucXac.map((item) => {
            return (
              <img style={{ width: 75, margin: "0 10px" }} src={item.img} />
            );
          })}
        </div>
        <button
          onClick={() => {
            this.props.handleChooseOption(Xiu);
          }}
          style={styles.btnGame}
          className="btn-secondary text-white"
        >
          Xỉu
        </button>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    mangXucXac: state.xucXacReducer.mangXucXac,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleChooseOption: (luaChon) => {
      dispatch({
        type: LUA_CHON,
        payload: luaChon,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
