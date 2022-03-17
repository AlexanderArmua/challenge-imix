import React, { useState } from 'react'
import { imgixFilters } from '../../helpers/constants'
import './Navbar.css'

export const Navbar = ({ isNavVisible, historial, onDelete }) => {
  console.log("Cargado Navbar")

  const filters = imgixFilters

  return (
    <nav id="sidebarMenu" className={`col-md-3 col-lg-2 d-md-block bg-light sidebar collapse ${isNavVisible && 'show'}`}>
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {
            Object.keys(historial).map((key) => {
              return (
                <li key={key} className="nav-item">
                  <a onClick={() => onDelete(key)} to='#' className="btn nav-link">
                    <div>
                      {filters[key].name} : {historial[key]}
                    </div>
                    <div >
                      <TrashIcon />
                    </div>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

const TrashIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>
  )
}
