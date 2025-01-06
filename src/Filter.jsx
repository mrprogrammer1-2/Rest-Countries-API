import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import ListItems from './ListItems';

const Filter = ({ setFilter }) => {
  return (
    <div className='filter'>
        <div onClick={()=> {
            document.querySelector('.filter .listItems').classList.toggle('open')
        }}>
            <p>Filter by Region</p>
            <MdKeyboardArrowDown/>
        </div>
        <ListItems 
            setFilter={setFilter}
        />
    </div>
  )
}

export default Filter