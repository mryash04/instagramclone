import React, {useState, useEffect} from 'react';
import "../Profile/Profile.css";
import HighLights from "../HighLights/HighLights";
import MyProfile from "../../assets/profile.jpg";
import ProfileOptions from "../ProfileOptions/ProfileOptions";
import Gallery from "../Gallery/Gallery";
import SettingModal from "../../SettingModal/SettingModal";
import {API_URL} from "../../helper";

const UserProfiles = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const[data, setData] = useState([]);

    console.log("This is data", data);

    function openModal() {
      setIsOpen(true);
      console.log("Clicked");
    }

    const getUserProfile = async() =>{
        try{
            const response = await fetch(`${API_URL}/profile/userprofile/61c98fe4d3c418be80e25c9d`, {
                headers : {
                    "x-auth-token" : localStorage.getItem("jwt")
                }
            })
            const result = await response.json();
            console.log("This is result", result);
            setData(result.post)
        }catch(error){
            console.log(error.message);
        }
    }

    useEffect(() =>{
        getUserProfile();
    }, []);

    return (
        <div className="user-profiles">
                <div className={modalIsOpen ? "profile-overlay" : "profile"}>
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
      </div>

      <div className="profile-stats">
        <ul>
          <li>
            <span className="profile-stat-count">{data.length}</span> posts
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
      <div className="highlights">
          {data.slice(0, 2).map((value, index) => {
              return( <React.Fragment>
                   <div className="highlights-story">
                       <img src={value.image} alt="profile" />
                       <span>bless❤❤</span>
                   </div>
                   <div className="highlights-story">
                       <img src={value.image} alt="profile" />
                       <span>bless💛💛</span>
                   </div>
                   <div className="highlights-story">
                       <img src={value.image} alt="profile" />
                       <span>bless❤❤</span>
                   </div>
                   <div className="highlights-story">
                       <img src={value.image} alt="profile" />
                       <span>bless❤❤</span>
                   </div>
              </React.Fragment>)
          })}
      </div>
      <div className="profile-border">
      </div>
      <ProfileOptions />
      {/* <Gallery /> */}
      <div className="gallery">
            {data.map((value, index) => {
                return <div className="gallery-images" key={index}>
                    <img src={value.image} alt="profile-images" />
                </div>
            })}
     </div>
    </div>
        </div>
    )
}

export default UserProfiles
