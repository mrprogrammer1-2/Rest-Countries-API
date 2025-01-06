import React from 'react'

const Borders = ({ border, content }) => {
    const country = content.filter(item=> item.alpha3Code === border)
    return (
            <span>
                {country[0].name}
            </span>
  )
}

export default Borders