import React from 'react'
import './Header.css'
import companyLogo from '../../assets/company_logo.png'

export default class Header extends React.Component {
  render() {
    return (
      <div className="headerContent">
        <CompanyLogo url={companyLogo}/>
      </div>
    )
  }
}

function CompanyLogo(props) {
  return <div className="companyLogo">
    <img src={props.url} alt="Company logo"/>
  </div>
}