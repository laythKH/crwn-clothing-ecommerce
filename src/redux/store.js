import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";


const middleware = [logger];


const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

