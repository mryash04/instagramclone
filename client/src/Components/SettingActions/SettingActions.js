import React from 'react';
import "./SettingActions.css";
import Meta from "../../assets/meta.png";
import EditProfile from "../EditProfile/EditProfile";
import ManageContacts from "../ManageContacts/ManageContacts";
import {Switch, Router, Route, Link, useRouteMatch, useParams, useLocation} from "react-router-dom";
import ChangePassword from "../ChangePassword/ChangePassword";
import EmailSms from "../EmailSms/EmailSms";
import ComingSoon from "../ComingSoon/ComingSoon";

const SettingActions = () => {

    const {path, url} = useRouteMatch();

    console.log("This is path", path);  
    console.log("This is url", url); 

    const route = `${url}/editprofile`;

    console.log(route);

    return (
        <div className="setting-actions">
            <div className="setting-actions-right">
                <div className="setting-actions-right-info">
                    <Link to={`${url}/editprofile`}>Edit Profile</Link>
                </div>
                <div className="setting-actions-right-info">
                    <Link to={`${url}/changepassword`}>Change Password</Link>
                </div>
                <div className="setting-actions-right-info">
                    <Link to={`${url}/comingsoon`}>Apps and Websites</Link>
                </div>
                <div className="setting-actions-right-info">
                    <Link to={`${url}/emailsms`}>Email and SMS</Link>
                </div>
                <div className="setting-actions-right-info">
                    <Link to={`${url}/comingsoon`}>Push Notifications</Link>
                </div>
                <div className="setting-actions-right-info">
                    <Link to={`${url}/managecontacts`}>Manage Contacts</Link>
                </div>
                <div className="setting-actions-right-info">
                    <Link to={`${url}/comingsoon`}>Privacy and Security</Link>
                </div>
                <div className="setting-actions-right-info">
                    <Link to={`${url}/comingsoon`}>Login Activity</Link>
                </div>
                <div className="setting-actions-right-info">
                    <Link to={`${url}/comingsoon`}>Emails from Instagram</Link>
                </div>
                <div className="setting-actions-right-info">
                    <Link to={`${url}/comingsoon`}>Help</Link>
                </div>
                {/* <hr className="setting-actions-hr" /> */}
                <div className="setting-actions-center">
                    <div className="setting-actions-center-info">
                        <img src={Meta} alt="meta" />
                        <span>Meta</span>
                    </div>
                    <a className="account-center" href="#">Accounts Center</a>
                    <span className="account-details">Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing and logging in.</span>
                </div>
            </div>
            <div className="setting-actions-left">
                <Switch>
                <Route path={`${path}/editprofile`}>
                  <EditProfile />
                </Route>
                <Route path={`${path}/changepassword`}>
                  <ChangePassword />
                </Route>
                <Route path={`${path}/managecontacts`}>
                    <ManageContacts />
                </Route>
                <Route path={`${path}/emailsms`}>
                  <EmailSms />
                </Route>
                <Route path={`${path}/comingsoon`}>
                  <ComingSoon />
                </Route>
              </Switch>
            </div>
        </div>
    )
}

export default SettingActions
