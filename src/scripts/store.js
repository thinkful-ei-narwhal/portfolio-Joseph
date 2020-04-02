import cuid from 'cuid';

let projects = [
  {
    id: cuid(),
    title: 'World Quiz App',
    description: 'This is a simple quiz game where you try to guess the capital of each of the countries listed. This demonstrates taking inputs from the user and being able to tell if the answer given is right or wrong, with the appropriate prompt given to the user in response.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery',
      'Webpack',
      'Git & GitHub'
    ],
    liveLink: 'https://thinkful-ei-narwhal.github.io/quiz-app-Joseph-Orkun/',
    repoLink: 'https://github.com/thinkful-ei-narwhal/quiz-app-Joseph-Orkun',
  },
];

export default {
  projects
}