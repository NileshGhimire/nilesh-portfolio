import React from "react";
import style from "./MainContainer.module.css";
import Navbar from "./Navbar/Navbar";
const MainContainer = () => {
  return (
    <div className={style.main_container}>
      <div className={style.main_inside_container}>
        <Navbar />
      </div>
    </div>
  );
};

export default MainContainer;
