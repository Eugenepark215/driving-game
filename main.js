var car = document.querySelector('img');
var interval = setInterval(moveCar, 16);
clearInterval(interval);
car.move = false;
window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    car.setAttribute('class', 'right');
  } else if (event.key === 'ArrowDown') {
    car.setAttribute('class', 'down');
  } else if (event.key === 'ArrowLeft') {
    car.setAttribute('class', 'left');
  } else if (event.key === 'ArrowUp') {
    car.setAttribute('class', 'up');
  } else if (event.code === 'Space' && car.move === false) {
    car.move = true;
    interval = setInterval(moveCar, 16);
  } else if (event.code === 'Space' && car.move === true) {
    car.move = false;
    clearInterval(interval);
  }
});

var position = 0;
function moveCar() {
  position += 10;
  car.style.left = position + 'px';
}
