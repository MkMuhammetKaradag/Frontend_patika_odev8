import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./Game/GameSlice";

interface ReduxProviderProps {
  children: React.ReactElement<any>;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  const reducer = {
    app: appReducer,
  };

  const store = configureStore({
    reducer,
    preloadedState: {
      app: {
        score: 0,
        selectRPS: "",
        selectMachineRPS: "",
        isWin: 0,
      },
    },
  });

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
