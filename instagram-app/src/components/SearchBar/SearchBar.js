import React from 'react';
import logo from './ig_search_bar_logo.png'
import iconA from './iconA.png';
import iconB from './iconB.png';
import iconC from './iconC.png';
import './SearchBar.css';

const SearchBar = props => {
    return (
      <div className="search-container">
        <div className="logo-left">
          <img
            alt='logo'
            src={logo}
             />
        </div>
        <div className="search-bar">
          <form name="searchForm">
            <input 
            type="text" 
            name="searchString"
            value={props.searchString} 
            placeholder="Search" 
            onChange={props.changeHandler}
            onSubmit={props.testHandler}
             />
          </form>
        </div>
        <div className="icon-bar">
          <img alt='iconA' src={iconA} />
          <img alt='iconB' src={iconB} />
          <img alt='iconC' src={iconC} />

        </div>
      </div>
    );
}

export default SearchBar;