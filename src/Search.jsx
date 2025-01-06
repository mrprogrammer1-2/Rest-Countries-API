import React from 'react';
import { FaSearch } from "react-icons/fa";

const Search = ({ search, setSearch }) => {
  return (
    <form className='searchForm'>
        <FaSearch/>
        <input 
            type="text"
            placeholder='Search for a country...'
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
         />
    </form>
  )
}

export default Search