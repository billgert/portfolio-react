import React from 'react'
import './Social.css';

export default class Social extends React.Component {
  render() {
    const links = this.props.links
    return (
      <div className="horizontalContainer">
        <Buttons links={links} handleClick={this.handleClick}/>
      </div>
    )
  }

  handleClick = (link) => {
    window.open(link.url)
  }
}

function Buttons(props) {
  return props.links.map((link, index) => {
    return <img className="linkButton" key={index} src={link.logo} alt="" onClick={(e) => props.handleClick(link, e)}/>
  })
}
