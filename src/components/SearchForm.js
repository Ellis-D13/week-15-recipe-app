import React, { useState } from 'react';

function SearchForm(props) {
    const [query, setQuery] = useState('');  // Add this line
    const handleSubmit = function(e) {
      e.preventDefault();
      props.setSearchQuery(query);
    };
  
    return React.createElement('form', { onSubmit: handleSubmit }, [
      React.createElement('input', { type: 'text', onChange: function(e) { setQuery(e.target.value); }}),
      React.createElement('button', { type: 'submit' }, 'Search Recipes')
    ]);
  }

  export default SearchForm; 