import React from "react";

const RecipeList = ({ recipes, isLoading, setSelectedRecipe }) => {  // Add setSelectedRecipe to the props

  // Log the recipes prop to see the data you're getting
  console.log('Recipes:', recipes);

  // UI Rendering, industry standard, conditional rendering based on the loading status 
  if (isLoading) {
    return <p>Loading recipes...</p>;
  }

  // Handle edge cases, like when no data is available
  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      <ul>
        {recipes.map((recipe, index) => (
          // Use the 'strMeal' property from the recipe object and add the onClick event
          <li key={index} onClick={() => setSelectedRecipe(recipe)}>
            {recipe.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
