import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from 'redux-persist';
import rootReducer from "./root-reducer";


// const middleware = [logger];


export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);


export default { store, persistor };

