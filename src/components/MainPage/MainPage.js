import Welcome from "../Welcome/Welcome";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="container main-page-div">
      <Welcome />
      <a href="#">
        <MdOutlineKeyboardArrowDown className="down-arrow grow" size="100" />
      </a>
    </div>
  );
}

export default MainPage;
