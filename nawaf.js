const upButton = document.getElementById('up');
const leftButton = document.getElementById('left');
const startButton = document.getElementById('start');
const rightButton = document.getElementById('right');
const downButton = document.getElementById('down');
const stopButton = document.getElementById('stop');
const robotArm = document.querySelector('.robot-arm');

upButton.addEventListener('click', () => {
  robotArm.style.transform = 'rotate(-45deg)';
});

leftButton.addEventListener('click', () => {
  robotArm.style.transform = 'rotate(-90deg)';
});

startButton.addEventListener('click', () => {
  robotArm.style.transform = 'rotate(0deg)';
});

rightButton.addEventListener('click', () => {
  robotArm.style.transform = 'rotate(90deg)';
});

downButton.addEventListener('click', () => {
  robotArm.style.transform = 'rotate(45deg)';
});

stopButton.addEventListener('click', () => {
  robotArm.style.transform = 'rotate(0deg)';
});