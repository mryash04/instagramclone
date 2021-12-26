import React from 'react';
import Profile from "../../assets/profile.jpg";
import Heart from "../../assets/heart.png";
import Comment from "../../assets/chat.png";
import Send from "../../assets/send.png";
import Save from "../../assets/save.png";

const PostData = ({Profile, name}) => {
    return (
        <React.Fragment>
            <div className="posts-info">
                <div className="posts-user-info">
                    <img src={Profile} alt="profile" />
                    <span>{name}</span>
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
                    <span><i class="fa fa-smile-o"></i></span>
                    <input type="text" placeholder="Add a comment..." />
                </div>
                <div className="posts-user-btn">
                    <button>Post</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PostData
