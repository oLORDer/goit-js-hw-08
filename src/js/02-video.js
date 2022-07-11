import Player  from '@vimeo/player';
import throttle from 'lodash.throttle';
// const throttle = require('lodash.throttle');
const player = new Player(document.querySelector('iframe'));

function savedCurrentTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

player.on('timeupdate', throttle(savedCurrentTime, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
