import React from 'react'
import { companyName } from '../../helpers/constants'
import { Link } from 'react-router-dom'

import './Header.css'

export const Header = ({ changeNavVisibility }) => {

  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a to='/' className="navbar-brand col-md-3 col-lg-2 me-0 px-3">{companyName}</a>

        <a to='#' onClick={changeNavVisibility} className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>        
        </a>
    </header>
  )
}
