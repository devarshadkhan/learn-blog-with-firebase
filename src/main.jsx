import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';

// import "bootstrap/"
import { BrowserRouter } from "react-router-dom";
import { FireBase_Provider } from "./Context/FirebaseContext.jsx";
import { Toast_Provider } from "./Context/ToastContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <FireBase_Provider>
    <Toast_Provider>
      <App />
    </Toast_Provider>
    </FireBase_Provider>
    </BrowserRouter>
  </React.StrictMode>
);
