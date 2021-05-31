import React from "react";
import Header from "./Header";
import "../styles/app"
import Main from "./main/Main";
import Sider from "./main/sider/Sider";

const App = () => {
  return (
    <div className = 'app'>
      <Header />
      <Main />
    </div>
  );
};

export default App;
