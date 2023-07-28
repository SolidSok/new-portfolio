import React from 'react';

export default function MyWork() {
  return [
    {
      project: 'Riverbank Seniors Poker Tournament',
      purpose: [
        'Volunteer project for a local community. Displays information for rankings and tournament dates for a summer series poker tournament.',
        'This project takes in weekly tournament data to automatically rank and displaya the accumulated results.',
      ],
      techStack: [
        'This project uses React, and React-Bootstrap. It was created using Vite.',
      ],
      devProcess: [
        {
          process:
            'This project started as a simple volunteer project for fun. Initially, everything was input manually. However, as the weeks went on, it became more work to manually adjust the rankings and points. I had to create an algorithm to automate the process. First I created a data set made up of an array of objects. Each object consists of a week, and the player scores for that week. I simply have to create a new object each time a new tournament happens, and it will update the final rankings automatically.',
        },
        {
          methods:
            'The algorithm first creates a new array to add the data to. It uses arr.push to add all the player scores. It then goes through the new array with an arr.reduce to cut any repeat names, and accumulate their points. It then does an arr.sort to sort from highest points to lowest. Then, in the jsx I simply use an arr.map with the new data.',
        },
      ],
      links: [
        {
          github:
            'https://github.com/SolidSok/riverbankvillagetournaments/tree/main',
          site: 'https://riverbankvillagetournaments.netlify.app/',
        },
      ],
    },
    {
      project: 'Fire Emblem Engage Unit Builder',
      purpose: [
        'Hobby project to act as a guide for the video game "Fire Emblem Engage."',
        'This project allows users to select units and see their stats and other data would look depending on what circumstances are selected.',
      ],
      techStack: [
        'This project uses React and React-Bootstrap. It was also created using Vite.',
      ],
      devProcess: [
        {
          process:
            "This started off as a fun idea to help me visualize how I would build certain units. There are lots of resources on the web that show this information, but they aren't very easy to understand. This application makes each character build easy to visualize by having the three most important aspects front and center. The displayed character and stats will change depending on which character, class, and emblem are selected.",
        },
        {
          methods:
            'The data is taken from a set of arrays in each section. The code itself is pretty straightforward. There are different views for each selection: units, classes, emblems. useState is implemented for any selection changes. The parameters passed into each view is determined by the useState. React-bootstrap is used to adjust the display depending on the screen size while also providing easy to use tools like cards and accordions.',
        },
      ],
      links: [
        {
          github: 'https://github.com/SolidSok/fe-engage/tree/main',
          site: 'https://engagebuilder.netlify.app/',
        },
      ],
    },
    {
      project: '',
      purpose: [],
      techStack: [],
      devProcess: [],
      links: [{ github: '', site: '' }],
    },
    {
      project: '',
      purpose: [],
      techStack: [],
      devProcess: [],
      links: [{ github: '', site: '' }],
    },
    {
      project: '',
      purpose: [],
      techStack: [],
      devProcess: [],
      links: [{ github: '', site: '' }],
    },
  ];
}
