import React, { useState } from "react";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./EditContact.module.css";

function EditContact(props) {
  const contact = props.vContact;

  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [email, setEmail] = useState(contact.email);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);

  function addContactHandler(e) {
    e.preventDefault();

    props.editContact({
      id: contact.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    });
  }

  function firstNameHandler(e) {
    setFirstName(e.target.value);
  }

  function lastNameHandler(e) {
    setLastName(e.target.value);
  }

  function emailHandler(e) {
    setEmail(e.target.value);
  }
  function phoneHandler(e) {
    setPhoneNumber(e.target.value);
  }
  return (
    <Modal onClick={props.onConfirm}>
      <Card>
        <header className={classes.header}>
          <h1>Edit Contact Details</h1>
        </header>
        <form onSubmit={addContactHandler}>
          <label htmlFor="firstName">FirstName</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={firstNameHandler}
          />
          <label htmlFor="lastName">LastName</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={lastNameHandler}
          />
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={email} onChange={emailHandler} />
          <label htmlFor="phoneNumber">PhoneNumber</label>
          <input
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={phoneHandler}
          />
          <Button className={classes.button} type="submit">
            Edit Contact
          </Button>
          <Button className={classes.button} onClick={props.onConfirm}>
            Close
          </Button>
        </form>
      </Card>
    </Modal>
  );
}

export default EditContact;
