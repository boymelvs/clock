const getSecondHand = document.querySelector(".second_hand");
const getMinuteHand = document.querySelector(".minute_hand");
const getHourHand = document.querySelector(".hour_hand");
const getLineContainer = document.querySelector(".line_container");

const createDial = () => {
   for (let i = 1; i <= 60; i++) {
      getLineContainer.innerHTML += `<div class="line tick${i}"></div>`;

      const getLine = document.querySelector(`.tick${i}`);
      i % 5 === 0 && (getLine.style.background = "red");
      getLine.style.transform = `rotate(${6 * i}deg)`;
   }
};

const setTime = () => {
   const newDate = new Date();
   const seconds = newDate.getSeconds();
   const minutes = newDate.getMinutes();
   const hours = newDate.getHours();

   const secDeg = seconds * 6 + 90;
   const minDeg = minutes * 6 + seconds / 10 + 90;
   const hourDeg = hours * 6 + minutes / 2 + 90;

   getSecondHand.style.transform = `rotate(${secDeg}deg)`;
   getMinuteHand.style.transform = `rotate(${minDeg}deg)`;
   getHourHand.style.transform = `rotate(${hourDeg}deg)`;
};

createDial();
setInterval(() => {
   setTime();
});
