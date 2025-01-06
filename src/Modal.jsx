import React from 'react'
import Borders from './Borders'
import { FaArrowLeft } from "react-icons/fa";

const Modal = ({ setShowModal, modalData, content }) => {
  return (
    <div className='modal'>
        <button className='back'
            onClick={()=> setShowModal(false)}
        > <FaArrowLeft/> Back</button>
        <div className="modal-content">
            <img src={modalData.flag} alt={modalData.name} />
            <div className='part-one'>
            <h2 className="modal-name">{modalData.name}</h2>
                <span><strong>Native Name</strong>: {modalData.nativeName}</span>
                <span><strong>Population</strong>: {modalData.population}</span>
                <span><strong>Region</strong>: {modalData.region}</span>
                <span><strong>Sub Region</strong>: {modalData.subregion}</span>
                <span><strong>Capital</strong>: {modalData.capital}</span>
            </div>
            <div className='part-two'>
                <span><strong>Top Level Domain</strong>: {modalData.topLevelDomain}</span>
                <span><strong>Currencies</strong>: {modalData.currencies.name}</span>
                <span><strong>Languages</strong>: {
                    (modalData.languages).map((lan, index)=> (
                        <span className="language" key={index}>{lan.name}{
                            modalData.languages.indexOf(lan) == (modalData.languages).length - 1? null : ','
                        }</span>
                    ))
                }</span>
            </div>
            <div className="borders">
            <div className='title'><strong>Border Countries:</strong></div>
                {
                    (modalData.borders) ?
                    (modalData.borders).map((el, index)=> (
                        <Borders
                            key={index}
                            border={el}
                            content={content}
                        />

                    ))
                    : "No Borders"
                }

            </div>
        </div>
    </div>
  )
}

export default Modal