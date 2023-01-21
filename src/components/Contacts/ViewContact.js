import React from "react";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./ViewContact.module.css";

function ViewContact(props) {
  const contact = props.vContact;
  return (
    <Modal onClick={props.onConfirm}>
      <Card>
        <header className={classes.header}>
          <h1>Contact Details</h1>
        </header>
        <div className={classes.content}>
          <h1>
            The Employee name is:
            <b>{`${contact.firstName} ${contact.lastName}`}</b>
          </h1>
          <h1>Email is : {contact.email}</h1>
          <h1>Phone is : {contact.phoneNumber}</h1>
          <Button className={classes.button} onClick={props.onConfirm}>
            Close
          </Button>
        </div>
      </Card>
    </Modal>
  );
}

export default ViewContact;
