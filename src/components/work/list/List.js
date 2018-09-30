import React from 'react'
import Element from '../element/Element'
import ReactGA from 'react-ga'
import './List.css';

export default class List extends React.Component {
  render() {
    const projects = this.props.projects
    return (
      <div className="container">
        <Elements projects={projects} handleProductClick={this.handleProductClick} handleEmployerClick={this.handleEmployerClick}/>
      </div>
    )
  }

  handleProductClick = (product, element) => {
    ReactGA.event({
      category: 'Work',
      action: 'Open product ' + product.name
    })

    window.open(product.website)
  }

  handleEmployerClick = (employer, element) => {
    ReactGA.event({
      category: 'Work',
      action: 'Open employer ' + employer.name
    })

    window.open(employer.website)
  }
}

function Elements(props) {
  return props.projects.map((project) => {
    return <Element
      key={project.id}
      project={project}
      onClickProduct={(e) => props.handleProductClick(project.product, e)}
      onClickEmployer={(e) => props.handleEmployerClick(project.employer, e)}
    />
  })
}
