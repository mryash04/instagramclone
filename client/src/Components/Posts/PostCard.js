import React, {useState, useEffect} from 'react';
import Profile from "../../assets/profile.jpg";
import Heart from "../../assets/heart.png";
import Comment from "../../assets/chat.png";
import Send from "../../assets/send.png";
import Save from "../../assets/save.png";
import { API_URL } from '../../helper';

const PostCard = ({value, }) => { 
    
    const user = localStorage.getItem("user");
    const[show, setShow] = useState({likeStatus:value.likes.includes(user.toString()),id:value._id});
    const[likes, setLikes] = useState(value.likes.length);

    console.log("This is like", likes);
    
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
    return (
        <React.Fragment>
        <div className="posts-info">
            <div className="posts-user-info">
                <img src={value.image} alt="profile" />
                <span>{value.postedBy.name}</span>
            </div>
            <div className="posts-options">
                ...
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
        <span className="posts-caption">{value.caption}</span> <hr />
        <div className="posts-comment-area">
            <div className="posts-user-comment">
                <span><i className="fa fa-smile-o"></i></span>
                <input type="text" placeholder="Add a comment..." />
            </div>
            <div className="posts-user-btn">
                <button>Post</button>
            </div>
        </div>
        </React.Fragment>
    )
}

export default PostCard
