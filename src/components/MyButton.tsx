import React from "react";

import Geticon, { IconNames } from "./Geticon";
import { useAppDispatch, useAppSelector } from "../contex/hooks";
import { selectRPS } from "../contex/Game/GameSlice";
interface MyButtonProps {
  buttonType: string;
  iconName: IconNames;
}
const MyButton: React.FC<MyButtonProps> = ({
  buttonType,

  iconName,
}) => {
  const dispatch = useAppDispatch();
  const selectUser = useAppSelector((s) => s.app.selectRPS);

  const addSelectItem = (val: string) => {
    dispatch(selectRPS(val));
  };

  return (
    <div
      onClick={() => addSelectItem(buttonType)}
      className={`bg-white  border-15  z-10  ${buttonType} cursor-pointer rounded-full p-1 transition-transform duration-300 hover:scale-105 ${
        !selectUser ? `absolute` : " max-w-40 flex  pointer-events-none"
      }`}
    >
      <div className="p-9 rounded-full shadow-butto-in">
        <Geticon iconName={iconName}></Geticon>
        {/* <FaHandRock className="text-gray-900 text-5xl" /> */}
      </div>
    </div>
  );
};

export default MyButton;
