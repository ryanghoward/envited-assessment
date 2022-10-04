import React from "react";
// import { Link } from "react-router-dom";
import "../App.css";
import img from "../assets/LPImg.svg";

const Home = () => {
  return (
    <div className='homepage'>
      <div className='header'>
        <div className='text-container'>
          <h2 className='title'>
            Imagine if <br />
          </h2>
          <h2 className='gradient'>Snapchat</h2>
          <h2 className='title'>had events.</h2>
          <p className='tagline'>
            Easily host and share events with your friends across any social
            media
          </p>
        </div>
      </div>
      {/* <img src={img} alt='pic' /> */}
      {/* <Link to='/create'> */}
      <button className='button'>🎉 Create My Event</button>
      {/* </Link> */}
    </div>
  );
};

export default Home;
