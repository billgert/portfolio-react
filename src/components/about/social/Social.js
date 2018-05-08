import React from 'react'
import './Social.css';

export default class Social extends React.Component {
  render() {
    const links = this.props.links
    return (
      <div className="horizontalContainer">
        <Buttons links={links}/>
      </div>
    )
  }
}

function Buttons(props) {
  return props.links.map((link, index) => {
    return <a href={link.url}><img className="linkButton" key={index} src={link.logo} alt=""/></a>
  })
}
