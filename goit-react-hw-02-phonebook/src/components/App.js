import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Phonebook from "./phonebook/Phonebook";
import Contacts from "./contacts/Contacts";

class App extends Component {
  state = {
    contacts: localStorage.getItem("contacts")
      ? [...JSON.parse(localStorage.getItem("contacts"))]
      : [],
    name: "",
    number: "",
    filter: "",
  };

  componentDidUpdate(prevProps, prevState) {
    prevState.contacts !== this.state.contacts &&
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    let check = false;

    contacts.forEach((contact) => {
      if (contact.name === e.target.children[0].value) {
        alert(`${e.target.children[0].value} is already in contacts`);
        check = true;
      }
      return;
    });

    if (name === "" || number === "" || check) {
      check = false;
      return;
    }

    const newContact = { id: uuidv4(), name, number };
    this.setState({ contacts: [...contacts, newContact] });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  handleSearch = () => {
    const { contacts, filter } = this.state;
    // console.log(this.state);

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  render() {
    const { name, number, filter, contacts } = this.state;

    return (
      <>
        <Phonebook
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={name}
          number={number}
        />
        <Contacts
          filter={filter}
          contacts={contacts}
          filteredContacts={this.handleSearch()}
          changeFilter={this.changeFilter}
          removeContact={this.removeContact}
        />
      </>
    );
  }
}

export default App;
