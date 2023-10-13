import React from "react";
const RecipeList = ({ recipes, isLoading }) => {

  // Log the recipes prop to see the data you're getting
  console.log('Recipes:', recipes);

  // UI Rendering, industry standard, conditional reendering based on the loading status 
  if (isLoading) {
    return <p>Loading recipes...</p>;
  }
  // handle edge cases, like when no data is available
  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      <ul>
        {recipes.map((recipe, index) => (
          // Assuming your recipe object has a 'name' property
          // If it doesn't, replace 'name' with the correct property
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
