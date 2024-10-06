import React from "react";

const GameStatus = ({ state, effort }) => {
  if (!state) {
    // Return a loading message or default values if state is undefined
    return <div>Loading game status...</div>;
  }

  return (
    <div className="game-status card p-3 mb-4" id="gameStatusContainer">
      <h3 className="card-title">Current Status</h3>
      <ul className="list-group">
        <li className="list-group-item">
          Air Quality Index (AQI): <strong>{state.aqi || "N/A"}</strong>
        </li>
        <li className="list-group-item">
          Water Availability: <strong>{state.waterAvailability || "N/A"}</strong>
        </li>
        <li className="list-group-item">
          Green Space: <strong>{state.greenSpace || "N/A"}</strong>
        </li>
        <li className="list-group-item">
            Capacity Remaining: <strong>{effort ?? "N/A"}</strong>
        </li>
      </ul>
        <br/>
      <h6>More modes coming soon..</h6>
      <h6>Leaderboard coming soon..</h6>
    </div>
  );
};

export default GameStatus;
