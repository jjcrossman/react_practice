import React from "react";
// const React = require( "node_modules/react" );
import { render } from "react-dom";
import ContactsList from "./contactsList.js";

const contacts = [ {
  _id: 1
  , name: "Scott"
  , phone: "555-555-5555"
}
, {
  _id: 2
  , name: "Courtney"
  , phone: "444-444-4444"
}
, {
  _id: 3
  , name: "Tim"
  , phone: "111-111-5555"
}
, {
  _id: 4
  , name: "Jeff"
  , phone: "555-111-5555"
}
, {
  _id: 5
  , name: "Fox Bomb"
  , phone: "555-555-1111"
}
 ];

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts List</h1>
        <ContactsList contacts={ this.props.contacts } />
      </div>
    )
  }
}

render( <App contacts={ contacts } />, document.getElementById( "app" ) );
