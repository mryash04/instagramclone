import React, {useState} from 'react';
import "./Signup.css";
import {Link, useHistory} from "react-router-dom";

const Signup = () => {

    let history = useHistory();

    const[user, setUser] = useState({
        name : "",
        email : "",
        password : ""
    });

    const{name, email, password} = user;

    const handleChange = (event) =>{
        console.log(event.target.value);
        setUser({...user, [event.target.name] : event.target.value});
    };

    const handleClick = async(event) => {
        event.preventDefault();
        console.log("Clicked");

        try{
            const response = await fetch("http://localhost:8000/api/register", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            const result = await response.json();
            console.log("This is result", result);
            alert("User Created Succesfully");
            history.push("/login");
        }catch(err){
            console.log(err);
        }
    };

    return (
        <div className="signup">
              <span className="root">
    <section className="section-all">
      <main className="main" role="main">
        <div className="wrapper">
          <article className="article">
            <div className="content">
              <div className="login-box">
                <div className="header">
                  <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram" />
                </div>
                <div className="form-wrap">
                  <form className="form">

                    <div className="input-box">
                      <input onChange={handleChange} type="text" id="name" placeholder="Name" name="name" value={name} required />
                    </div>

                    <div className="input-box">
                      <input onChange={handleChange} type="email" id="name" placeholder="Email" name="email" value={email} required />
                    </div> 

                    <div className="input-box">
                      <input onChange={handleChange} type="password" name="password" id="password" placeholder="Password" value={password} required />
                    </div>  

                    <span className="button-box">
                      <button onClick={handleClick} className="btn" type="submit" name="submit">Sign up</button>
                    </span>  

                  </form>
                </div>
              </div>

              <div className="login-box">
                <p className="text">Already have an account?<Link to="/login">Sign in</Link></p>
              </div>

              <div className="app">
                <p>Get the app.</p>
                <div className="app-img">
                  <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8">
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge">
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png" />
                  </a>  
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
      <footer className="footer" role="contentinfo">
        <div className="footer-container">

          <nav className="footer-nav" role="navigation">
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Support</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Press</a></li>
              <li><a href="">Api</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">Privacy</a></li>
              <li><a href="">Terms</a></li>
              <li><a href="">Directory</a></li>
              <li>
                <span className="language">Language
                  <select name="language" className="select" onchange="la(this.value)">
                    <option value="#">English</option>
                    <option value="http://ru-instafollow.bitballoon.com">Russian</option>
                  </select>
                </span>
              </li>
            </ul>
          </nav>

          <span className="footer-logo">&copy; 2018 Instagram</span>
        </div>
      </footer>
      
    </section>
  </span>
        </div>
    )
}

export default Signup
