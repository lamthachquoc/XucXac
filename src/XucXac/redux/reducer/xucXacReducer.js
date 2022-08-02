import { randomIntFromInterval, Tai, Xiu } from "../../utils/xucXacUtil";
import { LUA_CHON, PLAY_GAME } from "../constant/xucXacConstant";

let initialState = {
  mangXucXac: [
    {
      img: "../imgXucXac/1.png",
      giaTri: 1,
    },
    {
      img: "../imgXucXac/1.png",
      giaTri: 1,
    },
    {
      img: "../imgXucXac/1.png",
      giaTri: 1,
    },
  ],
  luaChon: Tai,
  soLuotChoi: 0,
  soBanThang: 0,
};

export let xucXacReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_GAME: {
      let score = 0; //score:tổng điểm xúc xắc
      let newMangXucXac = state.mangXucXac.map((item) => {
        let randomNum = randomIntFromInterval(1, 6); // tạo số ngẫu nhiên từ 1 cho đến 6
        score += randomNum;
        return { img: `../imgXucXac/${randomNum}.png`, giaTri: randomNum };
      });

      //tạo mảng xúc xắc mới
      state.mangXucXac = newMangXucXac;
      //tăng số lượt chơi
      state.soLuotChoi++;
      let result = score >= 11 ? Tai : Xiu;
      //mếu lựa chọn của user khớp với kết quả
      // if (state.luaChon == result) {
      //   state.soBanThang++;
      // }
      state.luaChon == result && state.soBanThang++;
      return { ...state };
    }
    case LUA_CHON: {
      state.luaChon = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
