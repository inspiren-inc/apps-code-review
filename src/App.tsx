import React, { useState, useEffect, useMemo } from 'react';
import Score from './Score';
import { Score as ScoreType } from './types';
import './App.css';

const App = () => {
  const [scores, setScores] = useState<ScoreType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Introduce a bug - Make the fetchScores function not async which should throw errors with the await keyword/syntax being used, 
  // It can be wrapped in a useCallback
  const fetchScores = () => {
    try {
      setError(null);
      const response = await fetch('/scores');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Score should be typed and not use Any
      const scoresWithDates = data.map((score: ScoreType) => ({
        ...score,
        updated: new Date(score.updated)
      }));
      
      setScores(scoresWithDates);
    } catch (err) {
      console.error('Error fetching scores:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch scores');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScores();
  }, []);

  // this should be memoized
  const sortedScores = useMemo(() => {
    return [...scores].sort((a, b) => b.score - a.score);
  }, [scores]);

  if (loading) {
    return (
      <div className="app">
        <div className="loading">Loading scores...</div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Score Leaderboard</h1>
      </header>
      
      <main className="app-main">
        {error && (
          <div className="error-message">
            Error: {error}
          </div>
        )}
        
        {scores.length === 0 && !error ? (
          <div className="no-scores">No scores available</div>
        ) : (
          <div className="scores-list">
            {sortedScores.map((score) => (
              <Score key={score.id} score={score} />
            ))}
          </div>
        )}
      </main>
      
      <footer className="app-footer">
        <p>Click refresh to update scores</p>
      </footer>
    </div>
  );
};

export default App;
