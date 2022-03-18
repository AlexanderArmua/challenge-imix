import React, { useContext, useState } from 'react'
import { imgixFilters } from '../../helpers/constants'
import { useForm } from '../../hooks/useForm/useForm'

export const FilterButton = ({ isSelected, filterProps, onAddElement, filterKey }) => {
  const handleAddFilter = () => {
    Object.keys(filterProps).forEach(key => {
        onAddElement({ key, value: filterProps[key].value })
    })    
  }
    
  return (
    <button type='button' onClick={() => handleAddFilter()} className={`btn ${isSelected(filterKey) ? 'btn-success' : 'btn-outline-success'}`}>
        Aplicar
    </button>
  )
}

export const CardFilter = ({ imageName, onAddElement, filterElement, isSelected }) => {
    const { key, value: { name } } = filterElement

    const [filterProps, setFilterProps] = useState(imgixFilters[key].values)

    const onChange = ({ filterKey, value }) => {
        console.log({ filterKey, value })

        filterProps[filterKey].value = value

        setFilterProps({...filterProps})
    }

    const getParams = () => {
        return Object.keys(filterProps).map(key => `${key}=${filterProps[key].value}`).join('&')
    }
    
    return (
        <div className='card'>
            <img className="card-img-top" src={`https://hmujicadev.imgix.net/${imageName}?${getParams()}`} alt={`Card image with ${name} filter applied`}/>
            <div className='card-body'>
                <h5 className='card-title'>{name}</h5>
                
                <form>
                    <ul className="list-group list-group-flush">
                        {
                            Object.entries(filterProps).map(([key, filterValue]) => <InputFilterValue {...{key, filterKey: key, filterValue, onChange}} />)
                        }
                    </ul>
                </form>

                <FilterButton {...{ onAddElement, filterProps, filterKey: key, isSelected }} />
            </div>
        </div>
    )
}

export const InputFilterValue = ({ filterKey, filterValue, onChange }) => {
    const { type, value, options } = filterValue  

    const [form, handleInputChange] = useForm({ currentValue: value });
    const { currentValue } = form;

    const handleChange = (e) => {
        handleInputChange(e)
        onChange({ filterKey, value: e.target.value })
    }

    if (type === 'range') {
        const { value, min, max } = filterValue
        return (
            <div className='form-group'>
                <label>{filterKey}</label>
                <input type='range' value={currentValue} min={min} max={max} onChange={handleChange} name='currentValue' />
            </div>
        )
    }

    if (type === 'select') {
        return (
            <div className='form-group'>
                <label>{filterKey}</label>
                <select className='form-control' value={currentValue} onChange={handleChange} name='currentValue'>
                    {
                        options.map(value => <option key={value} value={value}>{value}</option>)
                    }
                </select>
            </div>
        )
    }

    return null
}
