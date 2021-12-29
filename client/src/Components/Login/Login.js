import React, {useState, useContext} from 'react';
import {Link, useHistory} from "react-router-dom";
import {UserContext} from "../../Context/UserContext";

const Login = () => {

  const {state, dispatch} = useContext(UserContext);

    let history = useHistory();

    const[user, setUser] = useState({
        email : "",
        password : ""
    });

    const{email, password} = user;

    const handleChange = (event) =>{
        console.log(event.target.value);
        setUser({...user, [event.target.name] : event.target.value});
    };

    const handleClick = async(event) => {
        event.preventDefault();
        console.log("Clicked");

        try{
            const response = await fetch("http://localhost:8000/api/login", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    email,
                    password
                })
            });

            const result = await response.json();
            console.log("This is result", result.token);
            localStorage.setItem("jwt", result.token);
            dispatch({type : "USER", payload : result.token})
            alert("Login Succesfully");
            history.push("/");
          }catch(err){
            console.log(err);
          }
        };
        console.log("This is new state", state)

    return (
        <div classNameName="signup">
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
                      <input onChange={handleChange} type="email" id="name" placeholder="Email"  name="email" value={email} required />
                    </div> 

                    <div className="input-box">
                      <input onChange={handleChange} type="password" name="password" id="password" placeholder="Password"    value={password} required />
                    </div>  

                    <span className="button-box">
                      <button onClick={handleClick} className="btn" type="submit" name="submit">Sign in</button>
                    </span>  

                    <a className="forgot" href="">Forgot password?</a>
                  </form>
                </div>
              </div>

              <div className="login-box">
                <p className="text">Don't have an account?<Link to="/signup">Sign up</Link></p>
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
                  <select name="language" className="select" >
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

export default Login
