import React from "react";
import Profile from "../../assets/profile.jpg";
import "./EditProfile.css";

const EditProfile = () => {

  return (
    <div className="edit-profile">
      <div className="edit-profile-data">
        <div className="edit-profile-user">
          <img src={Profile} alt="edit-profile" />
          <div className="edit-profile-user-name">
            <span>mr. yash</span>
            <span><a href="#">Change Profile Photo</a></span>
          </div>
        </div>
        <form>
          <div className="edit-profile-user-info">
            <label>Name</label>
            <div className="edit-profile-user-details">
                <input type="text" placeholder="Enter Name" />
                <span className="edit-profile-user-message">
                    Help people discover your account by using the name you're known by:
                    either your full name, nickname, or business name.<br /> <br /> You can only
                    change your name twice within 14 days.
                </span>
            </div>
          </div>
          <div className="edit-profile-user-info">
            <label>Username</label>
            <div className="edit-profile-user-details">
                <input type="text" placeholder="Enter Username" />
                <span className="edit-profile-user-message">
                    In most cases, you'll be able to change your username back to
                    _mr._yassh for another 14 days. Learn More
                </span>
            </div>
          </div>
          <div className="edit-profile-user-info">
            <label>Website</label>
            <input type="text" placeholder="Website" />
          </div>
          <div className="edit-profile-user-info">
            <label>Bio</label>
            {/* <texarea></texarea> */}
            <div className="edit-profile-user-details">
                <input type="text" placeholder="Enter Bio" />
                <span className="edit-profile-user-message">
                    Personal Information Provide your personal information, even if the
                    account is used for a business, a pet or something else. This won't
                    be a part of your public profile.
                </span>
            </div>
          </div>
          <div className="edit-profile-user-info">
            <label>Email</label>
            <input type="email" placeholder="Enter Email" />
          </div>
          <div className="edit-profile-user-info">
            <label>Phone</label>
            <div className="edit-profile-user-details">
            <input type="number" placeholder="Enter Phoneno" />
            <span>
                <button>Confirm Phone Number</button>
            </span>
            </div>
          </div>
          <div className="edit-profile-user-info">
            <label>Gender</label>
            <input type="text" placeholder="Enter Gender" />
          </div>
          <button type="submit" className="edit-profile-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
