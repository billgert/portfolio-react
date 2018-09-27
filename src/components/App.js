import React from 'react'
import List from './work/list/List'
import About from './about/About'
import Contact from './contact/Contact'
import ReactGA from 'react-ga'

export default class App extends React.Component {
  render() {
    const data = require('../assets/data.js')
    return (
      <div>
        <List projects={data.projects}/>
        <About profile={data.profile}/>
        <Contact email={data.email}/>
      </div>
    )
  }
}

ReactGA.initialize('UA-46400607-2')
ReactGA.pageview('start')
