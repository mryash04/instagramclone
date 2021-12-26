import React from 'react';
import Story from "../Story/Story";
import Posts from "../Posts/Posts";
import Suggestions from "../Suggestions/Suggestion";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home-left">
                <Story />
                <Posts />
            </div>
            <div className="home-right">
                <Suggestions />
            </div>
        </div>
    )
}

export default Home
