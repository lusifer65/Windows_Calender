import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Card from "./Component/DisplayOption/Card/Card.js";
import TitleBar from "./Component/DisplayOption/TitleBar.js";
import store from "./redux/Store.js";
import "./style.css";

const App = () => {
  return (
    <Provider store={store}>
      <h1>Calender</h1>
      <main className="container">
        <TitleBar />
        <Card />
      </main>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
