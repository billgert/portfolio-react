import React from 'react'
import WorkElement from '../element/WorkElement'
import './WorkList.css';

export default class WorkList extends React.Component {
  render() {
    const projects = this.props.projects
    return (
      <div className="container">
        <Elements projects={projects}/>
      </div>
    )
  }
}

function Elements(props) {
  return props.projects.map((project) => {
    return <WorkElement key={project.id} project={project}/>
  })
}
