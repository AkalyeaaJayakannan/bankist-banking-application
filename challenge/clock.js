'use strict';
console.log('hey');

const hourEl = document.querySelector('.hours');
const minEl = document.querySelector('.minutes');
const secEl = document.querySelector('.seconds');
const dateEl = document.querySelector('.date');

const displayTimeDate = () => {
  // // getting the time using date method
  // const date = new Date();
  // const hour = date.getHours();
  // const minutes = date.getMinutes();
  // const seconds = date.getSeconds();
  // const day = date.getDate();
  // const month = date.getMonth() + 1;
  // const year = date.getFullYear();

  // hourEl.textContent = hour;
  // minEl.textContent = minutes;
  // secEl.textContent = seconds;
  // dateEl.textContent = `${day} / ${month} / ${year}`;

  // console.log(hour, minutes, seconds);
  // console.log(day, month, year);

  // // getting the date using Intl API
  // const date = new Intl.DateTimeFormat('en-UK', {
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   second: '2-digit',
  //   date: '2-digit',
  //   month: '2-digit',
  //   year: 'numeric',
  // }).format();

  hourEl.textContent = new Intl.DateTimeFormat('en-UK', {
    hour: '2-digit',
  }).format();
  minEl.textContent = new Intl.DateTimeFormat('en-UK', {
    minute: '2-digit',
  }).format();
  secEl.textContent = new Intl.DateTimeFormat('en-UK', {
    second: '2-digit',
  }).format();
  dateEl.textContent = new Intl.DateTimeFormat('en-UK', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format();
};

setInterval(displayTimeDate, 1000);
