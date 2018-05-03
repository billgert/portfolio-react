import React from 'react'

export const projects = [
  {
    id: 0,
    active: true,
    role: "Mobile Lead",
    description: "Working on a new service called Hint that soon will live in your pocket. As one of the first developers I'm excited to work with great people to create something we truly believe in.",
    cover: require('./projects/hint/cover.jpg'),
    company: {
      name: "Hint AB",
      logo: require('./projects/hint/logo.png')
    },
    product: {
      name: "Hint",
      description: "",
      website: "https://www.gethint.se/",
      logo: require('./projects/hint/logo.png')
    },
    platforms: [
      {
        name: "iOS",
        ide: "Xcode",
        language: "Swift"
      }
    ],
    team: null,
    pictures: null
  },
  {
    id: 1,
    active: false,
    role: "iOS Developer",
    description: "Bokus has entered the booming industry of audiobooks with a brand new app. Mainly responsible for the player and the explore section.",
    cover: require('./projects/bokus/cover.jpg'),
    company: {
      name: "Bokus AB",
      logo: require('./projects/bokus/logo.png')
    },
    product: {
      name: "Bokus Play",
      description: "",
      website: "https://www.bokus.com/play",
      logo: ""
    },
    platforms: [
      {
        name: "iOS",
        ide: "Xcode",
        language: "Swift"
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
    company: {
      name: "Maitres AB",
      logo: require('./projects/maitres/logo.png')
    },
    product: {
      name: "MAÎTRES",
      description: "",
      website: "https://www.maitres.com/",
      logo: require('./projects/maitres/logo.png')
    },
    platforms: [
      {
        name: "iOS",
        ide: "Xcode",
        language: "Swift"
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
    company: {
      name: "Tuifly Nordic AB",
      logo: require('./projects/tui/logo.png')
    },
    product: {
      name: "Bamseklubben",
      description: "",
      website: "https://www.tui.se/bamse/",
      logo: ""
    },
    platforms: [
      {
        name: "iOS",
        ide: "Unity 3D",
        language: "C#"
      },
      {
        name: "Android",
        ide: "Unity 3D",
        language: "C#"
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
      }
    ],
    pictures: null
  },
  {
    id: 4,
    active: false,
    role: "iOS Developer",
    description: "The Activist-program was made to create jobs by making loyal customers employees of Rebtel. With an office in their hand the Rebtel Activist can sign up new customers directly in the app.",
    cover: require('./projects/rebtel/cover.jpg'),
    company: {
      name: "Rebtel AB",
      logo: require('./projects/rebtel/logo.png')
    },
    product: {
      name: "Rebtel Activist",
      description: "",
      website: "https://www.rebtel.com/en/partners/activist/",
      logo: ""
    },
    platforms: [
      {
        name: "iOS",
        ide: "Xcode",
        language: "Objective-C"
      }
    ],
    team: [
      {
        name: "Anders Frank",
        role: "iOS Lead"
      }
    ],
    pictures: null
  }
]

export const profile = {
  "description_div": <div>I'm a passionate mobile developer with love for Apple. Working at {<a href="https://www.gethint.se/">Hint</a>} to make way for an emerging industry we like to call think-tech.</div>,
  "links": [
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
