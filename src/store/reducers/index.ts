import { combineReducers } from "redux";
import userAuth from "./userAuth.reducers";

export const rootReducer = combineReducers({
  userAuth: userAuth,
});

export type RootState = ReturnType<typeof rootReducer>;
