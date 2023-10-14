import React from 'react';
// defining the recipe functional component 
const Recipe = ({ recipe, setSelectedRecipe, setEditMode }) => {
  // destructuring the recipe object to get its properties
  const { id, title, description } = recipe;
  // function to hadle when a recipe is clicked 
  const handleRecipeClick = () => {
    // setting the clicked recipe as the selected recipe in the main apps state
    setSelectedRecipe(recipe);
  };
  // function to handle when a recipe is clicked 
  const handleEditClick = (e) => {
    // prevent the default click action to avoic selecting the recipe while trying to edit 
    e.stopPropagation();  // Prevent triggering handleRecipeClick
    // enable the edit mode in the main apps state
    setEditMode(true);
    // set the clicked recipe as the one to be edited
    setSelectedRecipe(recipe);
  };
  // returning the JSX to render for this component 
  return (
    // displaying the recipe's title and description
    // the entire div is clickable and triggers the handleRecipeClick function
    <div onClick={handleRecipeClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default Recipe;