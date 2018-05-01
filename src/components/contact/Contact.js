import React from 'react'
import './Contact.css'

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contactContent">
        <button className="emailButton" onClick={this.handleClick}>Say hi!</button>
      </div>
    )
  }

  handleClick = () => {
    window.location.href = "mailto:" + this.props.email
  }
}
