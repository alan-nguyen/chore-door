let doorImage1 = document.querySelector('#door1');
let doorImage2 = document.querySelector('#door2');
let doorImage3 = document.querySelector('#door3');
const botDoorPath =
  'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath =
  'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath =
  'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath =
  'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let startButton = document.querySelector('#start');
let numClosedDoors = 3;
let currentlyPlaying = true;
