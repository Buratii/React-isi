import React from "react";
import "./header.scss";
import Burger from "./burger.jsx";

function Header(props) {
  return (
    <>
      <header>
        <Burger onClick={props.click} />
      </header>
    </>
  );
}
export default Header;
