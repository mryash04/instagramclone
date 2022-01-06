import React from 'react';
import "./ManageContacts.css";

const ManageContacts = () => {
    return (
        <div className="manage-contacts">
            <div className="manage-contacts-data">
                <div className="manage-contacts-title">Manage Contacts</div>
                <span>
                The people listed here are contacts you've uploaded to Instagram. To remove your synced contacts, tap Delete All. Your contacts will be re-uploaded the next time Instagram syncs your contacts unless you go to your device settings and turn off access to contacts.
                </span>
                <span>
                Only you can see your contacts, but Instagram uses the info you've uploaded about your contacts to make friend suggestions for you and others and to provide a better experience for everyone.
                </span>
            </div>
        </div>
    )
}

export default ManageContacts
