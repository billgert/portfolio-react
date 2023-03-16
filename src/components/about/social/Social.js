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
    if (link.file != null) {
      return <img className="linkButton" onClick={(e) => downloadPdf(link.file)} key={index} src={link.logo} alt=""/>
    } else {
      return <a href={link.url} onClick={(e) => props.handleClick(link.url, e)}><img className="linkButton" key={index} src={link.logo} alt=""/></a>
    }
  })
}

function downloadPdf(filePath) {
  const components = filePath.split("/")
  const filename = components.slice(-1)[0]

  fetch(filePath, {
    headers: {
      'Content-Type': 'application/pdf'
    }
  }).then((response) => {
    response.blob().then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
}