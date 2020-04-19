import React from 'react'

export const projects = [
  {
    active: false,
    role: "iOS Lead",
    description: "The world's first AI enabled Calculus tutor. Huge project spanning across three different timezones (New York, Denver and Stockholm). With over 40 people involved, I was part of the product team and lead the development of the iOS application from start to beta.",
    cover: require('./projects/aida/cover.jpeg'),
    employer: {
      name: "Doberman AB",
      website: "https://doberman.co/",
      logo: ""
    },
    product: {
      name: "Aida",
      description: "",
      website: "https://www.pearson.com/en-us/learner/products-and-services/learning-apps-development/aida.html",
      logo: require('./projects/aida/logo.png')
    },
    keywords: [
      "Math",
      "AI",
      "OCR",
      "Swift",
      "iPhone"
    ],
    team: [
      {
        name: "Joe Fraga",
        role: "Lead Engineer"
      },
      {
        name: "Mathias Palm",
        role: "iOS Developer"
      },
      {
        name: "Rikard Lindström",
        role: "iOS Developer"
      },
      {
        name: "Andrey Zhukov",
        role: "iOS Developer"
      }
    ],
    pictures: null
  },
  {
    active: false,
    role: "iOS Lead",
    description: "A new service called Hint that enables groundbreaking behavioural prediction AI. It foresees spending and plans a unique budget for each of everyone's financial behaviour in seconds. I made the Alpha and Beta app.",
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
    keywords: [
      "Economy",
      "AI",
      "Swift",
      "iPhone",
      "Watch"
    ],
    team: null,
    pictures: null
  },
  {
    active: false,
    role: "iOS Developer",
    description: "Bokus has entered the booming industry of audiobooks with a brand new app. Mainly responsible for implementing the design and user experience in the first version.",
    cover: require('./projects/bokus/cover.jpg'),
    employer: {
      name: "BBH Stockholm",
      website: "https://www.bbhstockholm.se",
      logo: ""
    },
    product: {
      name: "Bokus Play",
      description: "",
      website: "https://www.bokus.com/play",
      logo: require('./projects/bokus/logo.png')
    },
    keywords: [
      "Books",
      "Audio",
      "GPS",
      "Swift",
      "iPhone"
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
    active: false,
    role: "iOS Lead",
    description: "As I have experience working in the restaurant-business this project was extra fun. MAÎTRES lets you connect with restaurants to book, pay and rate without having to wait for the bill.",
    cover: require('./projects/maitres/cover.jpg'),
    employer: {
      name: "BBH Stockholm",
      website: "https://www.bartleboglehegarty.com/case-studies/always-a-regular",
      logo: ""
    },
    product: {
      name: "MAÎTRES",
      description: "",
      website: "https://www.maitres.com/",
      logo: require('./projects/maitres/logo.png')
    },
    keywords: [
      "Dining",
      "GPS",
      "Swift",
      "iPhone"
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
    keywords: [
      "Kids",
      "Game",
      "Unity 3D",
      "C#",
      "iOS",
      "Android"
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
      }
    ],
    pictures: null
  },
  {
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
    keywords: [
      "Beauty",
      "Prototype",
      "Swift",
      "iPhone"
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
    active: false,
    role: "iOS Developer",
    description: "The Activist-program was made to create jobs by making loyal customers employees of Rebtel. With an office in their hand the Rebtel Activist can sign up new customers directly in the app.",
    cover: require('./projects/rebtel/cover.jpg'),
    employer: {
      name: "BBH Stockholm",
      website: "https://www.bartleboglehegarty.com/case-studies/activists",
      logo: ""
    },
    product: {
      name: "Rebtel Activist",
      description: "",
      website: "https://www.rebtel.com/en/partners/activist/",
      logo: require('./projects/rebtel/logo.png')
    },
    keywords: [
      "Employment",
      "Tele",
      "Objective-C",
      "iPhone"
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
    keywords: [
      "Music",
      "Share",
      "Objective-C",
      "iPhone"
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
  description_div: <div>Dedicated mobile developer based in Stockholm. Focusing on iOS since 2012 with some experience in watchOS, Android, Unity 3D and React. This is a selection of my previous work. {<a href="https://www.bruce.app">IM WITH BRUCE</a>}</div>,
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
