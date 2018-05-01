import React from 'react'
import './Contact.css'

export default class Contact extends React.Component {
  render() {
    const email = this.props.email
    return (
      <div className="contactContent">
        <button className="emailButton" onClick={this.props.handleClick}>Say hi!</button>
      </div>
    )
  }

  handleClick = () => {
    // Open email
  }
}
