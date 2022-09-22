import React, { useState } from "react";
import Form from "./FormStyled";
import { Link } from "react-router-dom";

export const FormEvent = () => {
  const usersData = [
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
  const [data, setData] = useState(usersData);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
    console.log(data);
  };
  return (
    <Form>
      <form class="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <label for="event-name">Event Name:</label>
        <input
          id="event-name"
          class="form-field"
          type="text"
          placeholder="Event Name"
          name="eventName"
          onChange={handleInputChange}
          value={data.eventName}
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <label for="host-name">Host Name:</label>
        <input
          id="host-name"
          class="form-field"
          type="text"
          placeholder="Host Name"
          name="hostName"
          onChange={handleInputChange}
          value={data.hostName}
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <label for="start">Start date:</label>
        <input
          id="start"
          class="form-field"
          type="date"
          name="eventStart"
          min="2022-01-01"
          max="2022-12-31"
          onChange={handleInputChange}
          value={data.eventStart}
        ></input>
        <label for="start">End date:</label>
        <input
          id="end"
          class="form-field"
          type="date"
          name="eventEnd"
          min="2022-01-01"
          max="2022-12-31"
          onChange={handleInputChange}
          value={data.eventEnd}
        ></input>
        <label for="Location-name">Event Name:</label>
        <input
          id="Location-name"
          class="form-field"
          type="text"
          placeholder="Location Name"
          name="locationName"
          onChange={handleInputChange}
          value={data.locationName}
        />
        <label for="avatar">Choose a profile picture:</label>

        <input
          id="avatar"
          class="form-field"
          type="file"
          name="avatar"
          accept="image/png, image/jpeg"
          onChange={handleInputChange}
          value={data.avatar}
        />

        <Link to={"/event"}>
          <button  class="form-field" type="submit"> 
            Next
          </button>
        </Link>
      </form>
    </Form>
  );
};
