import store from './store';

let project = store.projects[0];

const generateMobileAboutPage = () => {
  return `
  <header>
    <h1 class="about-header">About</h1>
    <h2 class="about-subtitle">
      Hi, I’m Joseph. I’m a full-stack developer with an itch for helping others
      fulfill something missing in their lives, whether through an app, conversation, or both!
    </h2>
  </header>
  <img src="./img/profile-pic.png" alt="Headshot of Joseph" class="headshot">
  <p class="biography">
    I’m a son of immigrants that came to this country at very young ages. Living in a busy
    city like Miami, FL and being the first person in my family to be born and raised here has
    given me a sense of gratitude and drive to push forward in anything I do in life. Before learning
    about the extent to which software development can apply, I worked in the fine dining
    industry. I greatly enjoyed seeing how happy guests would be when they tried their meal for the
    first time! Dealing with people worth thousands of dollars, and sometimes, millions of dollars,
    always had me on my A-game. Making everyone that visited feel welcome and pampered was important to me
    and I would make sure to reflect that when tending to and talking to every guest.
    I am a web developer and recent graduate of the Engineering Immersion bootcamp at Thinkful because
    I find it most satisfying to be able to think up and implement an idea from nothing. Using code to
    make something that can have an impact on even one person’s life brings me excitement. I geek out on
    making back ends work and learning new tools and techniques. When I'm not coding, I enjoy spending
    time with those who matter most to me or learning new things I didn’t know before on any topic.
    As a lifelong learner, it’s important to me to be more knowledgeable than I was yesterday; a few of the
    things I learned over the years are playing the guitar and ukulele, different ways of life across the globe,
    and how to speak Italian! 
  </p>`
}

const generateMobileProjectsPage = () => {
  return `
  <header>
    <h1 class="projects-header">Projects</h1>
  </header>
  <ul class="projects-list">
    <li class="project-item">
      <img src="./img/quiz-app.png" alt="World Quiz App Preview">
      <h2>Title</h2>
      <p>Description</p>
      <ul class="technologies">
        <li>tech1</li>
      </ul>
      <a href="#">Live Link</a>
      <a href="#">Repo Link</a>
    </li>
  </ul>`
}

const generateMobileContactPage = () => {
  return `
  <header>
    <h1 class="contact-header">Let's get in touch!</h1>
  </header>
  <form action="#" class="contact-form">
    <legend>Contact Me</legend>
    <label for="full-name">Full Name</label>
    <input type="text" id="full-name" name="contact" placeholder="Type here..." required>
    <label for="email">Email Address</label>
    <input type="email" id="email" name="contact" required>
    <label for="message">Type a message</label>
    <textarea id="message" name="contact" cols="30" rows="10" style="resize: none;"></textarea>
    <button>
      <span>Send Message</span>
    </button>
  </form>`
}

export default {
  generateMobileAboutPage,
  generateMobileProjectsPage,
  generateMobileContactPage
}