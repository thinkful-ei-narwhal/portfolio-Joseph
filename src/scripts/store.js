import cuid from 'cuid';

let projects = [
  {
    id: cuid(),
    image: {
      imgSrc: 'https://ibb.co/WsZYfVL',
      imgAlt: 'World Quiz App Preview'
    },
    title: 'World Quiz App',
    description: 'This is a simple quiz game where you try to guess the capital of each of the countries listed! This app was made to demonstrate building an interactive app that takes inputs from the user and validates those inputs, while keeping track of the user\'s score and a rating them based on their score at the end. Click the window button to give it a go!',
    technologies: [
      '<i class="fab fa-html5"></i>',
      '<i class="fab fa-css3-alt"></i>',
      '<i class="fab fa-js-square"></i>',
      '<i class="fab fa-git-alt"></i>'
    ],
    liveLink: 'https://thinkful-ei-narwhal.github.io/quiz-app-Joseph-Orkun/',
    repoLink: 'https://github.com/thinkful-ei-narwhal/quiz-app-Joseph-Orkun',
  },
];

export default {
  projects
}