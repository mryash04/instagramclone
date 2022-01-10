import React from 'react';
import "./ChangePassword.css";
import Profile from "../../assets/profile.jpg";

const ChangePassword = () => {
    return (
        <div className="change-password">
            <div className="change-password-data">
                <div className="edit-profile-user">
                    <img src={Profile} alt="edit-profile" />
                    <div className="change-password-user-name">
                        <span>mr. yash</span>
                    </div>
                </div>
                <form>
                    <div className="change-password-user-info">
                        <label>Old Password</label>
                        <div className="change-password-user-details">
                            <input type="password" />
                         </div>
                    </div>
                    <div className="change-password-user-info">
                        <label>New Password</label>
                        <div className="change-password-user-details">
                            <input type="password"/>
                         </div>
                    </div>
                    <div className="change-password-user-info">
                        <label>Confirm New Password</label>
                        <div className="change-password-user-details">
                            <input type="password"/>
                         </div>
                    </div>
                    <button type="submit" className="change-password-btn">
                        Change Password
                    </button> <br />
                    <div className="forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword
