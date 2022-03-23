import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { ImageContext } from '../../context/imageContext';
import { FilterCard } from './FilterCard';
import {buildUrlWithImage} from "../../helpers/url";
import {images} from "../../helpers/images";

import './Hero.css'


export const Hero = ({ possibleFilters }) => {
  const { imageName, setImageName, filtersApplied, addFilterApplied, deleteFilterApplied } = useContext(ImageContext)

  const { search: searchQuery = '' } = useLocation();

  console.log("Cargado Hero")

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div className="btn-toolbar mb-2 mb-md-0">          
          <div className='form-group'>
            <select className="custom-select mr-sm-2 form-control" value={imageName} onChange={(e) => setImageName(e.target.value)}>
              { images.map(({ name }) => <option key={name} value={name}>{name}</option>) }
            </select>
          </div>
        </div>
      </div>

      <div className="text-center img-max-height-600">
        <img className="rounded img-fluid mx-auto d-block" src={`${buildUrlWithImage(imageName)}${searchQuery}`} alt='Image with filters applied'/>
      </div>

      <div className='cards'>
        {
          Object.keys(possibleFilters).map((filterKey) => {
              const isSelected = filterKey in filtersApplied
              const filterValue = { ...possibleFilters[filterKey] }

              return <FilterCard key={filterKey} {...{imageName, isSelected, filterValue, onAddElement: addFilterApplied, onRemoveElement: deleteFilterApplied}} />
          })
        }
      </div>

    </main>
  )
}
