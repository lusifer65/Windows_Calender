import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Card from "./Component/card/Card";
import TitleBar from "./Component/DisplayOption/TitleBar";
import store from "./redux/Store";
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
