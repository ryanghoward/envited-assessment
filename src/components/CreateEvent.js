import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

import { GiPartyPopper } from "react-icons/gi";
import { BsFillPersonFill, BsCameraFill } from "react-icons/bs";
import { GoCalendar } from "react-icons/go";
import { FaFlagCheckered, FaMapPin } from "react-icons/fa";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className='uploadImg'>
      {selectedImage && (
        <div>
          <img
            alt='not found'
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <input
        type='file'
        name='myImage'
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

const CreateEvent = () => {
  const [error, setError] = useState("");
  const { push } = useNavigate();

  const [formValues, setFormValues] = useState({
    eventName: "",
    hostName: "",
    startTime: "",
    endTime: "",
    eventLocation: "",
    eventPhoto: "",
  });

  const sendItems = (newEvent) => {
    axiosWithAuth()
      .post(newEvent)
      .then((res) => {
        push("/events");
      })
      .catch((err) => {
        setError("Sorry, an error occurred");
      });
  };

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
    sendItems(newEvent);
  };

  const handleClick = () => {
    push("/events");
  };

  const change = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className='createEventForm'>
      <form onSubmit={submit}>
        <h1>Start Planning!</h1>
        <GiPartyPopper />
        Event Name
        <br />
        <label>
          <input
            value={formValues.eventName}
            name='eventName'
            type='text'
            onChange={change}
            placeholder='Enter your name'
          />
        </label>
        <BsFillPersonFill />
        Host Name
        <label>
          <input
            value={formValues.hostName}
            name='hostName'
            type='text'
            onChange={change}
            placeholder='Host Of Event'
          />
        </label>
        <GoCalendar />
        Start Time
        <input
          value={formValues.startTime}
          name='startTime'
          type='text'
          onChange={change}
          placeholder='Event Start Time'
        />
        <FaFlagCheckered />
        End Time
        <input
          value={formValues.endTime}
          name='endTime'
          type='text'
          onChange={change}
          placeholder='Event End Time'
        />
        <FaMapPin />
        Location
        <input
          value={formValues.eventLocation}
          name='eventLocation'
          type='text'
          onChange={change}
          placeholder='Event Location'
        />
        <BsCameraFill />
        Photo
        <UploadImage />
        <Link to='/event'>
          <input type='submit' value='Schedule Event' />
        </Link>
      </form>
    </div>
  );
};

export default CreateEvent;
