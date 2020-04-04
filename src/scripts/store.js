import cuid from 'cuid';

let projects = [
  {
    id: cuid(),
    image: {
      imgSrc: 'https://i.ibb.co/52mfLKP/quiz-app-demo.gif',
      imgAlt: 'World Quiz App Preview'
    },
    title: 'World Quiz App',
    description: 'This project was made for anyone, from kids to adults, that loves quiz games and who are looking to test their knowledge on world capitals! The app guides you through a series of questions and gives you multiple choices to pick from. If you get an answer wrong or right, you\'ll be given the appropriate response and your score will be kept to let you know how well you\'re doing. I built this app to test my knowledge on how to make a modular, interactive web app using JavaScript and jQuery. Click the window button to give it a go!',
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