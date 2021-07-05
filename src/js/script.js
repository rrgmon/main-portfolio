'use strict';

// Projects card hover
const cardEl = document.getElementsByClassName('card');
const cardPopEl = document.getElementsByClassName('card-pop');

(function cardPopAdd() {
  for (let i = 0; i < cardEl.length; i++) {
    cardEl[i].addEventListener('mouseover', () => {
      cardPopEl[i].classList.add('card-pop-display');
    });

    cardEl[i].addEventListener('mouseout', () => {
      cardPopEl[i].classList.remove('card-pop-display');
    });
  }
})();

(function cardPopRemove() {
  for (let i = 0; i < cardEl.length; i++) {
    cardEl[i].removeEventListener('mouseover', () => {
      cardPopEl[i].classList.add('card-pop-display');
    });

    cardEl[i].removeEventListener('mouseout', () => {
      cardPopEl[i].classList.remove('card-pop-display');
    });
  }
})();

// Day text generator

const dayTextEl = document.querySelector('.current-day');
let date = new Date();
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
let currentDay = date.getDay();
dayTextEl.textContent = days[currentDay];
