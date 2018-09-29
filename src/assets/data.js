import React from 'react'

export const projects = [
  {
    id: 0,
    active: true,
    role: "iOS Lead",
    description_div: <div>Working on a new service called Hint that soon will be launched in beta. As one of the first developers I'm excited to work with likeminded people to create something truly awesome.</div>,
    cover: require('./projects/hint/cover.jpg'),
    employer: {
      name: "Hint AB",
      "website": "https://www.gethint.se/",
      logo: require('./projects/hint/logo.png')
    },
    product: {
      name: "Hint",
      description: "",
      website: "https://www.gethint.se/",
      logo: require('./projects/hint/logo.png')
    },
    technologies: [
      {
        name: "Xcode",
        url: "",
        type: "editor"
      },
      {
        name: "Swift",
        url: "",
        type: "language"
      },
      {
        name: "Google Places",
        url: "",
        type: "framework"
      },
      {
        name: "Firebase Analytics",
        url: "",
        type: "framework"
      },
      {
        name: "PromiseKit",
        url: "",
        type: "framework"
      },
      {
        name: "Notifications",
        url: "",
        type: "apple"
      },
      {
        name: "Core Location",
        url: "",
        type: "apple"
      },
      {
        name: "SceneKit",
        url: "",
        type: "apple"
      }
    ],
    team: null,
    pictures: null
  },
  {
    id: 1,
    active: false,
    role: "iOS Developer",
    description_div: <div>Bokus has entered the booming industry of audiobooks with a brand new app. Mainly responsible for implementing the design and user experience in the first version. Made for {<a href="http://bbhstockholm.se/">BBH Stockholm</a>}.</div>,
    cover: require('./projects/bokus/cover.jpg'),
    employer: {
      name: "BBH Stockholm",
      website: "http://bbhstockholm.se/",
      logo: ""
    },
    product: {
      name: "Bokus Play",
      description: "",
      website: "https://www.bokus.com/play",
      logo: require('./projects/bokus/logo.png')
    },
    technologies: [
      {
        name: "Xcode",
        url: "",
        type: "editor"
      },
      {
        name: "Swift",
        url: "",
        type: "language"
      },
      {
        name: "RxSwift",
        url: "",
        type: "framework"
      },
      {
        name: "Moya",
        url: "",
        type: "framework"
      },
      {
        name: "Alamofire",
        url: "",
        type: "framework"
      },
      {
        name: "AVFoundation",
        url: "",
        type: "apple"
      }
    ],
    team: [
      {
        name: "Jonas Johansson",
        role: "iOS Lead"
      },
      {
        name: "Andrew Sherba",
        role: "iOS Developer"
      }
    ],
    pictures: null
  },
  {
    id: 2,
    active: false,
    role: "iOS Lead",
    description_div: <div>As I have experience working in the restaurant-business this project was extra fun. MAÎTRES lets you connect with restaurants to book, pay and rate without having to wait for the bill. Made for {<a href="http://bbhstockholm.se/">BBH Stockholm</a>}.</div>,
    cover: require('./projects/maitres/cover.jpg'),
    employer: {
      name: "BBH Stockholm",
      website: "http://bbhstockholm.se/",
      logo: ""
    },
    product: {
      name: "MAÎTRES",
      description: "",
      website: "https://www.maitres.com/",
      logo: require('./projects/maitres/logo.png')
    },
    technologies: [
      {
        name: "Xcode",
        url: "",
        type: "editor"
      },
      {
        name: "Swift",
        url: "",
        type: "language"
      },
      {
        name: "Google Maps",
        url: "",
        type: "framework"
      },
      {
        name: "Google Places",
        url: "",
        type: "framework"
      },
      {
        name: "RxSwift",
        url: "",
        type: "framework"
      },
      {
        name: "Alamofire",
        url: "",
        type: "framework"
      },
      {
        name: "Firebase Analytics",
        url: "",
        type: "framework"
      },
      {
        name: "Core Location",
        url: "",
        type: "apple"
      },
      {
        name: "Notifications",
        url: "",
        type: "apple"
      }
    ],
    team: [
      {
        name: "Vasyl Fedasyuk",
        role: "iOS Developer"
      }
    ],
    pictures: null
  },
  {
    id: 3,
    active: false,
    role: "Mobile Developer",
    description_div: <div>Bamseklubben is a game starring the Swedish cartoon character Bamse. Developed cross-platform for the Nordics with over 10.000 kids playing in the first weeks. Made for {<a href="http://bbhstockholm.se/">BBH Stockholm</a>}.</div>,
    cover: require('./projects/tui/cover.jpg'),
    employer: {
      name: "BBH Stockholm",
      website: "http://bbhstockholm.se/",
      logo: ""
    },
    product: {
      name: "Bamseklubben",
      description: "",
      website: "https://www.tui.se/bamse/",
      logo: require('./projects/tui/logo.png')
    },
    technologies: [
      {
        name: "iOS",
        url: "",
        type: "platform"
      },
      {
        name: "Android",
        url: "",
        type: "platform"
      },
      {
        name: "Unity 3D",
        url: "",
        type: "editor"
      },
      {
        name: "C#",
        url: "",
        type: "language"
      },
      {
        name: "Google Analytics",
        url: "",
        type: "framework"
      }
    ],
    team: [
      {
        name: "David Jangdal",
        role: "Mobile Lead"
      },
      {
        name: "Daniel Lundqvist",
        role: "Mobile Developer"
      },
      {
        name: "Rickard Petersen",
        role: "Mobile Developer"
      },
      {
        name: "Adam Lindfors",
        role: "Designer"
      }
    ],
    pictures: null
  },
  {
    id: 4,
    active: false,
    role: "iOS Lead",
    description_div:  <div>I helped define, design and develop a prototype app for Dashl in their early stages. Their network of stylists is now the go-to-place for beauty treatments in Stockholm.</div>,
    cover: require('./projects/dashl/cover.jpg'),
    employer: {
      name: "Dashl AB",
      website: "https://dashl.se/",
      logo: ""
    },
    product: {
      name: "Dashl",
      description: "",
      website: "https://dashl.se/",
      logo: require('./projects/dashl/logo.png')
    },
    technologies: [
      {
        name: "Xcode",
        url: "",
        type: "editor"
      },
      {
        name: "Swift",
        url: "",
        type: "language"
      },
      {
        name: "Storyboards",
        url: "",
        type: "apple"
      },
      {
        name: "Core Data",
        url: "",
        type: "apple"
      },
    ],
    team: [
      {
        name: "Adam Lindfors",
        role: "Designer"
      }
    ],
    pictures: null
  },
  {
    id: 5,
    active: false,
    role: "iOS Developer",
    description_div: <div>The Activist-program was made to create jobs by making loyal customers employees of Rebtel. With an office in their hand the Rebtel Activist can sign up new customers directly in the app. Made for {<a href="http://bbhstockholm.se/">BBH Stockholm</a>}.</div>,
    cover: require('./projects/rebtel/cover.jpg'),
    employer: {
      name: "BBH Stockholm",
      website: "http://bbhstockholm.se/",
      logo: ""
    },
    product: {
      name: "Rebtel Activist",
      description: "",
      website: "https://www.rebtel.com/en/partners/activist/",
      logo: require('./projects/rebtel/logo.png')
    },
    technologies: [
      {
        name: "Xcode",
        url: "",
        type: "editor"
      },
      {
        name: "Objective-C",
        url: "",
        type: "language"
      },
      {
        name: "Google Analytics",
        url: "",
        type: "framework"
      },
      {
        name: "ReactiveCocoa",
        url: "",
        type: "framework"
      },
      {
        name: "AFNetworking",
        url: "",
        type: "framework"
      },
      {
        name: "FacebookSDK",
        url: "",
        type: "framework"
      },
      {
        name: "Storyboards",
        url: "",
        type: "apple"
      }
    ],
    team: [
      {
        name: "Anders Frank",
        role: "iOS Lead"
      }
    ],
    pictures: null
  },
  {
    id: 6,
    active: false,
    role: "iOS Developer",
    description_div: <div>Each person is one song and together they become a playlist. OneSong aimed to be the daily soundtrack of you and your social network. Think of it like Spotify and Instagram having a baby. Made for {<a href="http://www.frontcell.se/">Frontcell</a>}.</div>,
    cover: require('./projects/onesong/cover.jpg'),
    employer: {
      name: "Frontcell AB",
      website: "http://www.frontcell.se/",
      logo: ""
    },
    product: {
      name: "OneSong",
      description: "",
      website: "https://hypebeast.com/2015/6/onesong-music-sharing-app-combines-best-of-instagram-and-spotify",
      logo: require('./projects/onesong/logo.png')
    },
    technologies: [
      {
        name: "Xcode",
        url: "",
        type: "editor"
      },
      {
        name: "Objective-C",
        url: "",
        type: "language"
      },
      {
        name: "Google Analytics",
        url: "",
        type: "framework"
      },
      {
        name: "AFNetworking",
        url: "",
        type: "framework"
      },
      {
        name: "AVFoundation",
        url: "",
        type: "apple"
      },
      {
        name: "Core Data",
        url: "",
        type: "apple"
      },
      {
        name: "Notifications",
        url: "",
        type: "apple"
      },
      {
        name: "Storyboards",
        url: "",
        type: "apple"
      }
    ],
    team: [
      {
        name: "Oscar Kockum",
        role: "iOS Lead"
      }
    ],
    pictures: null
  }
]

export const profile = {
  description_div: <div>I'm a passionate mobile developer with love for Apple. Working at {<a href="https://www.gethint.se/">Hint</a>} to make way for an emerging industry we like to call think-tech.</div>,
  links: [
    {
      "url": "https://stackoverflow.com/users/1970148/billgert",
      "logo": require('./links/stackoverflow.png')
    },
    {
      "url": "https://github.com/billgert",
      "logo": require('./links/github.png')
    },
    {
      "url": "https://se.linkedin.com/in/billgert",
      "logo": require('./links/linkedin.png')
    }
  ]
}

export const email = "p.billgert@gmail.com"
