import React, {useState, useEffect} from 'react';
import Profile from "../../assets/profile.jpg";
import Heart from "../../assets/heart.png";
import Comment from "../../assets/chat.png";
import Send from "../../assets/send.png";
import Save from "../../assets/save.png";
import {API_URL} from "../../helper";
import PostCard from '../Posts/PostCard';

const PostData = () => {

    const[postUserData, setPostUserData] = useState([]);
    const[show, setShow] = useState(false);

    const user = localStorage.getItem("user");

    console.log("This is show", show);

    const getAllPost = async() =>{
        try{
            const response = await fetch(`${API_URL}/post/allpost`);
            const result = await response.json();
            console.log(result.post);
            setPostUserData(result.post);
        }catch(error){
            console.log(error.message);
        }
    };

    useEffect(() =>{
        getAllPost();
    }, []);

    const postLikes = async(id, value) =>{
        console.log("Like");
        try{
            const response = await fetch(`${API_URL}/post/like/${id}`, {
                method : "PUT",
                headers : {
                    "Content-Type" : "application/json",
                    "x-auth-token" : localStorage.getItem("jwt")
                }
            });
            const result = await response.json();
            console.log(result);
            setShow({likeStatus:value.likes.includes(user.toString()),id});
        }catch(error){
            console.log(error.message);
        }
    };

    const postDisLike = async(id) =>{
        setShow(false);
        console.log("This is dislike", id);
    }

    return (
        <React.Fragment>
            {postUserData.map((value,index) => <PostCard value={value} key={index} />
            )}
        </React.Fragment>
    )
}

export default PostData
