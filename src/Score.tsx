import React from 'react';
import { Score as ScoreType } from './types';
import './Score.css';

interface ScoreProps {
  score: ScoreType;
}

// Nit> React.FC is kind of unnecessary and should be removed as it makes the code more readable
const Score = ({ score } : ScoreProps) => {
  return (
    <div className="score-item">
      <div className="score-name">{score.name}</div>
      <div className="score-value">{score.score}</div>
    </div>
  );
};

export default Score;
