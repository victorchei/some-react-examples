import { customerReducer } from "./customerReducer";
import { cashReducer } from './cashReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
})