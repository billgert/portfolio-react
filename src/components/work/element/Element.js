import React from 'react'
import './Element.css'

export default class Element extends React.Component {
  render() {
    const project = this.props.project
    return (
      <div style={BackgroundStyle(project.cover)} onClick={this.props.onClick}>
        <div className="elementContent">
          <Logo url={project.company.logo}/>
          <Role text={project.role}/>
          <Description text={project.description}/>
        </div>
      </div>
    )
  }
}

function BackgroundStyle(cover) {
  return {
    display: 'flex',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + cover + ')'
  }
}

function Logo(props) {
  return <div className="logo">
    <img src={props.url} alt=""/>
  </div>
}

function Role(props) {
  return <div className="title">
    {props.text}
  </div>
}

function Description(props) {
  return <div className="elementDescription">
    {props.text}
  </div>
}
