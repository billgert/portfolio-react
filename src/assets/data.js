import React from 'react'

export const projects = [
  {
    active: false,
    role: "iOS Lead",
    description: "Engineering, SCRUM, Project Leadership & UI/UX Design",
    cover: require('./projects/bruce/cover.jpg'),
    product: {
      name: "BRUCE",
      company: "BRUCE",
      description: "",
      logo: require('./projects/bruce/logo.png')
    },
    links: [
      {
        name: "Bruce",
        url: "https://www.bruce.app/"
      }
    ],
    keywords: [
      "Fitness",
      "Swift",
      "CoreData"
    ],
    pictures: null
  },
  {
    active: false,
    role: "iOS Lead",
    description: "The world's first AI enabled Calculus tutor. Huge project spanning across three different timezones (New York, Denver and Stockholm). With over 40 people involved, I was part of the product team and lead the development of the iOS application from start to beta.",
    cover: require('./projects/aida/cover.jpg'),
    product: {
      name: "Aida",
      company: "Pearson",
      description: "",
      logo: require('./projects/aida/logo.png')
    },
    links: [
      {
        name: "Aida",
        url: "https://www.pearson.com/"
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
      "Swift",
      "OCR"
    ],
    pictures: null
  },
  {
    active: false,
    role: "iOS Developer",
    description: "Bokus has entered the booming industry of audiobooks with a brand new app. Mainly responsible for implementing the design and user experience in the first version.",
    cover: require('./projects/bokus/cover.jpg'),
    product: {
      name: "Bokus Play",
      company: "Bokus",
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
      "Swift",
      "AVFoundation"
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
      company: "TUI",
      description: "",
      logo: require('./projects/tui/logo.png')
    },
    links: [
      {
        name: "TUI",
        url: "https://www.tui.se/"
      },
      {
        name: "BBH Stockholm",
        url: "https://www.bbhstockholm.se/",
      }
    ],
    keywords: [
      "Kids",
      "C#",
      "Unity"
    ],
    pictures: null
  },
  {
    active: false,
    title: "Rebtel",
    role: "iOS Developer",
    description: "The Activist-program was made to create jobs by making loyal customers employees of Rebtel. With an office in their hand the Rebtel Activist can sign up new customers directly in the app.",
    cover: require('./projects/rebtel/cover.jpg'),
    product: {
      name: "Activist",
      company: "Rebtel",
      description: "",
      logo: require('./projects/rebtel/logo.png')
    },
    links: [
      {
        name: "Rebtel",
        url: "https://www.rebtel.com/"
      },
      {
        name: "BBH Stockholm",
        url: "https://www.bbhstockholm.se/"
      }
    ],
    keywords: [
      "Sales",
      "Objective-C"
    ],
    pictures: null
  },
  /*
  {
    active: false,
    role: "iOS Lead",
    description: "I helped define, design and develop a prototype app for Dashl in their early stages. Their network of stylists is now the go-to-place for beauty treatments in Stockholm.",
    cover: require('./projects/dashl/cover.jpg'),
    product: {
      name: "Dashl",
      company: "Dashl",
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
    pictures: null
  },*/
  {
    active: false,
    role: "iOS Lead",
    description: "As I have experience working in the restaurant-business this project was extra fun. MAÎTRES lets you connect with restaurants to book, pay and rate without having to wait for the bill.",
    cover: require('./projects/maitres/cover.jpg'),
    product: {
      name: "MAÎTRES",
      company: "MAÎTRES",
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
      "Restaurants",
      "Swift",
      "RxSwift"
    ],
    pictures: null
  }
]

export const profile = {
  description_div: <div>iOS Developer based in Stockholm. Since 2012 I've been developing and designing applications for the App Store. Above is a selection of some of the companies I've worked with. Find my resume, GitHub and LinkedIn below.</div>,
  links: [
    {
      "url": null,
      "logo": require('./links/pdf_file.png'),
      "filePath": require('./links/Patrik_Billgert_Resume.pdf'),
      "fileName": "Patrik_Billgert_Resume.pdf"
    },
    {
      "url": "https://github.com/billgert",
      "logo": require('./links/github.png'),
      "filePath": null,
      "fileName": null
    },
    {
      "url": "https://se.linkedin.com/in/billgert",
      "logo": require('./links/linkedin.png'),
      "filePath": null,
      "fileName": null
    }
  ]
}

export const email = "patrik@kodakoda.com"
