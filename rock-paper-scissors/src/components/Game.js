import React, { useState } from 'react';
import Rock from './Rock';
import Paper from './Paper';
import Scissors from './Scissors';
import './Game.css'; // Import the CSS file

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);//
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [round, setRound] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handlePlayerChoice = (choice) => {
    if (gameOver) {
      return; // Disable player choice if the game is over
    }
    setPlayerChoice(choice);
    setComputerChoice(getRandomChoice());
    setResult(getWinner(choice, computerChoice));
    updateScore();
    setRound(round + 1);
    if (round === 4) {
      setGameOver(true); // Set game over when the last round is reached
    }
  };

  const getRandomChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const getWinner = (player, computer) => {
    if (player === computer) {
      return 'It\'s a tie!';
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'Player wins!';
    } else {
      return 'Computer wins!';
    }
  };

  const updateScore = () => {
    if (result === 'Player wins!') {
      setPlayerScore(playerScore + 1);
    } else if (result === 'Computer wins!') {
      setComputerScore(computerScore + 1);
    }
  };

  const announceWinner = () => {
    if (playerScore > computerScore) {
      return 'Player wins the game!';
    } else if (computerScore > playerScore) {
      return 'Computer wins the game!';
    } else {
      return 'It\'s a tie!';
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setRound(0);
    setPlayerScore(0);
    setComputerScore(0);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <h1>Rock Paper Scissors</h1>
      <div className="choices-container">
        <Rock onClick={() => handlePlayerChoice('rock')} />
        <Paper onClick={() => handlePlayerChoice('paper')} />
        <Scissors onClick={() => handlePlayerChoice('scissors')} />
      </div>
      {result && (
        <p className="result">
          Round {round}: {result}
        </p>
      )}
      {gameOver ? (
        <div>
          <p>Game Over!</p>
          <p>{announceWinner()}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      ) : (
        <p>Round: {round}</p>
      )}
    </div>
  );
};

export default Game;