import React from 'react'
import WorkElement from './WorkElement'

class WorkList extends React.Component {
  render() {
    return (
      this.props.projects.map(
        function(project, index) {
          return (
            <WorkElement project={project} key={index}/>
          )
        }
      )
    )
  }
}

export default WorkList
