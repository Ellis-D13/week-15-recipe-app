import React, { useEffect, useState } from 'react';

// define the 'AddRecipeForm' functional component
function AddRecipeForm(props) {
  // this fuction handles the form submission
    const handleSubmit = function(e) {
      // prevent the default behavior of the form which would cause the page to refresh 
      e.preventDefault();
      // call the 'addRecipe' function passed as a prop, with the new recipe data
      props.addRecipe(/* your new recipe data here */);
    };
    // render the form using React's createElement method
    // this form contains a submit function to add a recipe
    return React.createElement('form', { onSubmit: handleSubmit }, [
      React.createElement('button', { type: 'submit' }, 'Add Recipe')
    ]);
  }

  export default AddRecipeForm; 