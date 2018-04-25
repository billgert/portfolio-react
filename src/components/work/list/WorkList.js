import React from 'react'
import WorkElement from '../element/WorkElement'
import './WorkList.css';

export default class WorkList extends React.Component {
  render() {
    const projects = this.props.projects
    return (
      <div className="container">
        <Elements projects={projects} handleClick={this.handleClick}/>
      </div>
    )
  }

  handleClick = (project) => {
    window.open(project.product.website)
  }
}

function Elements(props) {
  return props.projects.map((project) => {
    return <WorkElement key={project.id} project={project} onClick={(e) => props.handleClick(project, e)}/>
  })
}
