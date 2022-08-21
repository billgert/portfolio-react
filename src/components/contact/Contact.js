import React from 'react'
import ReactGA from 'react-ga'
import './Contact.css'

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contactContent">
        <button className="emailButton" onClick={this.handleClick}>Contact</button>
      </div>
    )
  }

  handleClick = () => {
    ReactGA.event({
      category: 'Contact',
      action: 'Send Email'
    })

    window.location.href = "mailto:" + this.props.email
  }
}
