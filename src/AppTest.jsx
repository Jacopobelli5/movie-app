import { useState, useEffect, use } from "react";

// Card component
const Card = ({ title }) => {

  const [count, setCount] = useState(0);

  // Initialise a hasLiked state for each card
  const [hasLiked, setHasLiked] = useState(false);

  // initialise useEffect
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]); // this array is the dependency list 

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title} - {count}</h2>
      <button onClick={() => setHasLiked(!hasLiked)} className="like-button">
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

// Main app component
const AppTest = () => {
  return (
    <div className="main-div">
      <h2>Helloooooo</h2>
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="Joker" />
    </div>
  );
};