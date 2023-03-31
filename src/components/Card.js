import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="card">
      <div className="cardHeader">
        <h3>{meal.strMeal}</h3>
        <span>Origine : {meal.strArea}</span>
      </div>
      <img src={meal.strMealThumb} alt={"image " + meal.strMeal} />
      <div className="instruction">
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
};

export default Card;
