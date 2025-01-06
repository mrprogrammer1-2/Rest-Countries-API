import React from 'react'

const LIneItem = ({ text, setFilter }) => {
  return (
    <li 
    onClick={()=> setFilter(text)}
    >{text}</li>
  )
}

export default LIneItem