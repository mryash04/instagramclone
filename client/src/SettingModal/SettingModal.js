import React from 'react';
import Modal from 'react-modal';
import "./SettingModal.css";
import {Link, useHistory} from "react-router-dom";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      margin : "0",
      padding : "0",
      borderRadius : "10px",
      backgroundColor : "#ffffff"
    },
};

const SettingModal = ({modalIsOpen, setIsOpen}) => {

    let history = useHistory();

    let subtitle;
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const logOut = (event) =>{
        event.preventDefault();
        console.log("Clicked");
        localStorage.clear();
        history.push("/login");
    };

    return (
        <div className="setting-modal">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <div className="setting-modal-data">
              <ul className="setting-modal-details">
                  <li>
                      <Link to="/setting">
                          <button>Change Password</button>
                      </Link>
                  </li> <hr className="hr" />
                  <li><button>Nametag</button></li> <hr className="hr" />
                  <li><button>Apps and Websites</button></li> <hr className="hr" />
                  <li><button>Notifications</button></li> <hr className="hr" />
                  <li><button>Privacy and Security</button></li> <hr className="hr" />
                  <li><button>Login Activity</button></li> <hr className="hr" />
                  <li><button>Emails from Instagram</button></li> <hr className="hr" />
                  <li><button>Report a Problem</button></li> <hr className="hr" />
                  <li><button onClick={logOut}>Log Out</button></li> <hr className="hr" />
                  <li><button onClick={closeModal}>Cancel</button></li>
              </ul>
          </div>
      </Modal>
        </div>
    )
}

export default SettingModal
