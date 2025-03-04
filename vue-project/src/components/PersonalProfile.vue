<template>
  <div id="section1">
    <div class="navbar">
      <a href="#section2">ACADS</a>
      <a href="#section3">INTERESTS</a>
    </div>

    <div class="socials">
      <p>Add me on my socials!</p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/sondrick-frondozo-244a821b4/" target="_blank">
          <img src="/images/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/kajikkusu/?next=%2Fnyarumaa.cosplay%2F" target="_blank">
          <img src="/images/ig-icon.png" alt="Instagram" />
        </a>
        <a href="https://open.spotify.com/user/31j25ihgjsam26owo4bxryzbs364?nd=1&dlsi=744a5f2fe9014639" target="_blank">
          <img src="/images/spotify-icon.png" alt="Spotify" />
        </a>
      </div>
    </div>
  </div>

  <div id="section2">
    <div class="education-wrapper">
      <img src="/images/intro.png" alt="intro" class="education-image" />
      <div class="education-container">
        <h2>EDUCATION</h2>
        <div class="school">
          <h3>Asia Pacific College (2020-PRESENT)</h3>
          <ul>
            <li>BSIT-MI</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div id="section3" class="container">
    <div id="experience">
      <h2 class="center">IT EXPERIENCE</h2>
      <div class="two-columns">
        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>CSS, Javascript</li>
          <li>Mobile Application (Bamboo Warriors - Group Project)</li>
          <li>MySQL</li>
        </ul>
      </div>
    </div>

    <div id="hobbies-and-goals" class="container two-columns">
      <div id="hobbies">
        <h2 class="center">Hobbies & Interests</h2>
        <ul>
          <li>Novels (Omniscient Reader's Viewpoint, The Beginning After The End)</li>
          <li>Video games (Valorant, Naraka, CSGO2, Dota2, League of Legends, and any Gacha games)</li>
          <li>Music (Ado, YOASOBI)</li>
        </ul>
      </div>
      <div id="goals">
        <h2 class="center">Goals & Dreams</h2>
        <ul>
          <li>To live on my own</li>
          <li>Graduate college</li>
          <li>Learn to play the piano</li>
          <li>Find a stable job</li>
          <li>Travel to Japan</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// Vue 3 does not require `export default` when using `<script setup>`
</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  text-align: center;
  overflow-x: hidden;
  padding-top: 80px;
}

/* Navigation Bar */
.navbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 50px;
  font-size: 28px;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #562123;
}

.navbar a {
  color: #f8f7f2;
  text-decoration: none;
}

/* Sections */
#section1, #section2, #section3 {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
}

#section1 {
  background-image: url('/images/bg1.png');
}

#section2 {
  background-image: url('/images/bg2.png');
}

#section3 {
  background-image: url('/images/bg3.png'); /* Fixed typo in filename */
}

/* Social Media */
.socials {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.socials p {
  font-style: italic;
  margin-bottom: 10px;
  color: white;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-icons a img {
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
}

/* Education */
.education-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  margin: 0 auto;
}

.education-image {
  width: 60%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.education-container {
  background-color: #f8f7f2;
  color: black;
  padding: 20px;
  border-radius: 30px;
  width: 100%;
  margin-top: 7px;
}

.education-container h2 {
  margin-bottom: 20px;
  color: #562123;
}

/* IT Experience */
#experience {
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #562123;
  border-radius: 30px;
  width: 80%;
}

#experience ul {
  list-style: none;
  margin-left: 70px;
}

#experience ul li {
  margin-bottom: 10px;
}

#experience h2 {
  color: #562123;
}

/* Hobbies and Goals */
#hobbies-and-goals {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 83%;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
}

#hobbies, #goals {
  flex: 1;
  background-color: #562123;
  color: #f8f7f2;
  border-radius: 30px;
  padding: 20px;
}

#hobbies ul, #goals ul {
  list-style: none;
  padding-left: 0;
  margin-left: 40px;
}

#hobbies ul li, #goals ul li {
  margin-bottom: 10px;
}
</style>