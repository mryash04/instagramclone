import React from 'react';
import "./EmailSms.css";

const EmailSms = () => {
    return (
        <div className="email-sms">
            <div className="email-sms-title">
                <span>Subscribe to:</span>
            </div>
            <form className="email-sms-data">
                <div className="email-sms-data-details">
                    <div className="email-sms-user-data">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1">Feedback Emails</label><br />
                    </div>
                    <div className="email-sms-text">
                        <span>Give feedback on Instagram.</span>
                    </div>
                </div>
                <div className="email-sms-data-details">
                    <div className="email-sms-user-data">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1">Reminder emails</label><br />
                    </div>
                    <div className="email-sms-text">
                        <span>Get notifications you may have missed.</span>
                    </div>
                </div>
                <div className="email-sms-data-details">
                    <div className="email-sms-user-data">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1">Product emails</label><br />
                    </div>
                    <div className="email-sms-text">
                        <span>Get tips about Instagram's tools.</span>
                    </div>
                </div>
                <div className="email-sms-data-details">
                    <div className="email-sms-user-data">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1">News emails</label><br />
                    </div>
                    <div className="email-sms-text">
                        <span>Learn about new Instagram features.</span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EmailSms
