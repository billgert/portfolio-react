import React from 'react'
import WorkElement from '../element/WorkElement'
import './WorkList.css';

class WorkList extends React.Component {
  render() {
    const projects = this.props.projects
    return (
      <div className="flexListContainer">
        <Elements projects={projects}/>
      </div>
    )
  }
}

function Elements(props) {
  return props.projects.map((project) => {
    return <div key={project.id} className="flexElementContainer">
      <WorkElement key={project.id} project={project}/>
    </div>

  })
}

export default WorkList
