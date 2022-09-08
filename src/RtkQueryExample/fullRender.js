import React from "react";

import { render } from "@testing-library/react";
import { rootReducer } from "./store";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

export function configureTestStore({ preloadedState }) {
  return configureStore({ reducer: rootReducer, preloadedState });
}

const fullRender = (
  children,
  preloadedState = {},
  { store = configureTestStore({ preloadedState }) } = {}
) => {
  return {
    ...render(<Provider store={store}>{children}</Provider>),
  };
};

export default fullRender;
