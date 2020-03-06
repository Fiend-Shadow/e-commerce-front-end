import React from 'react';
import SearchBar from "./../components/SearchBar";

function SearchPage(props) {
  const {productName} = this.props
  return (
    <div>
      <SearchBar />
      <h1>Search Results Page</h1>
      <ul>
        <li>{productName}</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <li>Product 4</li>
      </ul>
      
      
    </div>
  )
}

export default SearchPage;