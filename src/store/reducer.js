import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { appReducer } from "./appState/slice";
import { authReducer } from "./auth/slice";
import { nanniesReducer } from "./nannies/slice";
import { favoritesNanniesReducer } from "./favorites/slice";
import { filtersReducer } from "./filters/slice";

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};
const userPersistReducer = persistReducer(persistConfig, authReducer);

export const reducer = {
  auth: userPersistReducer,
  nannies: nanniesReducer,
  favorites: favoritesNanniesReducer,
  filters: filtersReducer,
  appState: appReducer,
};
