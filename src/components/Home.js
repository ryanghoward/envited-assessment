import React from "react";
import "../App.css";
import img from "../assets/image 1.png";

const Home = () => {
  return (
    <div className='container'>
      <div className='header'>
        <h1>
          Imagine if <span className='sc'>Snapchat</span> had events.
        </h1>
        <p>
          Easily host and share events with your friends across any social media
        </p>
      </div>
      <div className='body'>
        <img src={img} alt='pic' />
      </div>
      <button className='button'>🎉 Create My Event</button>
    </div>
  );
};

export default Home;
