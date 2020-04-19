import React from 'react'
import './Element.css'
import '../../App.css'

export default class Element extends React.Component {
  render() {
    const project = this.props.project
    return (
      <div style={BackgroundStyle(project.cover)}>
        <div className="elementContent">
          <Logo url={project.product.logo}/>
          <Role text={project.role}/>
          <Keywords keywords={project.keywords}/>
          <div className="companiesContainer">
            <button className="companyButton" onClick={this.props.onClickProduct}>{project.product.name}</button>
            <button className="companyButton" onClick={this.props.onClickEmployer}>{project.employer.name}</button>
          </div>
        </div>
      </div>
    )
  }
}

function BackgroundStyle(cover) {
  return {
    display: 'flex',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + cover + ')'
  }
}

function Logo(props) {
  return <div className="logo">
    <img src={props.url} alt=""/>
  </div>
}

function Role(props) {
  return <div className="title">
    {props.text}
  </div>
}

function Keywords(props) {
  return <div className="keywords">
    {props.keywords.map((keyword, index) =>
      <text key={keyword}>
        {keyword + (index != props.keywords.length - 1 ? " | " : "") }
      </text>
    )}
  </div>
}
