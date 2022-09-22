import React from "react";
import ImageCard from "./ImageCard";

const EventCreated = () => {
  const user = [
    {
      id: 1,
      eventName: "",
      hostName: "",
      eventStart: "",
      eventEnd: "",
      locationName: "",
      avatar: "",
    },
  ];
  const urlImage = user.avatar;

  const altImage = "Event's avatar";

  return (
    <ul>
      <h1>Event Name</h1>
      <li>{user.eventName}</li>
      <p1>Host Name</p1>
      <li>{user.hostName}</li>
      <p1>Dates</p1>
      <li>{user.eventStart}</li>
      <li>{user.eventEnd}</li>
      <p1>Location</p1>
      <li>{user.locationName}</li>
      <ImageCard src={urlImage} alt={altImage}></ImageCard>
    </ul>
  );
};

export default EventCreated;
