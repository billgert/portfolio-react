import React from 'react'

class WorkElement extends React.Component {
  render() {
    const project = this.props.project
    return (
      <div className="WorkElement">
        <Logo company={project.company}/>
        <Role text={project.role}/>
        <Info text={project.info}/>
        <Background cover={project.cover}/>
      </div>
    )
  }
}

function Logo(props) {
  return <img
    src={props.company.logo}
    alt={props.company.name}
  />
}

function Role(props) {
  return <h1>{props.text}</h1>
}

function Info(props) {
  return <h1>{props.text}</h1>
}

function Background(props) {
  return <img
    src={props.cover}
    alt=""
  />
}

export default WorkElement
