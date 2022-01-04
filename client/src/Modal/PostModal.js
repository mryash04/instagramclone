import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Drag from "../assets/drag.png";
import { API_URL } from "../helper";
import "./PostModal.css";
import Profile from "../assets/profile.jpg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    margin: "0px",
    padding: "0px",
    borderRadius : "10px",
    transition : "2s"
  },
};

const PostModal = ({ modalIsOpen, setIsOpen, image, setImage, show, setShow }) => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [url, setUrl] = useState("");
  console.log(show);

  useEffect(() => {
    if (url) {
      fetch(`${API_URL}/post/createPost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          caption,
          image: url,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          alert("Post upload succesfully");
        })
        .catch((err) => console.log(err.mesaage));
    }
    setTitle("");
    setCaption("");
    setImage("");
  }, [url]);

  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (event) => {
    console.log(event.target.files);
    const reader = new FileReader();
    reader.onload = () =>{
        if(reader.readyState === 2){
            setImage(reader.result)
        }
      }
    reader.readAsDataURL(event.target.files[0]);
  };

  console.log(image)

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "yashhhh");
    fetch("https://api.cloudinary.com/v1_1/yashhhh/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const nextPostModal = (event) =>{
      event.preventDefault();
      console.log("Next Modal");
      setShow(true);
  };

  return (
    <div className="postmodal">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {image ? (<div className={show ? "next-modal" : "postmodal-data"}>
            <div className="postmodal-title">
              <span>Create new post</span>
            </div>
            <div className="postmodal-share">
                {show ? <button onClick={postDetails}>Share</button> : <button onClick={nextPostModal}>Next</button>}
            </div> <hr />
            <div className="postmodal-details-data">
            <img src={image}  style={{width:'500px',height:'500px'}}/>
            {show ? 
            <div className="postmodal-details">
                <div className="postmodal-details-area">
                    <img src={Profile} className="profile" alt="profile" />
                    <div className="postmodal-details-text">
                        <span>mr.yash</span>
                    </div>
                </div>
                <input onChange={(event) => setCaption(event.target.value)} type="text" placeholder="Write a caption..." />
                <div className="postmodal-action-area">
                  <div className="postmodal-action-area-details">
                    <span>Add location</span>
                    <span><i class="fa fa-map-marker"></i></span>
                  </div> <hr />
                  <div className="postmodal-action-area-details">
                    <span>Accessibility</span>
                    <span><i class="fa fa-angle-down"></i></span>
                  </div> <hr />
                  <div className="postmodal-action-area-details">
                    <span>Advance settings</span>
                    <span><i class="fa fa-angle-down"></i></span>
                  </div>
                </div>
            </div> : null}
            </div>
          </div>
        ) : (
          <div className="postmodal-data">
            <div className="postmodal-title">
              <span>Create new post</span>
            </div>
            <hr />
            <form>
              {/* <div className="postmodal-info">
                <input
                  onChange={(event) => setTitle(event.target.value)}
                  type="text"
                  placeholder="Enter title"
                  value={title}
                />
              </div>
              <div className="postmodal-info">
                <input
                  onChange={(event) => setBody(event.target.value)}
                  type="text"
                  placeholder="Enter body"
                  value={body}
                />
              </div> */}
              <div className="postmodal-image-upload-area">
                <img src={Drag} alt="drag" />
                <div className="postmodal-image-upload-title">
                  <span>Drag photos here</span>
                </div>
                <label className="postmodal-image-upload">
                  <input onChange={handleChange} type="file" />
                  Select from computer
                </label>
              </div>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PostModal;
