import React, { useState } from 'react';
import Rock from './Rock';
import Paper from './Paper';
import Scissors from './Scissors';

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [round, setRound] = useState(1);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    setComputerChoice(getRandomChoice());
    setResult(getWinner(choice, computerChoice));
    updateScore();
    setRound(round + 1);
  };

  const getRandomChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const getWinner = (player, computer) => {
    // Add your logic to determine the winner based on the choices
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

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div>
        <Rock onClick={() => handlePlayerChoice('rock')} />
        <Paper onClick={() => handlePlayerChoice('paper')} />
        <Scissors onClick={() => handlePlayerChoice('scissors')} />
      </div>
      {result && <p>{result}</p>}
      {round <= 5 ? (
        <p>Round: {round}</p>
      ) : (
        <div>
          <p>Game Over!</p>
          <p>{announceWinner()}</p>
        </div>
      )}
    </div>
  );
};

export default Game;