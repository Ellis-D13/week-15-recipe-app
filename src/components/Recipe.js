import React from 'react';

const Recipe = ({ recipe, setSelectedRecipe, setEditMode }) => {
  const { id, title, description } = recipe;

  const handleRecipeClick = () => {
    setSelectedRecipe(recipe);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();  // Prevent triggering handleRecipeClick
    setEditMode(true);
    setSelectedRecipe(recipe);
  };

  return (
    <div onClick={handleRecipeClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default Recipe;