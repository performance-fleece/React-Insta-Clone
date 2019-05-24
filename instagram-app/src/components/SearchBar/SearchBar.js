import React from 'react';
import logo from './ig_search_bar_logo.png'
import iconA from './iconA.png';
import iconB from './iconB.png';
import iconC from './iconC.png';

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
            <input type="text" value="" placeholder="Search" />


          </form>
        </div>
        <div className="icon-bar">
          <img alt='icon1' src={iconA} />
          <img alt='icon2' src={iconB} />
          <img alt='icon3' src={iconC} />

        </div>
      </div>
    );
}

export default SearchBar;