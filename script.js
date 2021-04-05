// Size of the game area (in px)
const GAME_AREA_WIDTH = 800;
const GAME_AREA_HEIGHT = 600;

// Change game area background to an off-white shade
const gameArea = document.querySelector(".game-area");
gameArea.style.backgroundColor = "#faf9f6";

// Size of the paddles (in px)
const PADDLE_HEIGHT = 120;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Change shape of pong ball from a square to a circle
const ball = document.querySelector(".ball");
ball.style.borderRadius = "14px";
ball.style.backgroundColor = "red";

// Get the computer paddle element
const computerPaddle = document.querySelector(".computer-paddle");

// Get the player paddle element
const playerPaddle = document.querySelector(".player-paddle");

// Handle keyboard input
function handleKeyboardInput(event) {
  if (event.key === "ArrowDown") {
    playerPaddleYPosition += 20;
  } else if (event.key === "ArrowUp") {
    playerPaddleYPosition -= 20;
  }
}

document.addEventListener("keydown", handleKeyboardInput);

// starting computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 2;

// starting player paddle y-position and y-velocity
let playerPaddleYPosition = 0;
let playerPaddleYVelocity = 2;

// Ball position and velocity
let ballXPosition = 20;
let ballYPosition = 0;
let ballXVelocity = 4;
let ballYVelocity = 2;

// Updates the pong world
function update() {
  // Updates the computer paddle position
  computerPaddleYPosition = ballYPosition - PADDLE_HEIGHT / 2;

  // stops computer paddle from going outside the game area
  if (computerPaddleYPosition > GAME_AREA_HEIGHT - PADDLE_HEIGHT) {
    computerPaddleYPosition = GAME_AREA_HEIGHT - PADDLE_HEIGHT;
  } else if (computerPaddleYPosition < 0) {
    computerPaddleYPosition = 0;
  }

  // stops player paddle from going outside the game area
  if (playerPaddleYPosition > GAME_AREA_HEIGHT - PADDLE_HEIGHT) {
    playerPaddleYPosition = GAME_AREA_HEIGHT - PADDLE_HEIGHT;
  } else if (playerPaddleYPosition < 0) {
    playerPaddleYPosition = 0;
  }

  // Updates the ball position
  ballXPosition = ballXPosition + ballXVelocity;
  ballYPosition = ballYPosition + ballYVelocity;

  // **Hints:**
  // - To make the ball bounce off of a left or right wall, reverse its x-velocity (multiply by -1)
  // - To make the ball bounce off of a top or bottom wall, reverse its y-velocity (multiply by -1)
  if (ballYPosition > GAME_AREA_HEIGHT - BALL_SIZE) {
    ballYVelocity = ballYVelocity * -1;
  } else if (ballYPosition === 0) {
    ballYVelocity = ballYVelocity * -1;
  }

  if (
    ballXPosition > GAME_AREA_WIDTH - PADDLE_WIDTH * 2 &&
    ballYPosition > computerPaddleYPosition &&
    ballYPosition < computerPaddleYPosition + PADDLE_HEIGHT
  ) {
    ballXVelocity = ballXVelocity * -1;
  } else if (
    ballXPosition <= PADDLE_WIDTH &&
    ballYPosition > playerPaddleYPosition &&
    ballYPosition < playerPaddleYPosition + PADDLE_HEIGHT
  ) {
    ballXVelocity = ballXVelocity * -1;
  } else if (
    ballXPosition > GAME_AREA_WIDTH - PADDLE_WIDTH * 2 ||
    ballXPosition <= PADDLE_WIDTH
  ) {
    ballXPosition = 20;
    ballYPosition = 0;
    ballXVelocity = 5;
    ballYVelocity = 5;
    ballXPosition = ballXPosition + ballXVelocity;
    ballYPosition = ballYPosition + ballYVelocity;
  }

  // Apply positions
  computerPaddle.style.top = `${computerPaddleYPosition}px`;
  playerPaddle.style.top = `${playerPaddleYPosition}px`;
  ball.style.left = `${ballXPosition}px`;
  ball.style.top = `${ballYPosition}px`;
}

// Call the update() function every time the browser is ready to re-render
function loop() {
  update();
  window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
