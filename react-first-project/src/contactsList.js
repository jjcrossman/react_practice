import React from "react";

import Contact from "./contact.js";


class ContactsList extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      search: ""
      , contacts: props.contacts
    };
  }
  updateSearch( event ) {
    this.setState( { search: event.target.value.substr( 0, 20 ) } )
  }
  addContact( event ) {
    event.preventDefault(); //stops page from refreshing
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    let _id = Math.floor( ( Math.random() * 100 ) + 1 );
    this.setState( {
      contacts: this.state.contacts.concat( {
        _id
        , name
        , phone
      } )
    } );
    this.refs.name.value = "";
    this.refs.phone.value = "";
  }
  render() {
    let filteredContacts = this.state.contacts.filter(
      contact => contact.name.toLowerCase().indexOf( this.state.search.toLowerCase() ) !== -1
    );
    return (
      <div>
      <input type="text" placeholder="Search" value={ this.state.search } onChange={ this.updateSearch.bind( this ) }></input>
      <form onSubmit={ this.addContact.bind( this ) }>
        <input type="text" ref="name" />
        <input type="text" ref="phone" />
        <button type="submit">Add New Contact</button>
      </form>
        <ul>
          { filteredContacts.map( contact => <Contact contact={ contact } item="Hello" key={ contact._id } /> ) }
        </ul>
      </div>
    )
  }
}

export default ContactsList;
