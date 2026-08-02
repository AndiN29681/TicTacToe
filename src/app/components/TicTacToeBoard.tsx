'use client';

import { useState } from 'react';

// Gewinnmuster: alle möglichen Gewinnkombinationen
const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Reihen
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Spalten
  [0, 4, 8], [2, 4, 6],            // Diagonalen
];

export default function TicTacToeBoard() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  // Prüft, ob es einen Gewinner gibt
  const checkWinner = (currentBoard: string[]) => {
    for (const [a, b, c] of WIN_PATTERNS) {
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const winner = checkWinner(board);
  const isDraw = !board.includes('') && !winner;

  // Verarbeitet einen Spielzug
  const handleMove = (index: number) => {
    if (board[index] !== '' || winner || isDraw) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(prev => (prev === 'X' ? 'O' : 'X'));
  };

  // Setzt das Spiel zurück
  const handleReset = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
  };

  // Bestimmt den Status-Text
  const getStatusText = () => {
    if (winner) return `${winner} hat gewonnen! 🎉`;
    if (isDraw) return 'Unentschieden! 🤝';
    return `Aktueller Spieler: ${currentPlayer}`;
  };

  // Bestimmt die Farbe für den Status
  const getStatusColor = () => {
    if (winner) return winner === 'X' ? 'text-red-600' : 'text-blue-600';
    return 'text-gray-600';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-2">Tic-Tac-Toe</h1>

      <div
        className="mb-4 text-xl font-semibold"
        role="status"
        aria-live="polite"
      >
        {getStatusText()}
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleMove(index)}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-4xl sm:text-5xl md:text-6xl font-bold rounded-lg bg-white border-2 border-gray-300 hover:bg-gray-50 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: cell === 'X' ? '#fecaca' : cell === 'O' ? '#cffafe' : '#ffffff',
            }}
            aria-label={
              cell === ''
                ? `Leeres Feld, Reihe ${Math.floor(index / 3) + 1}, Spalte ${index % 3 + 1}`
                : `Feld mit ${cell}, Reihe ${Math.floor(index / 3) + 1}, Spalte ${index % 3 + 1}`
            }
            disabled={board[index] !== '' || !!winner || isDraw}
          >
            {cell}
          </button>
        ))}
      </div>

      <button
        onClick={handleReset}
        className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all duration-200"
        aria-label="Spiel zurücksetzen"
      >
        Spiel zurücksetzen
      </button>
    </div>
  );
}