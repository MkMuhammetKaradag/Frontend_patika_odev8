import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const RPSData = ["Rock", "Paper", "Scissors"];
const result = ["RockScissors", "ScissorsPaper", "PaperRock"];
export interface GameAppType {
  selectRPS: string;
  selectMachineRPS: string;
  isWin: number;
  score: number;
}

const initialState: GameAppType = {
  selectRPS: "",
  isWin: 0,
  selectMachineRPS: "",
  score: 0,
};

export const GameAppSlice = createSlice({
  name: "NoteApp",
  initialState,
  reducers: {
    selectRPS: (state, action: PayloadAction<string>) => {
      state.selectRPS = action.payload;
      state.selectMachineRPS = RPSData[Math.floor(Math.random() * 3)];
    },
    controlGame: (state) => {
      console.log("merhaba");
      if (state.selectRPS != state.selectMachineRPS) {
        const isRusolt =
          result.indexOf(state.selectMachineRPS + state.selectRPS) == -1;

        state.score += isRusolt ? 1 : -1;
        state.isWin = isRusolt ? 1 : -1;
      }
    },
    resetGame: (state) => {
      state.selectRPS = "";
      state.selectMachineRPS = "";
      state.isWin = 0;
    },
  },
});

export const { selectRPS, controlGame, resetGame } = GameAppSlice.actions;
export default GameAppSlice.reducer;
