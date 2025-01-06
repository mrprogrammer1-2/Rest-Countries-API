import React from 'react'

const Content = ({ content, setShowModal, setModalData }) => {
  return (
    <div className='content'>
        {
            content.length ? 
            <div className='items-container'>
                {
                    content.map((item, index)=> (
                        <div key={index} className='item'onClick={()=> {
                            setShowModal(true)
                            setModalData((content.filter(el=> el.name === item.name)[0]))
                        }}>
                            <div className="image">
                                <img src={item.flag} alt={item.name} />
                            </div>
                            <div className="text">
                                <h2 className="name">{item.name}</h2>
                                <span className="population"><strong>Population</strong>: {item.population} </span>
                                <span className="region"><strong>Region</strong>: {item.region} </span>
                                <span className="capital"><strong>Capital</strong>: {item.capital} </span>
                            </div>
                        </div>
                    ))
                }
            </div>
            
            : <p>There is no data.</p>
        }
    </div>
  )
}

export default Content