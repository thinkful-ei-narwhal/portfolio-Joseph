import store from './store';

const generateAboutPage = () => {
  return `
  <section role="region" class="about-section">
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
      </p>
    </section>`
}

const generateProjectsPage = () => {

}

const generateContactPage = () => {

}

export default {
  generateAboutPage,
  generateProjectsPage,
  generateContactPage
}