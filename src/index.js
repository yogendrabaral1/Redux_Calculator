import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

export const handleKey = (key) => {
  return {
    type: 'EVAL',
    key
  }
};

const calcDisplay = {
  display: "0",
}
const evalReducer = (state = calcDisplay, action) => {
  switch (action.type) {
    case 'EVAL':
      try {
        if (action.key === "AC") {
          return {
            ...state,
            display: "0"
          }
        } else if (action.key === "=") {
          let exp = state.display;
          exp = eval(exp);
          exp = exp.toString();
          if (exp === "0") {
            return {
              ...state,
              display: "0"
            }
          } else if (exp.charAt(0) === "-") {
            exp = "(" + exp + ")";
            return {
              ...state,
              display: exp
            }
          } else {
            return {
              ...state,
              display: exp
            }
          }
        } else {
          let exp = state.display;
          let operator = exp.charAt(exp.length - 1);
          //console.log(operator);

          if (
            operator === "*" ||
            operator === "-" ||
            operator === "+" ||
            operator === "/"
          ) {
            if (action.key === "*" || action.key === "/" || action.key === "+" || action.key === "-") {
              exp = exp.substr(0, exp.length - 1);
              console.log(exp);
              exp = exp + action.key;
              return {
                ...state,
                display: exp
              }
            } else {
              exp = exp + action.key;
              return {
                ...state,
                display: exp
              }
            }
          } else if (exp === "0") {
            exp = action.key;
            exp = exp.toString();
            return {
              ...state,
              display: exp
            }
          } else {
            exp = exp + action.key;
            return {
              ...state,
              display: exp
            }
          }
        }
      }
      catch (error) {
        return {
          ...state,
          display: error
        }
      }

    default:
      return state;
  }
};
const allReducer = combineReducers({ evalReducer });
const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
