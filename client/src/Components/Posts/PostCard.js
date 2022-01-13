import React, {useState, useEffect} from 'react';
import Profile from "../../assets/profile.jpg";
import Heart from "../../assets/heart.png";
import Comment from "../../assets/chat.png";
import Send from "../../assets/send.png";
import Save from "../../assets/save.png";
import { API_URL } from '../../helper';
import {Link, useParams} from "react-router-dom";

const PostCard = ({value,}) => {

    console.log("This is a value", value);
    
    const user = localStorage.getItem("user");
    const[show, setShow] = useState({likeStatus:value.likes.includes(user.toString()),id:value._id});
    const[likes, setLikes] = useState(value.likes.length);

    const[comments, setComments] = useState("");
    const[userComments, setUserComments] = useState(value.comments);

    console.log("This is like", likes);

    console.log("This is comments", comments);

    console.log("This is user comments", userComments);
    
    console.log(show);
    
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
        setLikes(result.like.likes.length);
    }catch(error){
        console.log(error.message);
    }
};

const postDisLike = async(id) =>{
    setShow(false);
    console.log("This is dislike", id);
}

const postComments = async(id) =>{
    console.log("This is post comment id", id);
    const response = await fetch(`${API_URL}/post/comments/${id}`, {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json",
            "x-auth-token" : localStorage.getItem("jwt")
        },
        body : JSON.stringify({
            comments : comments
        })
    });
    const result = await response.json();
    console.log("This is result", result.comment.comments);
    // setUserComments(result.comment.comments);
}

const deletePost = async(id) =>{
    console.log("Post deleted", id);
    try{
        const response = await fetch(`${API_URL}/post/post/${id}`, {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json",
                "x-auth-token" : localStorage.getItem("jwt")
            }
        });
        const result = await response.json();
        console.log("This is result", result);
    }catch(error){
        console.log(error.message)
    }
}

    return (
        <React.Fragment>
        <div className="posts-info">
            <div className="posts-user-info">
                <img src={value.image} alt="profile" />
                <Link to={`/userprofiles/${value.postedBy._id}`} style={{all : "unset", display : "flex", alignItems : "center"}}>
                    <span>{value.postedBy.name}</span>
                </Link>
            </div>
            <div className="posts-options">
                {/* ... */}
                <span onClick={() => deletePost(value._id)}><i className="fa fa-trash-o"></i></span>
            </div>
        </div> <hr />
        <div className="posts-user-image">
            <img src={value.image} alt="user-image" />
        </div>
        <div className="posts-action">
            <div className="posts-user-action">
                <span onClick={() => postLikes(value._id, value)} >{show.id===value._id ? <i onClick={() => postDisLike(value._id)} className="fa fa-heart like"></i> : 
                <i className="fa fa-heart-o"></i>}</span>
                <img src={Comment} alt="comment" />
                <img src={Send} alt="send" />
            </div>
            <div className="posts-save">
                <img src={Save} alt="save" />
            </div>
        </div>
        <span className="posts-likes">{likes} likes</span> <br />
        <span className="posts-caption">{value.caption}</span>
        <div className="show-comments-area">{console.log(userComments)}
            {userComments.slice(-2).map((value) => {
                return <span>{value.text}</span>
            })}
        </div> <hr />
        <div className="posts-comment-area">
            <div className="posts-user-comment">
                <span><i className="fa fa-smile-o"></i></span>
                <input onChange={(event) => setComments(event.target.value)} type="text" placeholder="Add a comment..." />
            </div>
            <div className="posts-user-btn">
                <button onClick={() => postComments(value._id)}>Post</button>
            </div>
        </div>
        </React.Fragment>
    )
}

export default PostCard
