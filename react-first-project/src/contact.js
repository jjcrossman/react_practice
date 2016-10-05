import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div>
          <li>
          { this.props.contact.name } ::: { this.props.contact.phone }
          </li>
      </div>
    )
  }
}

export default Contact;
