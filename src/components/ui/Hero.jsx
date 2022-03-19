import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { ImageContext } from '../../context/imageContext';
import { FilterCard } from './FilterCard';
import {buildUrlWithImage} from "../../helpers/url";
import {FormInput} from "./FormListProperties";

import './Hero.css'
import {images} from "../../helpers/images";

export const Hero = ({ possibleFilters }) => {
  const { imageName, setImageName, filtersApplied, addFilterApplied, deleteFilterApplied } = useContext(ImageContext)

  const { search: searchQuery = '' } = useLocation();

  console.log("Cargado Hero")

  const handleImageChange = ({ value }) => setImageName(value)

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div className="btn-toolbar mb-2 mb-md-0">
          <FormInput { ...{filterValue: { type: 'select', value: imageName, options: images.map(({ name }) => name) }, onChange: handleImageChange}}/>
        </div>
      </div>

      <div className="text-center">
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
