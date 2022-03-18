import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { ImageContext } from '../../context/imageContext';
import { imgixFilters } from '../../helpers/constants';
import { useForm } from '../../hooks/useForm/useForm';
import { CardFilter } from './FilterButton';

import './Hero.css'

export const Hero = () => {
  const { imageName, setImageName, filtersApplied, addFilterApplied } = useContext(ImageContext)

  const divStyle = {
    display: 'block',
    width: '2073px',
    height: '475px'
  };

  const { search: searchQuery = '' } = useLocation();

  const todoElHistorial = Object.keys(imgixFilters).map(key => ({ key, value: imgixFilters[key] }))

  console.log("Cargado Hero")

  const isSelected = (key) =>  filtersApplied[key]

  const [, handleInputChange] = useForm({ imageUrl: imageName });

  const handleImageChange = (e) => {
    handleInputChange(e)
    setImageName(e.target.value)
  }
  
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2"> {imageName} </h1>
        <div className="btn-toolbar mb-2 mb-md-0">

          <div className="form-group">
            <form>
              <select onChange={handleImageChange} value={imageName} name='imageUrl' className="form-control">
                <option value=''>Selecciona una imagen</option>
                <option value='Travolta.gif'>Travolta</option>
              </select>
            </form>
          </div>

        </div>
      </div>

      <img className="my-4 w-100 chartjs-render-monitor" style={divStyle} src={`https://hmujicadev.imgix.net/${imageName}${searchQuery}`}/>

      <div className='cards'>
        {
          todoElHistorial.map((filterElement) => {
            const { key } = filterElement
            return <CardFilter { ...{key, imageName, onAddElement: addFilterApplied, filterElement, isSelected} } />
          })
        }
      </div>

    </main>
  )
}
