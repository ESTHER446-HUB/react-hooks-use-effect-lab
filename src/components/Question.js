import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [secondsRemaining, setSecondsRemaining] = useState(10);

  useEffect(() => {
    // Update timer every second
    const timeoutId = setTimeout(() => {
      setSecondsRemaining((prev) => prev - 1);
    }, 1000);

    // When timer reaches 0, call onAnswered(false)
    if (secondsRemaining === 0) {
      onAnswered(false);
    }

    // Cleanup: clear timeout when component unmounts or before re-running effect
    return () => clearTimeout(timeoutId);
  }, [secondsRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.prompt}</h2>
      <p>{secondsRemaining} seconds remaining</p>
      {/* Render answers here if needed */}
    </div>
  );
}

export default Question;
