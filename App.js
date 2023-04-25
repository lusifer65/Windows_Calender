import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Card from "./Component/card/Card";
import Year from "./Component/Display/Year";
import TitleBar from "./Component/DisplayOption/TitleBar";
import store from "./redux/Store";
import "./style.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <TitleBar />
        <Card />
        <Year />
      </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
