import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/auth/loginSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import logger from "redux-logger";

const reducers = combineReducers({
  // daftar reducer
  user: userSlice,
  //   product: productReducer,
});

const persistConfig = {
  key: "root",
  storage, // jenis penyimpanana untuk menyimpan data store
  //   blacklist: ["product"], // mendaftarkan data store mana yang tidak ingin dipersist/ artinya datanya tidak ingin disimpan di storange(localStorange),
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);
