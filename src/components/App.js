import React from 'react'
import WorkList from './work/list/WorkList'
import projects from '../data/projects.json'
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="background">
        <WorkList projects={projects}/>
      </div>
    )
  }
}
