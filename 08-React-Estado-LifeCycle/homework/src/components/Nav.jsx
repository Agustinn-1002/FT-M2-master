import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav class="navbar navbar-dark bg-dark justify-content-between">
      <div>
        <img src={Logo} alt="Logo" id='logoHenry'/>
        <a class="navbar-brand">Henry - Weather App</a>
      </div>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;
