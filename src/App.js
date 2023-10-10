import React, { useState, useEffect } from 'react';
import Recipe from './components/Recipe';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import RecipeForm from './components/RecipeForm';
import SearchForm from './components/SearchForm';

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

  // Function to add a new recipe, placeholder for now
  const addRecipe = (newRecipe) => {
    // Logic to add a new recipe to your database goes here
    console.log('New recipe:', newRecipe);
  };

  useEffect(() => {
    if (searchQuery) {  // Only run if there's a query to search
      setIsLoading(true);
      
      const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '9466ef1099msh9d43d132b2e9fe5p178235jsna2bc2d51ac9d',
          'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
      };

      fetch(url, options)
        .then(response => response.json())
        .then(data => {
          // Assuming data.recipes holds the list of recipes
          setRecipes(data.recipes || []);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('There was an error fetching the data:', error);
          setIsLoading(false);
        });
    }
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
          addRecipe={addRecipe} // Pass addRecipe function to the RecipeForm
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

