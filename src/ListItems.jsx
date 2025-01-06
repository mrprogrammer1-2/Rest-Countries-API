import React from 'react'
import LIneItem from './LIneItem'

const ListItems = ({ setFilter }) => {
  return (
    <ul className='listItems'>
        <LIneItem 
            text={'Africa'}
            setFilter={setFilter}
        />
        <LIneItem 
            text={'America'}
            setFilter={setFilter}
        />
        <LIneItem 
            text={'Asia'}
            setFilter={setFilter}
        />
        <LIneItem 
            text={'Europe'}
            setFilter={setFilter}
        />
        <LIneItem 
            text={'Oceania'}
            setFilter={setFilter}
        />
    </ul>
  )
}

export default ListItems