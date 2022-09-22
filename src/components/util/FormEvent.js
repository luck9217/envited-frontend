import React from "react";
import Form from "./FormStyled";

export const FormEvent = () => {
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
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <label for="host-name">Host Name:</label>
        <input
          id="host-name"
          class="form-field"
          type="text"
          placeholder="Host Name"
          name="HostName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <label for="start">Start date:</label>
        <input
          id="start"
          class="form-field"
          type="date"
          name="event-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        ></input>
        <label for="start">End date:</label>
        <input
          id="end"
          class="form-field"
          type="date"
          name="event-end"
          value="2018-07-22"
          min="2022-01-01"
          max="2022-12-31"
        ></input>
        <label for="Location-name">Event Name:</label>
        <input
          id="Location-name"
          class="form-field"
          type="text"
          placeholder="Location Name"
          name="eventName"
        />
        <label for="avatar">Choose a profile picture:</label>

        <input
          id="avatar"
          class="form-field"
          type="file"
          name="avatar"
          accept="image/png, image/jpeg"
        />

        <button class="form-field" type="submit">
          Create Event
        </button>
      </form>
    </Form>
  );
};
