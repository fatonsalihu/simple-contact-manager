import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddContact.module.css";
import Modal from "../UI/Modal";

function AddContact(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function addContactHandler(e) {
    e.preventDefault();

    props.onAddContact({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
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
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Add New Contact</h2>
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
            Add Contact
          </Button>
          <Button className={classes.button} onClick={props.onConfirm}>
            Close
          </Button>
        </form>
      </Card>
    </Modal>
  );
}

export default AddContact;
