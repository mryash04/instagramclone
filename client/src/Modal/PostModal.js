import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import Drag from "../assets/drag.png";
import { API_URL } from '../helper';
import "./PostModal.css";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      margin : "0px",
      padding : "0px"
    },
};
  
const PostModal = ({modalIsOpen, setIsOpen}) => {

    const[title, setTitle] = useState("");
    const[body, setBody] = useState("");
    const[image, setImage] = useState("");
    const[url, setUrl] = useState("");

    console.log("This is file", image);

    useEffect(() => {
        if(url){
            fetch(`${API_URL}/post/createPost`, {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                    "x-auth-token" : localStorage.getItem("jwt")
                },
                body : JSON.stringify({
                    title,
                    body,
                    image : url
                })
            }).then((response) => response.json())
            .then((result) => console.log(result))
            .catch((err) => console.log(err.mesaage))
        }
        setTitle("");
        setBody("");
        setImage("");
    }, [url]);

    let subtitle;
  
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const handleChange = (event) =>{
        console.log(event.target.files);
        setImage(event.target.files[0]);
    };

    const postDetails = () =>{
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "insta-clone");
        data.append("cloud_name", "yashhhh");
               fetch("https://api.cloudinary.com/v1_1/yashhhh/image/upload",{
               method:"post",
               body:data
           })
           .then(res=>res.json())
           .then(data=>{
            setUrl(data.url)
            console.log(data);
           })
           .catch(err=>{
               console.log(err)
           })
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
                {/* <button className="modal-close" onClick={closeModal}>close</button> */}
                <div className="postmodal-data">
                <div className="postmodal-title">
                    <span>Create new post</span>
                </div>
                <div className="postmodal-share">
                    <button onClick={postDetails}>Share</button>
                </div> <hr />
                <form>
                <div className="postmodal-info">
                    <input onChange={(event) => setTitle(event.target.value)} type="text" placeholder="Enter title" value={title} />
                </div>
                <div className="postmodal-info">
                    <input onChange={(event) => setBody(event.target.value)} type="text" placeholder="Enter body" value={body} />
                </div>
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
            </Modal>
        </div>
    )
}

export default PostModal
