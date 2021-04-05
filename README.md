# Pong!

> We're building the classic video game, Pong!

In this assignment, you will be working entirely within the `main.js` file.

## Task

Open `index.html` and notice how the right paddle is moving automatically.

Your task is to bring the game one step closer to completion by making the green
ball bounce around the screen.

To do this, read through the code that makes the paddle on the right (referred to as the 'computer paddle')
move. Use this code as inspiration for the code that you write to move the ball.

**Hints:**

- To make the ball bounce off of a left or right wall, reverse its x-velocity (multiply by -1)
- To make the ball bounce off of a top or bottom wall, reverse its y-velocity (multiply by -1)

## Reach tasks

- Make the ball bounce off the paddles
- Make the ball NOT bounce off the left and right walls, instead when the ball hits the left or right wall,
  reset its position to somewhere in the middle
- Make the computer paddle (the right paddle) track the ball's position and always deflect the ball
- Make the left paddle's position controllable through keyboard presses. But how do you know when the user presses a key? You can read about that [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)!
