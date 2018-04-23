import React from 'react'
import WorkList from './work/WorkList'
import projects from '../data/projects.json'

class App extends React.Component {
  render() {
    return (
      <WorkList projects={projects}/>
    )
  }
}

export default App
