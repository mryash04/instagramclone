import React from 'react';
import Modal from 'react-modal';
import Drag from "../assets/drag.png";
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

    let subtitle;
  
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

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
                </div> <hr />
                <div className="postmodal-image-upload-area">
                    <img src={Drag} alt="drag" />
                    <div className="postmodal-image-upload-title">
                        <span>Drag photos here</span>
                    </div>
                    <label className="postmodal-image-upload">
                        <input type="file" />
                        Select from computer
                    </label>
                </div>
                </div>
            </Modal>
        </div>
    )
}

export default PostModal
