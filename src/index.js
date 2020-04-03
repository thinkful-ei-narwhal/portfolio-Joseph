import $ from 'jquery';
import './styles/index.css';
import headshot from './img/profile-pic.png';
import quizPreview from './img/quiz-app-demo.gif';
import portfolio from './scripts/portfolio';

function main() {
  portfolio.handleEventListeners(),
  portfolio.render()
};

$(main);