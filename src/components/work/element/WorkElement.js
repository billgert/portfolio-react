import React from 'react'
import './WorkElement.css';

class WorkElement extends React.Component {
  render() {
    const project = this.props.project
    return (
      <div className="flexContent">
        <Logo company={project.company}/>
        <Role text={project.role}/>
        <Description text={project.description}/>
      </div>
    )
  }
}

function Background(props) {
  return <div className="background">
    <img src={props.cover} alt=""/>
  </div>
}

function Logo(props) {
  return <div className="logo">
    <img src={props.company.logo} alt=""/>
  </div>
}

function Role(props) {
  return <div className="title">
     <h1>{props.text}</h1>
  </div>
}

function Description(props) {
  return <div className="description">
     <h2>{props.text}</h2>
  </div>
}

export default WorkElement
