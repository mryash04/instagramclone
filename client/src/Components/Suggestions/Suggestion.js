import React from 'react';
import Profile from "../../assets/profile.jpg";
import "./Suggestion.css";
import Picone from "../../assets/pic1.jpg";
import Pictwo from "../../assets/pic2.jpg";
import Picthird from "../../assets/pic3.jpg";

const Suggestion = () => {
    return (
        <div className="suggestion">
            <div className="suggestion-data">
                <div className="suggestion-users-data">
                    <img src={Profile} alt="profile" />
                    <div className="suggestion-users-name">
                        <span className="user-name">mr. yash</span>
                        <span className="name">Yash Agarwal</span>
                    </div>
                </div>
                <div className="suggestion-btn">
                    <a href="#">Switch</a>
                </div>
            </div>
            <div className="suggestion-for-you">
                <span>Suggestions For You</span>
                <span>See All</span>
            </div>
            <div className="suggestion-data">
                <div className="suggestion-users-data">
                    <img src={Picone} alt="profile" />
                    <div className="suggestion-users-name">
                        <span className="user-name">mr. mark</span>
                        <span className="name">Mark</span>
                    </div>
                </div>
                <div className="suggestion-btn">
                    <a href="#">Follow</a>
                </div>
            </div>
            <div className="suggestion-data">
                <div className="suggestion-users-data">
                    <img src={Pictwo} alt="profile" />
                    <div className="suggestion-users-name">
                        <span className="user-name">mr. natya</span>
                        <span className="name">Natya</span>
                    </div>
                </div>
                <div className="suggestion-btn">
                    <a href="#">Follow</a>
                </div>
            </div>
            <div className="suggestion-data">
                <div className="suggestion-users-data">
                    <img src={Picthird} alt="profile" />
                    <div className="suggestion-users-name">
                        <span className="user-name">mr. twita</span>
                        <span className="name">Twita</span>
                    </div>
                </div>
                <div className="suggestion-btn">
                    <a href="#">Follow</a>
                </div>
            </div>
            <div className="suggestion-data">
                <div className="suggestion-users-data">
                    <img src={Profile} alt="profile" />
                    <div className="suggestion-users-name">
                        <span className="user-name">mr. yash</span>
                        <span className="name">Yash Agarwal</span>
                    </div>
                </div>
                <div className="suggestion-btn">
                    <a href="#">Follow</a>
                </div>
            </div>
        </div>
    )
}

export default Suggestion
