import $ from 'jquery';
import views from './views';

const handleAboutButtonClick = () => {
  $('nav').on('click', '.about-btn', (event) => {
    $('main').html(views.generateAboutPage);
  });
};

const handleProjectsButtonClick = () => {
  $('nav').on('click', '.projects-btn', (event) => {
    $('main').html(views.generateProjectsPage);
  });
};

const handleContactButtonClick = () => {
  $('nav').on('click', '.contact-btn', (event) => {
    $('main').html(views.generateContactPage);
  });
};

const handleEventListeners = () => {
  handleAboutButtonClick(),
  handleProjectsButtonClick(),
  handleContactButtonClick()
};

export default {
  handleEventListeners
}