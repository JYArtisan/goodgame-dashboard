import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import userReducer from "./assets/features/User"
import themeReducer from "./assets/features/Theme"
import {reducer as sidebarReducer} from "./assets/features/SidebarTabs"
import {reducer as serversReducer} from "./assets/features/Servers"
const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    sideBar: sidebarReducer,
    servers: serversReducer,
  }
})

//Rootstate çözümü useSelector için.

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
