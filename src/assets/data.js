import React from 'react'

export const projects = [
  {
    active: false,
    role: "iOS Lead",
    description: "The world's first AI enabled Calculus tutor. Huge project spanning across three different timezones (New York, Denver and Stockholm). With over 40 people involved, I was part of the product team and lead the development of the iOS application from start to beta.",
    cover: require('./projects/aida/cover.jpg'),
    product: {
      name: "Aida",
      description: "",
      logo: require('./projects/aida/logo.png')
    },
    links: [
      {
        name: "Aida",
        url: "https://www.pearson.com/en-us/learner/products-and-services/learning-apps-development/aida.html"
      },
      {
        name: "Pearson",
        url: "https://www.pearson.com/"
      },
      {
        name: "Doberman",
        url: "https://doberman.co/"
      }
    ],
    keywords: [
      "Calculus",
      "AI",
      "OCR",
      "Swift",
      "iOS"
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
    product: {
      name: "Hint",
      description: "",
      logo: require('./projects/hint/logo.png')
    },
    links: [
      {
        name: "GetHint",
        url: "https://www.gethint.se/"
      }
    ],
    keywords: [
      "Economy",
      "AI",
      "Swift",
      "iOS",
      "watchOS"
    ],
    team: null,
    pictures: null
  },
  {
    active: false,
    role: "iOS Developer",
    description: "Bokus has entered the booming industry of audiobooks with a brand new app. Mainly responsible for implementing the design and user experience in the first version.",
    cover: require('./projects/bokus/cover.jpg'),
    product: {
      name: "Bokus Play",
      description: "",
      logo: require('./projects/bokus/logo.png')
    },
    links: [
      {
        name: "Play",
        url: "https://www.bokus.com/play",
      },
      {
        name: "Bokus",
        url: "https://www.bokus.com/",
      },
      {
        name: "BBH Stockholm",
        url: "https://www.bbhstockholm.se",
      }
    ],
    keywords: [
      "Books",
      "Audio",
      "Swift",
      "iOS"
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
    product: {
      name: "MAÎTRES",
      description: "",
      logo: require('./projects/maitres/logo.png')
    },
    links: [
      {
        name: "Maîtres",
        url: "https://www.maitres.com/",
      },
      {
        name: "BBH Stockholm",
        url: "https://www.bbhstockholm.se/work/maitres",
      }
    ],
    keywords: [
      "Dining",
      "GPS",
      "Automation",
      "Swift",
      "iOS"
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
    product: {
      name: "Bamseklubben",
      description: "",
      logo: require('./projects/tui/logo.png')
    },
    links: [
      {
        name: "TUI",
        url: "https://www.tui.se/bamse/"
      },
      {
        name: "BBH Stockholm",
        url: "https://www.bbhstockholm.se/",
      }
    ],
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
    product: {
      name: "Dashl",
      description: "",
      logo: require('./projects/dashl/logo.png')
    },
    links: [
      {
        name: "Dashl",
        url: "https://dashl.se/"
      },
      {
        name: "BREAKIT",
        url: "https://www.breakit.se/artikel/21356/h-m-i-och-cristina-stenbeck-investerar-i-dashl"
      }
    ],
    keywords: [
      "Beauty",
      "Prototype",
      "Swift",
      "iOS"
    ],
    team: [
      {
        name: "Adam Lindfors",
        role: "Designer"
      }
    ],
    pictures: null
  }
  // {
  //   active: false,
  //   role: "iOS Developer",
  //   description: "The Activist-program was made to create jobs by making loyal customers employees of Rebtel. With an office in their hand the Rebtel Activist can sign up new customers directly in the app.",
  //   cover: require('./projects/rebtel/cover.jpg'),
  //   product: {
  //     name: "Activist",
  //     description: "",
  //     logo: require('./projects/rebtel/logo.png')
  //   },
  //   links: [
  //     {
  //       name: "Rebtel",
  //       url: "https://www.rebtel.com/"
  //     },
  //     {
  //       name: "BBH Stockholm",
  //       url: "https://www.bbhstockholm.se/"
  //     }
  //   ],
  //   keywords: [
  //     "Employment",
  //     "Tele",
  //     "Objective-C",
  //     "iOS"
  //   ],
  //   team: [
  //     {
  //       name: "Anders Frank",
  //       role: "iOS Lead"
  //     }
  //   ],
  //   pictures: null
  // },
  // {
  //   active: false,
  //   role: "iOS Developer",
  //   description: "Each person is one song and together they become a playlist. OneSong aimed to be the daily soundtrack of you and your social network. Think of it like Spotify and Instagram having a baby.",
  //   cover: require('./projects/onesong/cover.jpg'),
  //   product: {
  //     name: "OneSong",
  //     description: "",
  //     logo: require('./projects/onesong/logo.png')
  //   },
  //   links: [
  //     {
  //       name: "Frontcell",
  //       url: "http://www.frontcell.se/"
  //     },
  //     {
  //       name: "HYPEBEAST",
  //       url: "https://hypebeast.com/2015/6/onesong-music-sharing-app-combines-best-of-instagram-and-spotify"
  //     }
  //   ],
  //   keywords: [
  //     "Music",
  //     "Share",
  //     "Objective-C",
  //     "iOS"
  //   ],
  //   team: [
  //     {
  //       name: "Oscar Kockum",
  //       role: "iOS Lead"
  //     }
  //   ],
  //   pictures: null
  // }
]

export const profile = {
  description_div: <div>Dedicated mobile developer based in Stockholm. Focusing on iOS since 2012 with some experience in watchOS, Android, Unity 3D and React. This is a selection of projects I've been involved in. {<a href="https://www.bruce.app">IM WITH BRUCE</a>}</div>,
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
