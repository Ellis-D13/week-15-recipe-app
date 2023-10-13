// Importing necessary React hooks and functionalities
import React, { useState } from 'react';

function SearchForm(props) {
    // State to hold the search query input by the user
    const [query, setQuery] = useState('');

    // Function to handle form submission
    const handleSubmit = function(e) {
      // Prevent the default form submission behavior
      e.preventDefault();

      // Set the search query in the parent component (App.js)
      props.setSearchQuery(query);
    };

    // Rendering the form using React.createElement
    return React.createElement('form', { onSubmit: handleSubmit }, [
      // Input element to take user's search query
      React.createElement('input', {
        key: 'input',  // Unique key prop for the list of elements
        type: 'text',
        // Event handler to update the query state every time user types in the input
        onChange: function(e) { setQuery(e.target.value); }
      }),
      
      // Button element to submit the form
      React.createElement('button', {
        key: 'button',  // Unique key prop for the list of elements
        type: 'submit'
      }, 'Search Recipes')
    ]);
}

export default SearchForm;  // Exporting the component to be used elsewhere
