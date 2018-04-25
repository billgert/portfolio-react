import React from 'react'
import WorkList from './work/list/WorkList'
import './App.css'

export default class App extends React.Component {
  render() {
    const data = require('../assets/data.js')
    return (
      <div className="background">
        <WorkList projects={data.projects}/>
      </div>
    )
  }
}
