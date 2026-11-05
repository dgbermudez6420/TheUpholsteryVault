'use strict';
const marquee = document.querySelector('.marquee');
if (marquee) {
  marquee.addEventListener('pointerdown', () => marquee.classList.add('touch-paused'));
  ['pointerup', 'pointercancel'].forEach(type => window.addEventListener(type, () => marquee.classList.remove('touch-paused')));
}
