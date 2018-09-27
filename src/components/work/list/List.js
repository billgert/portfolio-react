import React from 'react'
import Element from '../element/Element'
import ReactGA from 'react-ga'
import './List.css';

export default class List extends React.Component {
  render() {
    const projects = this.props.projects
    return (
      <div className="container">
        <Elements projects={projects} handleClick={this.handleClick}/>
      </div>
    )
  }

  handleClick = (project, element) => {
    ReactGA.event({
      category: 'Work',
      action: 'Open ' + project.product.name
    })

    if (element.target.className === "elementContent") {
      window.open(project.product.website)
    }
  }
}

function Elements(props) {
  return props.projects.map((project) => {
    return <Element key={project.id} project={project} onClick={(e) => props.handleClick(project, e)}/>
  })
}
