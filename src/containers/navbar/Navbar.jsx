import React from 'react'
import { TrashIcon } from '../../components/icons/TrashIcon'

import './Navbar.css'

export const Navbar = ({ allFilters, isNavVisible, filtersApplied, deleteFilterApplied }) => {
  const filters = allFilters

  return (
    <nav id="sidebarMenu" className={`col-md-3 col-lg-2 d-md-block bg-light sidebar collapse ${isNavVisible && 'show'}`}>
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {
            Object.keys(filtersApplied).map((key) => {
              const isMainFilterProp = filters[key]?.name

              return (
                <li key={key} className="nav-item">
                  <button onClick={() => isMainFilterProp && deleteFilterApplied([key])} className="btn nav-link">
                    {isMainFilterProp ? filters[key].name : key} : {filtersApplied[key]}
                    {isMainFilterProp && <TrashIcon />}
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}
