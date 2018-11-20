import React from 'react'
import './Intro.css'

export default class Intro extends React.Component {
  render() {
    const introduction = this.props.introduction
    return (
      <div className="introContent" style={BackgroundStyle(introduction.url)}>
        <Description text={introduction.description_div}/>
      </div>
    )
  }
}

function Description(props) {
  return <div className="introDescription">
    {props.text}
  </div>
}

function BackgroundStyle(cover) {
  return {
    display: 'flex',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + cover + ')',
  }
}
