import React from "react";
import Button from "./Button";
import "./styles/Button.css";
import PlusIcon from "../../img/add.png";

function PlussButton() {
  return (
    <Button>
      <img className="plus-img" src={PlusIcon} alt="add" />
    </Button>
  );
}
export default PlussButton;
