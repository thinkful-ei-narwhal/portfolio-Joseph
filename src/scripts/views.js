import store from './store';

let project = store.projects[0];

const generateListItemsString = (techList) => {
  const tech = techList.map(item => generateListItem(item));
  return tech.join("");
};

const generateListItem = (item) => {
  return `<li>${item}</li>`;
};

const generateAboutPage = () => {
  return `
  <section role="region" class="content-section">
    <header>
      <h1 class="about-header">About</h1>
      <h2 class="about-subtitle">
        Hi, I’m Joseph. I’m a full-stack developer with an itch for helping others
        fulfill something missing in their lives, whether through an app, conversation, or both!
      </h2>
    </header>
    <img src="https://i.ibb.co/zhxKyvy/profile-pic.png" alt="Headshot of Joseph" class="headshot">
    <p class="biography">
      I’m a son of immigrants that came to this country at very young ages. Living in a busy
      city like Miami, FL and being the first person in my family to be born and raised here has
      given me a sense of gratitude and drive to push forward in anything I do in life.<br><br>Before learning
      about the extent to which software development can apply, I worked in the fine dining
      industry. I greatly enjoyed seeing how happy guests would be when they tried their meal for the
      first time! Dealing with people worth thousands of dollars, and sometimes, millions of dollars,
      always had me on my A-game. Making everyone that visited feel welcome and pampered was important to me
      and I would make sure to reflect that when tending to and talking to every guest.
      <br><br>I am a web developer and recent graduate of the Engineering Immersion bootcamp at Thinkful because
      I find it most satisfying to be able to think up and implement an idea from nothing. Using code to
      make something that can have an impact on even one person’s life brings me excitement. I geek out on
      making back ends work and learning new tools and techniques. When I'm not coding, I enjoy spending
      time with those who matter most to me or learning new things I didn’t know before on any topic.
      As a lifelong learner, it’s important to me to be more knowledgeable than I was yesterday; a few of the
      things I learned over the years are playing the guitar and ukulele, different ways of life across the globe,
      and how to speak Italian! 
    </p>
  </section>
  <footer role="contentinfo" class="mobile-footer">
    <a href="https://github.com/antonibrivera" target="_blank"><i class="fa fa-github"></i></a>
    <a href="https://www.linkedin.com/in/antonibrivera/" target="_blank"><i class="fa fa-linkedin"></i></a>
    <a href="mailto:antonibrivera@gmail.com" target="_blank"><i class="fa fa-envelope-open"></i></a>
  </footer>`
};

const generateProjectItem = (item) => {
  return `
  <li class="project-item">
    <img src="${item.image.imgSrc}" alt="${item.image.imgAlt}" class="app-preview">
    <h2>${item.title}</h2>
    <p>${item.description}</p>
    <ul class="technologies">
      ${generateListItemsString(item.technologies)}
    </ul>
    <div class="github-links">
      <a href="${item.liveLink}" target="_blank"><i class="fa fa-window-maximize"></i></a>
      <a href="${item.repoLink}" target="_blank"><i class="fa fa-github-square"></i></a>
    </div>
  </li>`
};

const generateProjectsPage = () => {
  return `
  <section role="region" class="content-section">
    <header>
      <h1 class="projects-header">Projects</h1>
      <p class="projects-subtitle">Here a list of the projects I'm most proud of! Feel free to visit the GitHub Repo and the Live Site with the links in the bottom right corner.</p>
    </header>
    <ul class="projects-list">
      ${generateProjectItem(project)}
    </ul>
    <p class="coming-soon">More projects on the way!</p>
  </section>
  <footer role="contentinfo" class="mobile-footer">
    <a href="https://github.com/antonibrivera" target="_blank"><i class="fa fa-github"></i></a>
    <a href="https://www.linkedin.com/in/antonibrivera/" target="_blank"><i class="fa fa-linkedin"></i></a>
    <a href="mailto:antonibrivera@gmail.com" target="_blank"><i class="fa fa-envelope-open"></i></a>
  </footer>`
};

const generateContactPage = () => {
  return `
  <section role="region" class="content-section">
    <header class="contact-header">
      <h1 class="contact-title">Let's get in touch!</h1>
      <p class="contact-subtitle">Email me directly at <a href="mailto:antonibrivera@gmail.com" target="_blank">antonibrivera@gmail.com</a> or send me a message below!</p>
    </header>
    <form action="#" class="contact-form">
      <legend>Contact Me</legend>
      <label for="full-name">Full Name</label>
      <input type="text" id="full-name" name="contact" placeholder="Type here..." required>
      <label for="email">Email Address</label>
      <input type="email" id="email" name="contact" placeholder="Enter email address..." required>
      <label for="message">Type a message</label>
      <textarea id="message" name="contact" cols="30" rows="10" style="resize: none;" placeholder="Enter a brief message..." required></textarea>
      <button>Send Message</button>
    </form>
  </section>
  <footer role="contentinfo" class="mobile-footer">
    <a href="https://github.com/antonibrivera" target="_blank"><i class="fa fa-github"></i></a>
    <a href="https://www.linkedin.com/in/antonibrivera/" target="_blank"><i class="fa fa-linkedin"></i></a>
    <a href="mailto:antonibrivera@gmail.com" target="_blank"><i class="fa fa-envelope-open"></i></a>
  </footer>`
};

export default {
  generateAboutPage,
  generateProjectsPage,
  generateContactPage
};