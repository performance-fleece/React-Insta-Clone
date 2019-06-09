import React from 'react';
import './SearchBar.css';
import iglogo from '../assets/ig_search_bar_logo.png';
import compass from '../assets/compass.png';
import heart from '../assets/heart.png';
import user from '../assets/user.png';
import { Form, Input } from 'reactstrap';

const SearchBar = props => {
    return (
      <div className="search-bar">
        <div className="logo-wrapper">
          <img className="ig-logo" src={iglogo} alt="" />
        </div>
        <div className="search-form">
          <Form>
            <Input
              type="text"
              placeholder="Search"
              onKeyUp={props.searchPosts}
              onChange={props.changeHandler}
            />
          </Form>
        </div>
        <div className="socials-wrapper">
            <img className="socials-img" src={compass} alt='' />
            <img className="socials-img" src={heart} alt='' />
            <img className="socials-img" src={user} alt='' />
        </div>
      </div>
    );
}

export default SearchBar;