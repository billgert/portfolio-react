import React from 'react'
import Social from './social/Social'
import './About.css'

export default class App extends React.Component {
  render() {
    const profile = this.props.profile
    return (
      <div className="aboutContent">
        <Description text={profile.description}/>
        <Social links={profile.links}/>
      </div>
    )
  }
}

function Description(props) {
  return <div className="aboutDescription">
    {props.text}
  </div>
}
