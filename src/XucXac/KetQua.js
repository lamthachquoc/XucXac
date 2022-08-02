import React, { Component } from "react";
import { PLAY_GAME } from "./redux/constant/xucXacConstant";
import { connect } from "react-redux";
class KetQua extends Component {
  render() {
    let { handlePlayGame, luaChon, soLuotChoi, soBanThang } = this.props;
    return (
      <div className="text-center pt-5">
        <button onClick={handlePlayGame} className="btn btn-success">
          <span className="display-3">Play Games</span>
        </button>
        {/**
         * Lựa chọn
         */}
        <p className="mt-3 text-white">Bạn chọn : {luaChon}</p>
        <p className="mt-3 text-white">Số lượt chơi : {soLuotChoi}</p>
        <p className="mt-3 text-white">Số bàn thắng : {soBanThang}</p>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handlePlayGame: () => {
      dispatch({
        type: PLAY_GAME,
      });
    },
  };
};
let mapStateToProps = (state) => {
  return {
    luaChon: state.xucXacReducer.luaChon,
    soLuotChoi: state.xucXacReducer.soLuotChoi,
    soBanThang: state.xucXacReducer.soBanThang,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQua);
