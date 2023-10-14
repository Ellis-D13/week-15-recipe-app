import React, { useState } from "react";

const RecipeForm = ({ selectedRecipe, setEditMode, addRecipe }) => {
    // Local state for the form's input fields
    const [recipeName, setRecipeName] = useState(selectedRecipe ? selectedRecipe.strMeal : "");
    const [instructions, setInstructions] = useState(selectedRecipe ? selectedRecipe.strInstructions : "");
    const [ingredients, setIngredients] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecipe = {
            strMeal: recipeName,
            strInstructions: instructions,
            ingredients: ingredients.split(',').map(ing => ing.trim()),  // Assuming ingredients are comma-separated
        };

        addRecipe(newRecipe);

        // Reset form fields
        setRecipeName("");
        setInstructions("");
        setIngredients("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Recipe Name:</label>
                <input type="text" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
            </div>
            <div>
                <label>Instructions:</label>
                <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} />
            </div>
            <div>
                <label>Ingredients (comma-separated):</label>
                <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
        </form>
    );
};

export default RecipeForm;