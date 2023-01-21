import React, { useState } from "react";
import classes from "./App.module.css";
import Button from "./components/UI/Button";
import dummyEmployeeList from "./components/Data/DummyList";
import ContactsList from "./components/Contacts/ContactsList";
import AddContact from "./components/Contacts/AddContact";

function App() {
  const [contact, setContact] = useState(dummyEmployeeList);
  const [showPage, setShowPage] = useState(false);

  const errorHandler = () => {
    setShowPage(false);
  };

  function addContact(enteredContact) {
    const addcontact = {
      ...enteredContact,
      id: Math.random().toString(),
    };
    setContact((prev) => {
      return [addcontact, ...prev];
    });
  }

  function editContact(getExistingContact) {
    const myNextList = [...contact];
    const edit = myNextList.find((a) => a.id === getExistingContact.id);
    edit.id = getExistingContact.id;
    edit.firstName = getExistingContact.firstName;
    edit.lastName = getExistingContact.lastName;
    edit.email = getExistingContact.email;
    edit.phoneNumber = getExistingContact.phoneNumber;
    setContact(myNextList);
    console.log(myNextList);
  }

  function deleteHandler(id) {
    console.log(id);
    let updatedList = contact.filter((curr) => curr.id !== id);
    setContact(updatedList);
  }

  return (
    <>
      <div className={classes["section-header"]}>
        <header>
          <h1>Simple: Contact Manager Application</h1>
        </header>
      </div>
      <div className={classes["section-content"]}>
        <Button className={classes.button} onClick={() => setShowPage(true)}>
          Add Contact
        </Button>
        <ContactsList
          contactList={contact}
          onDelete={deleteHandler}
          onEditContact={editContact}
        ></ContactsList>
        {showPage && (
          <AddContact
            onAddContact={addContact}
            onConfirm={errorHandler}
          ></AddContact>
        )}
      </div>
    </>
  );
}

export default App;
