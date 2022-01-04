import React from "react";
import "./Profile.css";
import HighLights from "../HighLights/HighLights";
import MyProfile from "../../assets/profile.jpg";
import ProfileOptions from "../ProfileOptions/ProfileOptions";
import Gallery from "../Gallery/Gallery";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-info">
        <div className="profile-image">
          <img
            src={MyProfile}
            alt="myProfile"
          />
        </div>
        <div className="profile-data">
        <div className="profile-user-settings">
        <h1 className="profile-user-name">mr. yash</h1>

        <button className="profile-edit-btn">Edit Profile</button>

        <span className="profile-settings-btn" aria-label="profile settings">
          <svg aria-label="Options" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
        </span>
      </div>

      <div className="profile-stats">
        <ul>
          <li>
            <span className="profile-stat-count">164</span> posts
          </li>
          <li>
            <span className="profile-stat-count">188</span> followers
          </li>
          <li>
            <span className="profile-stat-count">206</span> following
          </li>
        </ul>
      </div>

      <div className="profile-bio">
        <p>
          <span className="profile-real-name">Yash Agarwal</span> <br /> Lorem ipsum dolor
          sit, amet consectetur adipisicing elit 📷✈️🏕️<br />
          ✨The object is at rest
        </p>
      </div>
        </div>
      </div>
      <HighLights />
      <div className="profile-border">
      </div>
      <ProfileOptions />
      <Gallery />
    </div>
  );
};

export default Profile;
