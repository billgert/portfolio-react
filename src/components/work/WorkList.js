import React from 'react'
import WorkElement from './WorkElement'

class WorkList extends React.Component {
  render() {
    const projects = this.props.projects
    return (
      <Elements projects={projects}/>
    )
  }
}

function Elements(props) {
  return props.projects.map((project) => {
    return <WorkElement key={project.id} project={project}/>
  })
}

export default WorkList
