import React from 'react'

export const projects = [
  {
    id: 0,
    active: true,
    role: "Mobile Lead",
    description: "Working on a new service called Hint that soon will be launched in beta. As one of the first developers I'm excited to work with likeminded people to create something truly awesome.",
    cover: require('./projects/hint/cover.jpg'),
    employer: {
      name: "Hint AB",
      website: "https://www.gethint.se/",
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
        type: "ide"
      },
      {
        name: "Swift",
        url: "",
        type: "language"
      },
      {
        name: "iPhone",
        url: "",
        type: "device"
      },
      {
        name: "Widget",
        url: "",
        type: "extension"
      },
      {
        name: "Apple Watch",
        url: "",
        type: "extension"
      }
    ],
    team: null,
    pictures: null
  },
  {
    id: 1,
    active: false,
    role: "iOS Developer",
    description: "Bokus has entered the booming industry of audiobooks with a brand new app. Mainly responsible for implementing the design and user experience in the first version.",
    cover: require('./projects/bokus/cover.jpg'),
    employer: {
      name: "BBH Stockholm",
      website: "https://www.bbhstockholm.se/bokus-play",
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
        type: "ide"
      },
      {
        name: "Swift",
        url: "",
        type: "language"
      },
      {
        name: "iPhone",
        url: "",
        type: "device"
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
    description: "As I have experience working in the restaurant-business this project was extra fun. MAÎTRES lets you connect with restaurants to book, pay and rate without having to wait for the bill.",
    cover: require('./projects/maitres/cover.jpg'),
    employer: {
      name: "BBH Stockholm",
      website: "https://www.bbhstockholm.se/maitres",
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
        type: "ide"
      },
      {
        name: "Swift",
        url: "",
        type: "language"
      },
      {
        name: "iPhone",
        url: "",
        type: "device"
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
    description: "Bamseklubben is a game starring the Swedish cartoon character Bamse. Developed cross-platform for the Nordics with over 10.000 kids playing in the first weeks.",
    cover: require('./projects/tui/cover.jpg'),
    employer: {
      name: "BBH Stockholm",
      website: "http://bbhstockholm.se/",
      logo: ""
    },
    product: {
      name: "TUI Bamseklubben",
      description: "",
      website: "https://www.tui.se/bamse/",
      logo: require('./projects/tui/logo.png')
    },
    technologies: [
      {
        name: "Unity 3D",
        url: "",
        type: "game-engine"
      },
      {
        name: "C#",
        url: "",
        type: "language"
      },
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
    description: "I helped define, design and develop a prototype app for Dashl in their early stages. Their network of stylists is now the go-to-place for beauty treatments in Stockholm.",
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
        type: "ide"
      },
      {
        name: "Swift",
        url: "",
        type: "language"
      },
      {
        name: "iPhone",
        url: "",
        type: "device"
      }
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
    description: "The Activist-program was made to create jobs by making loyal customers employees of Rebtel. With an office in their hand the Rebtel Activist can sign up new customers directly in the app.",
    cover: require('./projects/rebtel/cover.jpg'),
    employer: {
      name: "BBH Stockholm",
      website: "https://www.bbhstockholm.se/rebtel",
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
        type: "ide"
      },
      {
        name: "Objective-C",
        url: "",
        type: "language"
      },
      {
        name: "iPhone",
        url: "",
        type: "device"
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
    description: "Each person is one song and together they become a playlist. OneSong aimed to be the daily soundtrack of you and your social network. Think of it like Spotify and Instagram having a baby.",
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
        type: "ide"
      },
      {
        name: "Objective-C",
        url: "",
        type: "language"
      },
      {
        name: "iPhone",
        url: "",
        type: "device"
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
  description_div: <div>Dedicated mobile developer based in Stockholm. Focusing on iOS since 2012 with some experience in watchOS, Android, Unity 3D and React. Other brands I've worked with includes {<a href="https://itunes.apple.com/se/app/min-volvo/id1340848952?mt=8">Volvo</a>}, {<a href="https://itunes.apple.com/se/app/arla-köket-recept-och-mat/id415895347?mt=8">Arla</a>}, {<a href="https://itunes.apple.com/se/app/litago-moojis/id970456880?mt=8">Litago</a>} and {<a href="https://itunes.apple.com/se/app/kyrkguiden/id472300717?mt=8">Swedish Church</a>}.</div>,
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
