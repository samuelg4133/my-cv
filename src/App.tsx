import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

import "./styles/global.css";
import "./app.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="column">
        <Sidebar />
        <Main />
      </div>
    </>
  );
};

export default App;
