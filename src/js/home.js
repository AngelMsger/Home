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

// Fixme: Repace this with CSS.
const offset = `${window.screen.availHeight / 2 - 128}px`;
document.getElementById('frame-1').style.top = offset;
document.getElementById('frame-2').style.top = offset;
document.getElementById('frame-3').style.top = offset;

const frames = {
  opacityIn: [0, 1],
  scaleIn: [0.2, 1],
  scaleOut: 3,
  durationIn: 800,
  durationOut: 600,
  delay: 500,
};

anime.timeline({ loop: false })
  .add({
    targets: '#frame-1',
    opacity: frames.opacityIn,
    scale: frames.scaleIn,
    duration: frames.durationIn,
  }).add({
    targets: '#frame-1',
    opacity: 0,
    scale: frames.scaleOut,
    duration: frames.durationOut,
    easing: 'easeInExpo',
    delay: frames.delay,
  }).add({
    targets: '#frame-2',
    opacity: frames.opacityIn,
    scale: frames.scaleIn,
    duration: frames.durationIn,
  })
  .add({
    targets: '#frame-2',
    opacity: 0,
    scale: frames.scaleOut,
    duration: frames.durationOut,
    easing: 'easeInExpo',
    delay: frames.delay,
  })
  .add({
    targets: '#frame-3',
    opacity: frames.opacityIn,
    scale: frames.scaleIn,
    duration: frames.durationIn,
  })
  .add({
    targets: '#frame-3',
    opacity: 0,
    scale: frames.scaleOut,
    duration: frames.durationOut,
    easing: 'easeInExpo',
    delay: frames.delay,
  })
  .add({
    targets: '#frames',
    opacity: 0,
    duration: 5,
  })
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
    delay: (el, i) => 45 * (i + 1),
  });
