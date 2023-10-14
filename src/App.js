import React, { useState, useEffect } from 'react';
//import Recipe from './components/Recipe';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import RecipeForm from './components/RecipeForm';
import SearchForm from './components/SearchForm';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Popper from '@popperjs/core';

function App() {
  // State for storing the search query
  const [searchQuery, setSearchQuery] = useState('');

  // State for storing the selected recipe
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // State for controlling the edit mode (add/edit recipe)
  const [editMode, setEditMode] = useState(false);

  // New State for storing recipes and loading status
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to add a new recipe
  // This function will add the new recipe to the beginning of your recipes state
  function addRecipe(newRecipe) {
    const updatedRecipes = [newRecipe, ...recipes];
    setRecipes(updatedRecipes);
  }

  function deleteRecipe(recipeId) {
    // Filter out the deleted recipe from the local state
    const updatedRecipes = recipes.filter(recipe => recipe.id !== recipeId);
    setRecipes(updatedRecipes);
}

const recipeDetailsComponent = React.createElement(RecipeDetails, {
  recipe: selectedRecipe,
  setEditMode: setEditMode,
  setSelectedRecipe: setSelectedRecipe,
  deleteRecipe: deleteRecipe
});

  useEffect(() => {
    if (searchQuery !== '')
    setIsLoading(true);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`; //template literal syntax

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log("Static API Response:", data); // Logging the API data here
        setRecipes(data.meals || []);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the data:', error);
        setIsLoading(false);
      });
  }, [searchQuery]);

  return (
    <div className="App">
      <h1>Recipe App</h1>

      {/* SearchForm component to handle user's search queries */}
      <SearchForm setSearchQuery={setSearchQuery} />

      {/* Button to switch to Add New Recipe mode */}
      <button onClick={() => setEditMode(true)}>Add New Recipe</button>

      {/* Show RecipeForm for adding/editing when in edit mode */}
      {editMode && (
        <RecipeForm
          selectedRecipe={selectedRecipe}
          setEditMode={setEditMode}
          setSelectedRecipe={setSelectedRecipe}
          addRecipe={addRecipe} // Pass the addRecipe function to the RecipeForm
        />
      )}

      {/* RecipeList to display recipes based on search */}
      <RecipeList
        searchQuery={searchQuery}
        setSelectedRecipe={setSelectedRecipe}
        setEditMode={setEditMode}
        recipes={recipes}  // Pass the recipes state
        isLoading={isLoading}  // Pass the isLoading state
      />

      {/* Show RecipeDetails for the selected recipe when not in edit mode */}
      {selectedRecipe && !editMode && (
        <RecipeDetails
          recipe={selectedRecipe}
          setEditMode={setEditMode}
          setSelectedRecipe={setSelectedRecipe}
        />
      )}
    </div>
  );
}

export default App;

