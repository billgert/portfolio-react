import React from 'react'
import ReactHoverObserver from 'react-hover-observer';
import './WorkElement.css';

export default class WorkElement extends React.Component {
  render() {
    const project = this.props.project
    return (
      <div style={backgroundStyle(project)}>
        <ReactHoverObserver className="content">
          <Logo url={project.company.logo}/>
          <Role text={project.role}/>
          <Description text={project.description}/>
        </ReactHoverObserver>
      </div>
    )
  }
}

function backgroundStyle(project) {
  return {
    display: 'flex',
    margin: '0px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: 'linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url(' + project.cover + ')'
  }
}

function Logo(props) {
  return <div className="logo">
    <img src={props.url} alt=""/>
  </div>
}

function Role(props) {
  return <div className="title">{props.text}</div>
}

function Description(props) {
  return <div className="description">{props.text}</div>
}
