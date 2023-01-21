import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./ContactsList.module.css";
import ViewContact from "./ViewContact";
import EditContact from "./EditContact";

function ContactsList(props) {
  const [selectedContact, setSelectedContact] = useState(null);
  return (
    <div className={classes.table}>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>

        {props.contactList.map((contact) => (
          <tr key={contact.id}>
            <td>{`${contact.firstName} ${contact.lastName}`}</td>
            <td>{contact.email}</td>
            <td>{contact.phoneNumber}</td>
            <td>
              <div className={classes.action}>
                <Button
                  onClick={() => {
                    setSelectedContact({ ...contact, type: "view" });
                  }}
                >
                  View
                </Button>
                <Button
                  onClick={() => {
                    setSelectedContact({ ...contact, type: "edit" });
                  }}
                >
                  Edit
                </Button>
                <Button
                  className={classes.delete}
                  onClick={() => {
                    props.onDelete(contact.id);
                  }}
                >
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </table>

      {selectedContact && selectedContact.type === "view" && (
        <ViewContact
          vContact={selectedContact}
          onConfirm={() => setSelectedContact(null)}
        ></ViewContact>
      )}

      {selectedContact && selectedContact.type === "edit" && (
        <EditContact
          vContact={selectedContact}
          onConfirm={() => setSelectedContact(null)}
          editContact={props.onEditContact}
        ></EditContact>
      )}
    </div>
  );
}

export default ContactsList;
