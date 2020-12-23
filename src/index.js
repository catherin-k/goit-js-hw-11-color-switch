import css from "./css/styles.css";

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// console.dir(refs.body.style.backgroundColor);
// console.log(colors[randomIntegerFromInterval(0, 5)]);

const onChangeColor = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      let color = colors[randomIntegerFromInterval(0, colors.length)];
      refs.body.style.backgroundColor = color;
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
    refs.body.style.backgroundColor = " ";
  },
};

refs.startBtn.addEventListener(
  "click",
  onChangeColor.start.bind(onChangeColor),
);
refs.stopBtn.addEventListener("click", onChangeColor.stop.bind(onChangeColor));
