import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

const defaultState = {
  cash: 100,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
		return {...state, cash: state.cash + action.payload}
    case "GET_CASH":
		return {...state, cash: state.cash - action.payload}
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>    
  </React.StrictMode>
);