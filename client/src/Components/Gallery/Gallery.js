import React from 'react';
import Profile from "../../assets/profile.jpg";
import "./Gallery.css";

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="gallery-images">
                <img src={Profile} alt="profile-images" />
            </div>
            <div className="gallery-images">
                <img src={Profile} alt="profile-images" />
            </div>
        </div>
    )
}

export default Gallery
