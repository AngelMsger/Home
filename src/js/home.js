import anime from 'animejs';
import 'particles.js';

import options from './options';

import '../css/font.css';
import '../css/style.css';

window.particlesJS('particles-js', options);

const title = document.getElementById('title');
if (title && title.innerText) {
  const letters = Array.from(title.innerText);
  const letterWrappers = [];
  letters.forEach((letter) => {
    letterWrappers.push(`<span class="letter">${letter}</span>`);
  });
  title.innerHTML = letterWrappers.join('\n');
}

async function frame(slogans, i) {
  document.getElementById('mask').innerHTML = slogans[i];
  await anime({
    targets: '#mask',
    opacity: [0, 1],
    scale: [0.2, 1],
    duration: 800,
  }).finished;
  await anime({
    targets: '#mask',
    opacity: 0,
    scale: 3,
    duration: 600,
    easing: 'easeInExpo',
    delay: 500,
  }).finished;
  const next = i + 1;
  if (next < slogans.length) {
    await frame(slogans, next);
  } else {
    const wrapper = document.getElementById('mask-wrapper');
    wrapper.parentElement.removeChild(wrapper);
  }
}

async function load() {
  const slogans = ['Dream...', 'and', 'Go!'];
  await frame(slogans, 0);
  document.body.style.backgroundColor = 'lightgray';
  anime.timeline({ loop: false })
    .add({
      targets: '#content',
      opacity: 100,
      duration: 5,
    })
    .add({
      targets: '#title>.letter',
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (_, i) => 45 * (i + 1),
    });
}

load();
