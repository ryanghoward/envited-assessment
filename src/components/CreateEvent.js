import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import "../App.css";

import { GoCalendar } from "react-icons/go";
import { BsFillPersonFill, BsCameraFill } from "react-icons/bs";
import { FaFlagCheckered, FaMapPin } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

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
      .then((resp) => {
        push("/events");
      })
      .catch((err) => {
        setError("Sorry, an error occurred");
      });
  };

  const handleSubmit = (e) => {
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
      <h1>Start Planning!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <GiPartyPopper className='icon' />
          Event Name
          <input
            value={formValues.eventName}
            name='eventName'
            type='text'
            onChange={change}
            placeholder='What would you like to call this event?'
          />
        </label>
        <label>
          <BsFillPersonFill className='icon' />
          Host Name
          <input
            value={formValues.hostName}
            name='hostName'
            type='text'
            onChange={change}
            placeholder='Who is hosting this event?'
          />
        </label>
        <label>
          <GoCalendar className='icon' />
          Start Time
          <input
            value={formValues.startTime}
            name='startTime'
            type='text'
            onChange={change}
            placeholder='What time will this event start?'
          />
        </label>
        <label>
          <FaFlagCheckered className='icon' />
          End Time
          <input
            value={formValues.endTime}
            name='endTime'
            type='text'
            onChange={change}
            placeholder='What time will this event end?'
          />
        </label>
        <label>
          <FaMapPin className='icon' />
          Location
          <input
            value={formValues.eventLocation}
            name='eventLocation'
            type='text'
            onChange={change}
            placeholder='Where will this event be held?'
          />
        </label>
        <label>
          <BsCameraFill className='icon' />
          Upload A Photo
          <UploadImage className='uploadImage' />
        </label>
        <Link to='/event'>
          <input type='submit' value='Schedule Event' />
        </Link>
        {error ? (
          <>
            <p style={{ color: "red" }}>{error}</p>
            <button onClick={handleClick}>View Events anyway</button>
          </>
        ) : null}
      </form>
    </div>
  );
};

export default CreateEvent;
