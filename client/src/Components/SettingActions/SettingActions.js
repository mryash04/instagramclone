import React from 'react';
import "./SettingActions.css";
import Meta from "../../assets/meta.png";
import EditProfile from "../EditProfile/EditProfile";
import ManageContacts from "../ManageContacts/ManageContacts";
import {Switch, Router, Route, Link, useRouteMatch, useParams} from "react-router-dom";

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
                    <a>Change Password</a>
                </div>
                <div className="setting-actions-right-info">
                    <a>Apps and Websites</a>
                </div>
                <div className="setting-actions-right-info">
                    <a>Email and SMS</a>
                </div>
                <div className="setting-actions-right-info">
                    <a>Push Notifications</a>
                </div>
                <div className="setting-actions-right-info">
                    <Link to={`${url}/managecontacts`}>Manage Contacts</Link>
                </div>
                <div className="setting-actions-right-info">
                    <a>Privacy and Security</a>
                </div>
                <div className="setting-actions-right-info">
                    <a>Login Activity</a>
                </div>
                <div className="setting-actions-right-info">
                    <a>Emails from Instagram</a>
                </div>
                <div className="setting-actions-right-info">
                    <a>Help</a>
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
                    <Route exact={true} path={`${path}/:settingActionId`}>
                        <Topic />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.

    const {path, url} = useRouteMatch();

    console.log("This is topic path", path);

    console.log("This is topic url", url);

    const { settingActionId } = useParams();

    console.log("This is setting action id", settingActionId);
  
    return (
      <div>
          <Switch>
              <Route exact={true} path={url}>
                  <EditProfile />
              </Route>
              <Route exact={true} path={url}>
                  <ManageContacts />
              </Route>
          </Switch>
      </div>
    );
}

export default SettingActions
