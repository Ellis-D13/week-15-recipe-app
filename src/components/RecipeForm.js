import React from "react";

// Function component for the recipe form for adding/editing a recipe
const RecipeForm = ({ selectedRecipe, setEditMode, setSelectedRecipe }) => {
    // Code for form logic goes here
    return (
      <form>
        {/* Fields for recipe details */}
        
        {/* Button to submit the form */}
        <button type="submit">Save</button>
        
        {/* Button to cancel editing/adding */}
        <button onClick={() => setEditMode(false)}>Cancel</button>
      </form>
    );
  };
  export default RecipeForm; 