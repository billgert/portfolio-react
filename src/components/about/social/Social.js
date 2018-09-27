import React from 'react'
import ReactGA from 'react-ga'
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

  handleClick = (url, element) => {
    ReactGA.event({
      category: 'Social',
      action: 'Visit ' + url
    })
  }
}

function Buttons(props) {
  return props.links.map((link, index) => {
    return <a href={link.url} onClick={(e) => props.handleClick(link.url, e)}><img className="linkButton" key={index} src={link.logo} alt=""/></a>
  })
}
