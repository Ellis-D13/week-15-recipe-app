import React from "react";

const RecipeDetails = ({ recipe, setEditMode, setSelectedRecipe }) => {
  
  // Log the selected recipe to see its details
  console.log('Selected Recipe:', recipe);

  if (!recipe) {
    return null; // Return null if no recipe is provided
  }
  // best practice: destructure your props to avoid repetitive code 
  const { title, description, ingredients } = recipe;
  // industry standard: use JSX over React.createElement() for readability 
  const ingredientList = (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );

  const cardBody = (
    <div className="card-body">
      <h5 className="card-title">{description}</h5>
      <p className="card-text">
        <strong>Ingredients:</strong>
        {ingredientList}
      </p>
      <button className="btn btn-primary" onClick={() => setEditMode(true)}>
        Edit
      </button>
      <button 
        className="btn btn-secondary ml-2" 
        onClick={() => setSelectedRecipe(null)}>
        Close
      </button>
    </div>
  );

  return (
    <div className="card mt-4">
      <div className="card-header">{title}</div>
      {cardBody}
    </div>
  );
};

export default RecipeDetails;

