import React from 'react'
import ReactGA from 'react-ga'
import './Social.css';

export default class Social extends React.Component {
  render() {
    const links = this.props.links
    return (
      <div className="horizontalContainer">
        <Buttons links={links} handleClick={this.handleClick}/>
      </div>
    )
  }

  handleClick = (url, element) => {
    ReactGA.event({
      category: 'Social',
      action: 'Visit ' + url
    })
  }
}

function Buttons(props) {
  return props.links.map((link, index) => {
    if (link.filePath != null) {
      return <img className="linkButton" onClick={(e) => downloadPdf(link.filePath, link.fileName)} key={index} src={link.logo} alt=""/>
    } else {
      return <a href={link.url} onClick={(e) => props.handleClick(link.url, e)}><img className="linkButton" key={index} src={link.logo} alt=""/></a>
    }
  })
}

function downloadPdf(filePath, fileName) {
  fetch(filePath, {
    headers: {
      'Content-Type': 'application/pdf'
    }
  }).then((response) => {
    response.blob().then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
}