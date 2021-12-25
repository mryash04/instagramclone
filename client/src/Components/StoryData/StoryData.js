import React from "react";
import Profile from "../../assets/profile.jpg";
import Picone from "../../assets/pic1.jpg";
import Pictwo from "../../assets/pic2.jpg";
import Picthird from "../../assets/pic3.jpg";

const StoryData = () => {
  return (
    <div className="story-data">
      <div className="user-story">
        <img src={Profile} alt="profile" />
        <span>Yash Agarwal</span>
      </div>
      <div className="user-story">
        <img src={Picone} alt="profile" />
        <span>Mark</span>
      </div>
      <div className="user-story">
        <img src={Pictwo} alt="profile" />
        <span>Natya</span>
      </div>
      <div className="user-story">
        <img src={Picthird} alt="profile" />
        <span>Twita</span>
      </div>
      <div className="user-story">
        <img src={Picone} alt="profile" />
        <span>Mark</span>
      </div>
      <div className="user-story">
        <img src={Profile} alt="profile" />
        <span>Yash Agarwal</span>
      </div>
      <div className="user-story">
        <img src={Pictwo} alt="profile" />
        <span>Natya</span>
      </div>
    </div>
  );
};

export default StoryData;
