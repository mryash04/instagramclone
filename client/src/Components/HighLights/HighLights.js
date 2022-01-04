import React from 'react';
import Profile from "../../assets/profile.jpg";
import "./HighLights.css";

const HighLights = () => {
    return (
        <div className="highlights">
            <div className="highlights-story">
                <img src={Profile} alt="profile" />
                <span>bless❤❤</span>
            </div>
            <div className="highlights-story">
                <img src={Profile} alt="profile" />
                <span>bless💛💛</span>
            </div>
            <div className="highlights-story">
                <img src={Profile} alt="profile" />
                <span>bless❤❤</span>
            </div>
            <div className="highlights-story">
                <img src={Profile} alt="profile" />
                <span>bless❤❤</span>
            </div>
        </div>
    )
}

export default HighLights
