import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import KakaoService from "./service/kakaoService";

const kakaoService = new KakaoService(process.env.REACT_APP_KAKAO_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="app">
        <App kakaoService={kakaoService} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// f1ecec569093bda2f73f5de912bd4656
