import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import PreloadMedia from "../Components/PreloadMedia";
import { media } from "../Constants/constants";
import App from "./App";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import { LanguageProvider } from "./LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <PreloadMedia images={Object.values(media)}>
          <App />
        </PreloadMedia>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
