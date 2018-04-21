import React, { Component } from 'react';

class App extends Component {
  constructor(title) {
    super(props)
    this.state = {
      title: title
    }
  }
}

export default App

  //
  // {
  //   type: 'button',
  //   props: {
  //     className: 'button button-blue',
  //     children: {
  //       type: 'b',
  //       props: {
  //         children: 'OK!'
  //       }
  //     }
  //   }
  // }
