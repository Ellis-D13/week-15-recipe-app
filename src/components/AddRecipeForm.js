import React, { useEffect, useState } from 'react';

function AddRecipeForm(props) {
    const handleSubmit = function(e) {
      e.preventDefault();
      props.addRecipe(/* your new recipe data here */);
    };
    
    return React.createElement('form', { onSubmit: handleSubmit }, [
      
      React.createElement('button', { type: 'submit' }, 'Add Recipe')
    ]);
  }

  export default AddRecipeForm; 