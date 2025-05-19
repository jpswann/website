import React, { useState, MouseEvent } from "react";
import "../../../css/connect4.css";
import { Box } from "@mui/material";

const Board: React.FC = () => {
  const columns = 7;
  const rows = 6;
  const buttons = Array(columns).fill(undefined);

  type Player = "red" | "yellow" | null;
  type BoardType = Player[][];

  const [currentPlayer, setCurrentPlayer] = useState<Player>("red");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [winner, setWinner] = useState<Player>(null);
  const [board, setBoard] = useState<BoardType>(
    Array(columns)
      .fill(null)
      .map(() => Array(rows).fill(null))
  );

  const handleClick = (col: number) => {
    const newBoard: BoardType = board.map((column) => [...column]);

    for (let i = newBoard[col].length - 1; i >= 0; i--) {
      if (newBoard[col][i] === null) {
        newBoard[col][i] = currentPlayer;
        setBoard(newBoard);
        setDisabled(true);
        break;
      }
    }

    const winner = checkWinner(newBoard);
    if (winner) {
      setDisabled(true);
      setWinner(winner);
    } else {
      setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
    }
  };

  const checkWinner = (board: BoardType): Player => {
    const cols = board.length;
    const rows = board[0].length;

    const checkDirection = (
      c: number,
      r: number,
      cStep: number,
      rStep: number
    ): Player => {
      const player = board[c][r];
      if (!player) return null;

      for (let i = 1; i < 4; i++) {
        const newCol = c + i * cStep;
        const newRow = r + i * rStep;

        if (
          newCol < 0 ||
          newCol >= cols ||
          newRow < 0 ||
          newRow >= rows ||
          board[newCol][newRow] !== player
        ) {
          return null;
        }
      }
      return player;
    };

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        if (
          checkDirection(c, r, 0, 1) || // vertical
          checkDirection(c, r, 1, 0) || // horizontal
          checkDirection(c, r, 1, 1) || // diagonal down-right
          checkDirection(c, r, 1, -1) // diagonal up-right
        ) {
          return board[c][r];
        }
      }
    }

    return null;
  };

  const reset = () => {
    setBoard(
      Array(columns)
        .fill(null)
        .map(() => Array(rows).fill(null))
    );
    setCurrentPlayer("red");
    setWinner(null);
    setDisabled(false);
  };

  return (
    <Box justifyItems="center">
      <div id="buttons">
        {buttons.map((_, idx) => (
          <button
            key={idx}
            disabled={disabled}
            onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.backgroundColor = currentPlayer || "";
            }}
            onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.backgroundColor = "";
              !winner && setDisabled(false);
            }}
            onClick={() => handleClick(idx)}
          />
        ))}
      </div>
      <div className="board">
        {board.map((column, colIndex) => (
          <div className="column" key={colIndex}>
            {column.map((cell, rowIndex) => (
              <div key={rowIndex} className={`cell ${cell ?? ""}`} />
            ))}
          </div>
        ))}
      </div>
      <button id="reset" onClick={reset}>
        {!winner ? "Reset" : "Play Again"}
      </button>
      {winner && (
        <>
          <div className={`cell ${winner}`} /> Wins!
        </>
      )}
    </Box>
  );
};

export default Board;
