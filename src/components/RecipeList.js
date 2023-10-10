const RecipeList = ({ recipes, isLoading }) => {

    // UI Rendering
    if (isLoading) {
      return <p>Loading recipes...</p>;
    }
  
    if (recipes.length === 0) {
      return <p>No recipes found.</p>;
    }
  
    return (
      <div>
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>{recipe.name}</li> // Replace 'name' with the actual property from your API
          ))}
        </ul>
      </div>
    );
  };
  
  export default RecipeList;