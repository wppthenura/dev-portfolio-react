import React, { useEffect, useState } from 'react';
import './SnakeGame.css';

const gridSize = 10;
const initialSnake = [[0, 0]];
const directions = {
  ArrowUp: [-1, 0],
  ArrowDown: [1, 0],
  ArrowLeft: [0, -1],
  ArrowRight: [0, 1],
};

const getRandomFood = () => [
  Math.floor(Math.random() * gridSize),
  Math.floor(Math.random() * gridSize)
];

const SnakeGame = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(getRandomFood());
  const [direction, setDirection] = useState([0, 1]);
  const [gameOver, setGameOver] = useState(false);

  const moveSnake = () => {
    const newHead = [
      snake[0][0] + direction[0],
      snake[0][1] + direction[1]
    ];

    // Check collision
    if (
      newHead[0] < 0 || newHead[0] >= gridSize ||
      newHead[1] < 0 || newHead[1] >= gridSize ||
      snake.some(seg => seg[0] === newHead[0] && seg[1] === newHead[1])
    ) {
      setGameOver(true);
      return;
    }

    const newSnake = [newHead, ...snake];
    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood(getRandomFood());
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newDir = directions[e.key];
      if (newDir) setDirection(newDir);
    };

    window.addEventListener('keydown', handleKeyDown);

    const interval = setInterval(() => {
      if (!gameOver) moveSnake();
    }, 200);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(interval);
    };
  });

  return (
    <div className="snake-container">
      {gameOver && <div className="game-over">Game Over 😵</div>}
      <div className="grid">
        {[...Array(gridSize)].map((_, row) =>
          [...Array(gridSize)].map((_, col) => {
            const isSnake = snake.some(seg => seg[0] === row && seg[1] === col);
            const isFood = food[0] === row && food[1] === col;
            return (
              <div
                key={`${row}-${col}`}
                className={`cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : ''}`}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default SnakeGame;
