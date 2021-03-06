import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/sf-pro-display-cufonfonts/SFPRODISPLAYBOLD.OTF";

import axios from 'axios'

axios.interceptors.request.use((request)=>{

    request.headers.Token = localStorage.getItem('Token');
  return request;
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
