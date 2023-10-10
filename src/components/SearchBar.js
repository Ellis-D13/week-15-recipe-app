import React from "react";

// Function component for the search bar
const SearchBar = ({ setSearchQuery }) => (
    // Input field to capture search query and update `searchQuery` state in `App.js`
    <input
      type="text"
      placeholder="Search for recipes..."
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
  export default SearchBar; 