import { useEffect, useState } from "react";

import MyButton from "./MyButton";
import { useAppSelector } from "../contex/hooks";

import { IconNames } from "./Geticon";
import { useDispatch } from "react-redux";
import { controlGame, resetGame } from "../contex/Game/GameSlice";
const Button = () => {
  const selectUser = useAppSelector((s) => s.app.selectRPS);
  const machinselect = useAppSelector((s) => s.app.selectMachineRPS);
  const isWin = useAppSelector((s) => s.app.isWin);
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(3);
  const [isActive, setIsActive] = useState(false);

  const newGame = () => {
    dispatch(resetGame());
    setIsActive(false);
    setSeconds(3);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (selectUser) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(interval as NodeJS.Timeout);
        setIsActive(true);
        dispatch(controlGame());
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [selectUser]);
  return (
    <div className="flex mt-24 w-screen  justify-center ">
      {!selectUser && (
        <div className="relative w-80  h-80 flex items-start justify-between  ">
          <img src="https://react-js-rock-paper-scissors-game.vercel.app/bg-triangle.2d1bb8f5.svg"></img>
          <MyButton buttonType="Rock" iconName="FaHandRock"></MyButton>
          <MyButton buttonType="Paper" iconName="FaHandPaper"></MyButton>
          <MyButton buttonType="Scissors" iconName="FaHandScissors"></MyButton>
        </div>
      )}

      {machinselect && (
        <div className=" w-1/3 flex  items-center justify-around">
          <div className="relative animate-scaleDown flex items-center justify-center">
            <span className="absolute text-white text-md z-10  -top-10">
              YOU PICKED
            </span>
            <MyButton
              buttonType={selectUser}
              iconName={("FaHand" + selectUser) as IconNames}
            ></MyButton>
            {isWin == 1 && (
              <div className="flex absolute items-center justify-center ">
                <div className="absolute flex items-center justify-center w-64 h-64 bg-gray-700 rounded-full opacity-30"></div>
                <div className="absolute flex items-center justify-center w-80 h-80 bg-gray-700 rounded-full opacity-20"></div>
                <div className="absolute flex items-center justify-center w-96 h-96 bg-gray-700 rounded-full opacity-10"></div>
              </div>
            )}
          </div>
          {isActive && (
            <div
              onClick={() => newGame()}
              className="cursor-pointer text-2xl text-white"
            >
              New Game{" "}
            </div>
          )}
          {isActive ? (
            <div className=" relative animate-scaleDown flex flex-col items-center justify-center">
              <span className="absolute text-white text-md z-10  -top-10">
                THE HOUSE PICKED
              </span>
              <MyButton
                buttonType={machinselect}
                iconName={("FaHand" + machinselect) as IconNames}
              ></MyButton>
              {isWin == -1 && (
                <div className="flex absolute items-center justify-center ">
                  <div className="absolute flex items-center justify-center w-64 h-64 bg-gray-500 rounded-full opacity-40"></div>
                  <div className="absolute flex items-center justify-center w-80 h-80 bg-gray-500 rounded-full opacity-30"></div>
                  <div className="absolute flex items-center justify-center w-96 h-96 bg-gray-500 rounded-full opacity-20"></div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white  w-32 h-32 rounded-full flex text-2xl items-center justify-center">
              {seconds}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Button;
