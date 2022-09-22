import React from 'react'
import { FormEvent } from "./util/FormEvent";
import Button from "./util/ButtonEvent";
import { Link } from "react-router-dom";

const CreateMenu = () => {
  return (
    <div> <Link to={"/"}>
    {" "}
    <Button>Back</Button>
  </Link>
  <h1>Create your event</h1>

  <FormEvent /></div>
  )
}

export default CreateMenu