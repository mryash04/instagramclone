import React, {useState, useEffect} from 'react';
import Profile from "../../assets/profile.jpg";
import "./Gallery.css";
import {API_URL} from "../../helper";

const Gallery = () => {

    const[data, setData] = useState([]);

    const getMyPost = async() =>{
        try{
            const response = await fetch(`${API_URL}/post/mypost`, {
                headers : {
                    "x-auth-token" : localStorage.getItem("jwt")
                }
            });
            const result = await response.json();

            console.log("This is result", result.post);
            setData(result.post);
        }catch(error){
            console.log(error.message);
        }
    };

    useEffect(() =>{
        getMyPost();
    }, []);

    return (
        <div className="gallery">
            {data.map((value, index) => {
                return <div className="gallery-images" key={index}>
                    <img src={value.image} alt="profile-images" />
                </div>
            })}
        </div>
    )
}

export default Gallery
