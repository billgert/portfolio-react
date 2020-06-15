import React from 'react'
import Element from '../element/Element'
import ReactGA from 'react-ga'
import './List.css';

export default class List extends React.Component {
  render() {
    const projects = this.props.projects
    return (
      <div className="container">
        <Elements projects={projects} handleLinkClick={this.handleLinkClick}/>
      </div>
    )
  }

  handleLinkClick = (link) => {
    ReactGA.event({
      category: 'Work',
      action: 'Open link ' + link.name
    })

    window.open(link.url)
  }
}

function Elements(props) {
  return props.projects.map((project) => {
    return <Element
      key={project.id}
      project={project}
      onClickLink={(link) => props.handleLinkClick(link)}
    />
  })
}
