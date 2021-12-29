import React from 'react';
import Profile from "../../assets/profile.jpg";
import Heart from "../../assets/heart.png";
import Comment from "../../assets/chat.png";
import Send from "../../assets/send.png";
import Save from "../../assets/save.png";
import "./Posts.css";
import PostData from "../PostData/PostData";
import Picone from "../../assets/pic1.jpg";
import Pictwo from "../../assets/pic2.jpg";
import Picthird from "../../assets/pic3.jpg";

const Posts = () => {
    return (
        <div className="posts">
            {/* <div className="posts-info">
                <div className="posts-user-info">
                    <img src={Profile} alt="profile" />
                    <span>Yash Agarwal</span>
                </div>
                <div className="posts-options">
                    ...
                </div>
            </div> <hr />
            <div className="posts-user-image">
                <img src={Profile} alt="user-image" />
            </div>
            <div className="posts-action">
                <div className="posts-user-action">
                    <img src={Heart} alt="heart" />
                    <img src={Comment} alt="comment" />
                    <img src={Send} alt="send" />
                </div>
                <div className="posts-save">
                    <img src={Save} alt="save" />
                </div>
            </div>
            <span className="posts-likes">100 likes</span> <hr />
            <div className="posts-comment-area">
                <div className="posts-user-comment">
                    <span><i className="fa fa-smile-o"></i></span>
                    <input type="text" placeholder="Add a comment..." />
                </div>
                <div className="posts-user-btn">
                    <button>Post</button>
                </div>
            </div> */}
            <div className="posts-profile">
            <PostData Profile={Profile}
            name = "Yash Agarwal"
            /> <hr />
            <PostData Profile={Picone}
            name = "Mark"
            />
            <PostData Profile={Pictwo}
            name = "Natya"
            />
            <PostData Profile={Picthird}
            name = "Twita"
            />
            </div>
        </div>
    )
}

export default Posts
