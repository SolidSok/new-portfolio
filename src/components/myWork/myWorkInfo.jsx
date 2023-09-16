const myWork = [
  {
    urlParams: 'rpts',
    project: 'Riverbank Poker Tournament Series',
    images: [
      'assets/riverbank/RBTourn1.jpg',
      'assets/riverbank/riverbank2.jpg',
    ],
    purpose: [
      'Volunteer project for a local community. Displays information for rankings and tournament dates for a summer series poker tournament.',
      'This project takes in weekly tournament data to automatically rank and displaya the accumulated results.',
    ],
    techStack: [
      'This project uses React, and React-Bootstrap. It was created using Vite.',
    ],
    devProcess: {
      process:
        'This project started as a simple volunteer project for fun. Initially, everything was input manually. However, as the weeks went on, it became more work to manually adjust the rankings and points. I had to create an algorithm to automate the process. First I created a data set made up of an array of objects. Each object consists of a week, and the player scores for that week. I simply have to create a new object each time a new tournament happens, and it will update the final rankings automatically.',
      methods:
        'The algorithm first creates a new array to add the data to. It uses arr.push to add all the player scores. It then goes through the new array with an arr.reduce to cut any repeat names, and accumulate their points. It then does an arr.sort to sort from highest points to lowest. Then, in the jsx I simply use an arr.map with the new data.',
    },
    links: {
      github:
        'https://github.com/SolidSok/riverbankvillagetournaments/tree/main',
      site: 'https://riverbankvillagetournaments.netlify.app/',
    },
  },
  {
    urlParams: 'feeub',
    project: 'Fire Emblem Engage Unit Builder',
    images: ['assets/engage-builder/1.png', 'assets/engage-builder/2.png'],
    purpose: [
      'Hobby project to act as a guide for the video game "Fire Emblem Engage."',
      'This project allows users to select units and see their stats and other data would look depending on what circumstances are selected.',
    ],
    techStack: [
      'This project uses React and React-Bootstrap. It was also created using Vite.',
    ],
    devProcess: {
      process:
        "This started off as a fun idea to help me visualize how I would build certain units. There are lots of resources on the web that show this information, but they aren't very easy to understand. This application makes each character build easy to visualize by having the three most important aspects front and center. The displayed character and stats will change depending on which character, class, and emblem are selected.",

      methods:
        'The data is taken from a set of arrays in each section. The code itself is pretty straightforward. There are different views for each selection: units, classes, emblems. useState is implemented for any selection changes. The parameters passed into each view is determined by the useState. React-bootstrap is used to adjust the display depending on the screen size while also providing easy to use tools like cards and accordions.',
    },
    links: {
      github: 'https://github.com/SolidSok/fe-engage/tree/main',
      site: 'https://engagebuilder.netlify.app/',
    },
  },
  {
    urlParams: 'ec',
    project: 'Eorzean Cuisine',
    images: ['assets/eorzean-cuisine/eorzeanCuisine.png'],
    purpose: [
      'Web App to simulate a restaurant menu. Items are recipes taken from the critically acclaimed MMORPG, Final Fantasy 14.',
    ],
    techStack: [
      'Data is pulled from a database I made on MongoDB. The client was made in React, and uses a custom REST API that I made with Node and Express.',
    ],
    devProcess: {
      process:
        'I made this project shortly after finishing my Web Development course at CareerFoundry. I am a long time fan of the Final Fantasy Series, and have countless hours sunk into FF14. I wanted to create something fun that was related to it. So I went to work on creating a selection of items in MongoDB that would display a variety of cultures in the game.',
      methods:
        'Collections were made in Mongo and uploaded to MongoDB. I then made the API using Node and Express to use custom endpoints for different items. The Frontend Client is made in React and uses Axios to fetch the required data. The API was hosted on Heroku. Unfortunately, sometime after hosting it Heroku changed their free policy, and the API is no longer up and running.',
    },
    links: {
      github: 'https://github.com/SolidSok/eorzean-cuisine',
      github2: 'https://github.com/SolidSok/eorzean-cuisine-api',
      site: null,
    },
  },
  {
    urlParams: 'rnca',
    project: 'React Native Chat App',
    images: [
      'assets/chat-app/main.png',
      'assets/chat-app/2.png',
      'assets/chat-app/3.png',
    ],
    purpose: [
      'Chat app for mobile devices using React Native. The app provides users with a chat interface and options to share images and their location.',
    ],
    techStack: [
      'This project was built with React Native and Expo. Chat room data was saved in Firebase.',
    ],
    devProcess: {
      process:
        'The project started as a simple introduction into React Native. It was a pretty simple project. The most time consuming thing was testing on multiple mobile devices.',
      methods:
        'Client was made using React Native and Expo. It is a pretty straightforward app that consists of the iniitial page and the chat room. Data is stored on Firebase. It authenticates the mobile device using it and lets you change your avatar and background theme.',
    },
    links: { github: 'https://github.com/SolidSok/chat-app', site: null },
  },
  {
    urlParams: 'portfolio',
    project: 'Portfolio',
    images: ['assets/portfolio.png'],
    purpose: [
      "Portfolio to display some of my work. Hopefully it leaves a good impression. Otherwise, I'm happy to receive criticism!",
    ],
    techStack: ['This app is built in React. It was created using Vite.'],
    devProcess: {
      process:
        "This portfolio has undergone a few redesigns. It started as something lazy, but I've learned to put more effort into things since its creation.",
      methods: '',
    },
    links: { github: '', site: '' },
  },
];

export default myWork;
