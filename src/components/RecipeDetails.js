import React from "react";

// defining the RecipeDetails funcional component 
const RecipeDetails = ({ recipe, setEditMode, setSelectedRecipe, deleteRecipe }) => {
  // if no recipe is proviced, do not render anything 
  if (!recipe) {
    return null; 
  }
  // destructuring the recipe object to get its properties
  const { strMeal, strInstructions } = recipe;

  // initializing an array to extract ingredients and measures, then pair them
  const ingredients = [];
  // looping through potential ingredients (up to 20 based on the data structure)
  for (let i = 1; i <= 20; i++) {
    // if both ingredient and its measure exist, add them to the ingredients array 
    if (recipe[`strIngredient${i}`] && recipe[`strMeasure${i}`]) {
      ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
    }
  }
  // creating a JSX unordered list to display the ingredients
  const ingredientList = (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );
  // Defining the delete button using React's createElement method
  const deleteButton = React.createElement('button', {
    className: 'btn btn-danger ml-2',
    // On click, trigger the handleDelete function with the recipe's ID
    onClick: () => handleDelete(recipe.id)
}, 'Delete');
// Function to handle the deletion of a recipe
const handleDelete = (id) => {
  // Call the deleteRecipe function passed as a prop
  deleteRecipe(id);
  // Reset the selected recipe in the main App's state
  setSelectedRecipe(null);
};
  // Returning the JSX to render for this component
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
        <button 
        className="btn btn-danger ml-2" 
        onClick={() => handleDelete(recipe.id)}> 
        Delete
      </button>
    </div>
  </div>
);
};
export default RecipeDetails; 