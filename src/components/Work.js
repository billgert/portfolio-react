import React from 'react'
import projectsJson from '../data/projects.json'

export default class Work extends React.Component {
  constructor() {
    super()
    this.state = {
      "projects": []
    }
  }

  componentDidMount() {
    this.setState({"projects": projectsJson})
  }

  render() {
    return (
      <ul>
        {this.state.projects.map(function(project, index) {
          return (
            <div key={index}>
              <h1>{project.name}</h1>
              <h2>{project.description}</h2>
            </div>
          )
        })}
      </ul>
    )
  }
}
