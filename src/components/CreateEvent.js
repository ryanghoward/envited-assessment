import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    organizer: "",
    date: "",
    location: "",
    guests: "",
    food: "",
  });
  const [error, setError] = useState("");
  const { push } = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const newEvent = {
      name: formValues.name,
      organizer: formValues.organizer,
      date: formValues.date,
      location: formValues.location,
      guests: formValues.guests,
      food: formValues.food,
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
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
