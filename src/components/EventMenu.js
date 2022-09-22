import React from "react";
import { FormEvent } from "./util/FormEvent";
import Button from "./util/ButtonEvent";
import { Link } from "react-router-dom";
import ImageCard from "./util/ImageCard";
import EventCreated from "./util/EventCreated";

export const EventMenu = () => {
  const urlImage =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220921T175022Z&X-Amz-Expires=86400&X-Amz-Signature=f12ba2024dd516cef9b802902d635de00a85cb3d22186d82b98c7331da9d0fa8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject";
  const altImage = "Event's cake";
  return (
    <div>
      <ImageCard src={urlImage} alt={altImage}></ImageCard>
      <EventCreated />
      <Link to={"/create"}>
        {" "}
        <Button>Back</Button>
      </Link>
    </div>
  );
};
