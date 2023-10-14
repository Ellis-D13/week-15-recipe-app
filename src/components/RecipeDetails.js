import React from "react";
const RecipeDetails = ({ recipe, setEditMode, setSelectedRecipe }) => {
  
  if (!recipe) {
    return null; 
  }

  const { strMeal, strInstructions } = recipe;

  // Extract ingredients and measures, then pair them
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`] && recipe[`strMeasure${i}`]) {
      ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
    }
  }

  const ingredientList = (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );

  return (
    <div className="card mt-4">
      <div className="card-header">{strMeal}</div>
      <div className="card-body">
        <h5 className="card-title">{strInstructions}</h5>
        <div className="card-text">
          <strong>Ingredients:</strong>
          {ingredientList}
        </div>
        <button className="btn btn-primary" onClick={() => setEditMode(true)}>
          Edit
        </button>
        <button 
          className="btn btn-secondary ml-2" 
          onClick={() => setSelectedRecipe(null)}>
          Close
        </button>
      </div>
    </div>
  );
};
export default RecipeDetails; 