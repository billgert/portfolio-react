import React from 'react'
import Social from './social/Social'
import './About.css'
import '../App.css'

export default class About extends React.Component {
  render() {
    const profile = this.props.profile
    return (
      <div className="aboutContent">
        <Description text={profile.description_div}/>
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
