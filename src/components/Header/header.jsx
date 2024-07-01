import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find Your Favorite Book.</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to BookHub, your ultimate destination for discovering and exploring the world of books.

</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header