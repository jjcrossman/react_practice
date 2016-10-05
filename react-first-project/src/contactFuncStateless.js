// This is a functional, stateless version of contact.js
// This makes this component React agnostic, should make converting to new framework easier in future.
// Functional, stateless components will offer speed increases in later versions of React.

import React from "react";

const Contact = ( { contact, item } ) =>
          <li>
          { contact.name } [---] { contact.phone } -- { item }
          </li>

export default Contact;
