import React, {useState, useContext} from 'react';
import Heart from "../../assets/heart.png";
import Plus from "../../assets/more.png";
import Profile from "../../assets/profile.jpg";
import Instagram from "../../assets/instagram.png";
import "../Navbar/Navbar.css";
import PostModal from "../../Modal/PostModal";
import {Link, useHistory} from "react-router-dom";
import {UserContext} from "../../Context/UserContext";
import Popover from "../../Popover/Popover";

const Navbar = () => {

    let history = useHistory();

    const[image, setImage] = useState("");
    const [show, setShow] = useState(false);
    const[showPopOver, setShowPopOver] = useState(false);

    const {state, dispatch} = useContext(UserContext);

    console.log("This is also a state", state);

    const openPopOver = () =>{
        console.log("Clicked");
        setShowPopOver(!showPopOver)
        // setShowPopOver(true);
    }

    const renderList = () =>{
        if(state){
            return(
                <React.Fragment>
            <div className="navbar-search">
                <span><i className="fa fa-search"></i></span>
                <input type="text" placeholder="Search" />
            </div>
            <div className="navbar-icons">
                <div className="navbar-icon">
                    <span>
                    <svg color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22">
							<path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path>
					</svg>
                    </span>
                </div>
                <div className="navbar-icon">
                    <span>
                    <svg color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22">
							<path clipRule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fillRule="evenodd"></path>
					</svg>
                    </span>
                </div>
                <div className="navbar-icon">
                    <span>
                    <svg color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22">
							<path d="M36.2 16.7L29 22.2c-.5.4-1.2.4-1.7 0l-5.4-4c-1.6-1.2-3.9-.8-5 .9l-6.8 10.7c-.7 1 .6 2.2 1.6 1.5l7.3-5.5c.5-.4 1.2-.4 1.7 0l5.4 4c1.6 1.2 3.9.8 5-.9l6.8-10.7c.6-1.1-.7-2.2-1.7-1.5zM24 1C11 1 1 10.5 1 23.3 1 30 3.7 35.8 8.2 39.8c.4.3.6.8.6 1.3l.2 4.1c0 1 .9 1.8 1.8 1.8.2 0 .5 0 .7-.2l4.6-2c.2-.1.5-.2.7-.2.2 0 .3 0 .5.1 2.1.6 4.3.9 6.7.9 13 0 23-9.5 23-22.3S37 1 24 1zm0 41.6c-2 0-4-.3-5.9-.8-.4-.1-.8-.2-1.3-.2-.7 0-1.3.1-2 .4l-3 1.3V41c0-1.3-.6-2.5-1.6-3.4C6.2 34 4 28.9 4 23.3 4 12.3 12.6 4 24 4s20 8.3 20 19.3-8.6 19.3-20 19.3z"></path>
					</svg>
                    </span>
                </div>
                <div className="navbar-icon">
                    <span>
                        <img src={Heart} alt="heart" className="heart" />
                    </span>
                </div>
                <div className="navbar-icon">
                    <span>
                        <img src={Plus} onClick={openModal} alt="plus" className="plus" />
                        <PostModal modalIsOpen={modalIsOpen}
                        setIsOpen={setIsOpen}
                        image={image}
                        setImage={setImage}
                        show={show}
                        setShow={setShow}
                        />
                    </span>
                </div>
                <div className="navbar-icon">
                    <span onClick={openPopOver}>
                        <img src={Profile} alt="plus" className="user-profile"/>
                    </span>
                </div>
                {showPopOver ? <Popover /> : null}
            </div>
                </React.Fragment>
            )
        }else{
            return(
                <React.Fragment>
            <div className="navbar-icon" style={{display : "flex", alignItems : "center", gap : "10px", fontSize : "20px"}}>
                <Link to="/signup" style={{color : "#000000"}}>Signup</Link>
                <Link to="/login" style={{color : "#000000"}}>Login</Link>
            </div>
                </React.Fragment>
            )
        }
    };

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    };

    function closeModal() {
        setIsOpen(false);
        setImage("");
        setShow(false);
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={Instagram} alt="instagram" />
                </Link>
            </div>
            {renderList()}
            <div className="close-modal">
                {modalIsOpen ? <button onClick={closeModal}>x</button> : null}
            </div>
        </div>
    )
}

export default Navbar
