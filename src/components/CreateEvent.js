import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [formValues, setFormValues] = useState({
    eventName: "",
    hostName: "",
    startTime: "",
    endTime: "",
    eventLocation: "",
    eventPhoto: "",
  });
  const [error, setError] = useState("");
  const { push } = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const newEvent = {
      eventName: formValues.eventName,
      hostName: formValues.hostName,
      startTime: formValues.startTime,
      endTime: formValues.endTime,
      eventLocation: formValues.location,
      eventPhoto: formValues.eventPhoto,
    };
  };

  const handleClick = () => {
    push("/events");
  };

  const change = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <div>
        <form onSubmit={submit}>
          <h2>Start Planning!</h2>
          <p>Event Name:</p>
          <input
            value={formValues.eventName}
            name='eventName'
            type='text'
            onChange={change}
            placeholder='Enter your name'
          />
          <p>Host Name:</p>
          <input
            value={formValues.hostName}
            name='hostName'
            type='text'
            onChange={change}
            placeholder='Host of Event'
          />
          <p>Start Time:</p>
          <input
            value={formValues.startTime}
            name='startTime'
            type='text'
            onChange={change}
            placeholder='Event Start Time'
          />
          <p>End Time:</p>
          <input
            value={formValues.endTime}
            name='endTime'
            type='text'
            onChange={change}
            placeholder='Event End Time'
          />
          <p>Location:</p>
          <input
            value={formValues.eventLocation}
            name='eventLocation'
            type='text'
            onChange={change}
            placeholder='Event Location'
          />
          {/* <p>Photo:</p>
          <input
            value={formValues.eventPhoto}
            name='eventPhoto'
            type='photo'
            onChange={change}
            placeholder='Upload an event photo'
          /> */}
          <input type='submit' value='Schedule Event' />
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
