import React from "react";
import Button from "./util/ButtonEvent";
import { Link } from "react-router-dom";

export const ClickEvent = () => {
  return (
    <Link to={"/create"}>
      {" "}
      <Button>Create My Event</Button>
    </Link>
  );
};
