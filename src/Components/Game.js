import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Game.css";

const Game = () => {
  const [list, setList] = useState(["", "", "", "", "", "", "", "", ""]);

  const [cross, setCross] = useState(true);
  const [track, setTrack] = useState({
    key: 0,
    winStatus: false,
    value: "Not Started",
  });

  const setFieldValue = (e, i) => {
    if (list[i - 1] === "") {
      const val = cross ? "X" : "0";
      setCross((cross) => (cross ? false : true));
      e.target.value = val;
      list[i - 1] = val;
      setList(list);
      console.log(list);
      setTrack({ ...track, value: "In Progress", key: 1 });
      checktrack(list);
      console.log(`track status is ${track.winStatus}`);
    }
  };

  const onResetClick = () => {
    const newList = ["", "", "", "", "", "", "", "", ""];
    setList(newList);
    setTrack({ winStatus: false, value: "Not Started", key: 0 });
    console.log("track value::", track.value);
    console.log(list);
    setCross(true);
  };

  const checktrack = (list) => {
    if (
      (list[0] === list[1] && list[0] === list[2] && list[0] !== "") ||
      (list[3] === list[4] && list[3] === list[5] && list[3] !== "") ||
      (list[6] === list[7] && list[6] === list[8] && list[6] !== "")
    ) {
      setTrack({ winStatus: true, value: "Won", key: 2 });
      console.log(list);
    }
    if (
      (list[0] === list[3] && list[0] === list[6] && list[0] !== "") ||
      (list[1] === list[4] && list[1] === list[7] && list[1] !== "") ||
      (list[2] === list[5] && list[2] === list[8] && list[2] !== "")
    ) {
      setTrack({ winStatus: true, value: "Won", key: 2 });
    }
    if (
      (list[0] === list[4] && list[0] === list[8] && list[0] !== "") ||
      (list[2] === list[4] && list[2] === list[6] && list[2] !== "")
    ) {
      setTrack({ winStatus: true, value: "Won", key: 2 });
    }
  };

  return (
    <div className="main-div">
      <h2>Tic-Tac-Toe</h2>
      <div className="game-div">
        <div className="first-row">
          <button
            className="square"
            onClick={(e) => setFieldValue(e, 1)}
            disabled={track.winStatus}
          >
            {list[0]}
          </button>
          <button
            className="square"
            onClick={(e) => setFieldValue(e, 2)}
            disabled={track.winStatus}
          >
            {list[1]}
          </button>
          <button
            className="square"
            onClick={(e) => setFieldValue(e, 3)}
            disabled={track.winStatus}
          >
            {list[2]}
          </button>
        </div>
        <div className="second-row" style={{ marginTop: "10px" }}>
          <button
            className="square"
            onClick={(e) => setFieldValue(e, 4)}
            disabled={track.winStatus}
          >
            {list[3]}
          </button>
          <button
            className="square"
            onClick={(e) => setFieldValue(e, 5)}
            disabled={track.winStatus}
          >
            {list[4]}
          </button>
          <button
            className="square"
            onClick={(e) => setFieldValue(e, 6)}
            disabled={track.winStatus}
          >
            {list[5]}
          </button>
        </div>
        <div className="third-row" style={{ marginTop: "10px" }}>
          <button
            className="square"
            onClick={(e) => setFieldValue(e, 7)}
            disabled={track.winStatus}
          >
            {list[6]}
          </button>
          <button
            className="square"
            onClick={(e) => setFieldValue(e, 8)}
            disabled={track.winStatus}
          >
            {list[7]}
          </button>
          <button
            className="square"
            onClick={(e) => setFieldValue(e, 9)}
            disabled={track.winStatus}
          >
            {list[8]}
          </button>
        </div>
        <button className="resetButton" onClick={onResetClick}>
          Reset
        </button>
        {track.winStatus ? (
          <h2 style={{ color: "Green" }}>
            Player {cross ? "0 " : "X "} {track.value}
          </h2>
        ) : (
          <h1 style={track.key === 0 ? { color: "Red" } : { color: "blue" }}>
            {track.value}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Game;
