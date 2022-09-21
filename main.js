var car = document.querySelector('img');
window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    car.setAttribute('class', 'right');
  } else if (event.key === 'ArrowDown') {
    car.setAttribute('class', 'down');
  } else if (event.key === 'ArrowLeft') {
    car.setAttribute('class', 'left');
  } else if (event.key === 'ArrowUp') {
    car.setAttribute('class', 'up');
  }
});
