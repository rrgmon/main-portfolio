'use strict';

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
