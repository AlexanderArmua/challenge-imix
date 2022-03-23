import React from 'react'
import { useLocation } from 'react-router-dom';
import { FilterCard } from '../../components/FilterCard';
import { buildUrlWithImage } from "../../helpers/url";
import { images } from "../../helpers/images";

import './Hero.css'

export const Hero = ({ allFilters, imageName, setImageName, filtersApplied, addFilterApplied, deleteFilterApplied }) => {
  const { search: searchQuery = '' } = useLocation();

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
        <img className="rounded img-fluid mx-auto d-block" src={`${buildUrlWithImage(imageName)}${searchQuery}`} alt='With filters applied'/>
      </div>

      <div className='cards'>
        {
          Object.keys(allFilters).map((filterKey) => {
              const isSelected = filterKey in filtersApplied
              const filterValue = { ...allFilters[filterKey] }

              return <FilterCard key={filterKey} {...{imageName, isSelected, filterValue, onAddElement: addFilterApplied, onRemoveElement: deleteFilterApplied}} />
          })
        }
      </div>

    </main>
  )
}
