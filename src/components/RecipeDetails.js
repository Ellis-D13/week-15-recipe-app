import React from "react";

// Function component to display the details of a selected recipe
const RecipeDetails = ({ recipe, setEditMode, setSelectedRecipe }) => {
  if (!recipe) {
    return null; // Return null if no recipe is provided
  }

  const { title, description, ingredients } = recipe;

  // Create the list of ingredients
  const ingredientList = React.createElement(
    "ul",
    null,
    ingredients.map((ingredient, index) => 
      React.createElement("li", { key: index }, ingredient)
    )
  );

  // Create the main content for the card
  const cardBody = React.createElement(
    "div",
    { className: "card-body" },
    React.createElement("h5", { className: "card-title" }, description),
    React.createElement(
      "p",
      { className: "card-text" },
      React.createElement("strong", null, "Ingredients:"),
      ingredientList
    ),
    React.createElement(
      "button",
      { className: "btn btn-primary", onClick: () => setEditMode(true) },
      "Edit"
    ),
    React.createElement(
      "button",
      { className: "btn btn-secondary ml-2", onClick: () => setSelectedRecipe(null) },
      "Close"
    )
  );

  // Create and return the card
  return React.createElement(
    "div",
    { className: "card mt-4" },
    React.createElement("div", { className: "card-header" }, title),
    cardBody
  );
};

export default RecipeDetails;

