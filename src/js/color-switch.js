const colors = [
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#2dc937',
  '#99c140',
  '#e7b416',
  '#db7b2b',
  '#cc3232',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const bodyEl = document.querySelector('body');
let intervalId = '';
stopBtn.disabled = true;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

const switcher = () => {
  bodyEl.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartBtnClick() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  intervalId = setInterval(switcher, 1000);
}

function onStopBtnClick() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(intervalId);
}
