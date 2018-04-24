import React from 'react'
import './WorkElement.css';

export default class WorkElement extends React.Component {
  render() {
    const project = this.props.project
    var backgroundStyle = {
      display: 'flex',
      margin: '0px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: 'linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url(' + project.cover + ')'
    };
    return (
      <div style={backgroundStyle}>
        <div className="content">
          <Logo company={project.company}/>
          <Role text={project.role}/>
          <Description text={project.description}/>
        </div>
      </div>
    )
  }
}

function Logo(props) {
  return <div className="logo">
    <img src={props.company.logo} alt=""/>
  </div>
}

function Role(props) {
  return <div className="title">{props.text}</div>
}

function Description(props) {
  return <div className="description">{props.text}</div>
}
