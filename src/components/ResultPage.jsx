import React from "react";

const ResultPage = ({ finalScore, feedback }) => {
  return (
    <div className="result-page container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Game Over</h2>
        <div className="alert alert-primary" role="alert">
          <p className="lead">
            Your final score is: <strong>{finalScore}</strong>
          </p>
        </div>
        <h3>Feedback:</h3>
        <div className="mb-4">
          {feedback.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <button
          className="btn btn-primary btn-block"
          onClick={() => window.location.reload()}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
