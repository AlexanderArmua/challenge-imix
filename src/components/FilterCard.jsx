import React, { useState } from 'react'
import { buildURL } from "../helpers/url";
import { FormButtons, FormListProperties } from "./form/FormListProperties";

const extraParams = [["w", "200"], ["h", "200"]]

export const FilterCard = ({ imageName, filterValue, onAddElement, onRemoveElement, isSelected }) => {
    const { name, values } = filterValue

    const [filterProps, setFilterProps] = useState(values)

    const onChange = ({ filterKey, value }) => {
        filterProps[filterKey].value = value
        setFilterProps({...filterProps})
    }

    const handleAddElement = () => onAddElement && onAddElement(filterProps)
    const handleRemoveElement = () => onRemoveElement && onRemoveElement(Object.keys(filterProps))
    const params = Object.keys(filterProps).map(key => [key, filterProps[key].value])

    return (
        <div className={`card ${isSelected ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
            <div className="card-header">{name}</div>
            <img className="card-img-top" src={buildURL(imageName, params.concat(extraParams))} alt={`Card with filter applied`}/>
            <div className='card-body'>
                <FormListProperties {...{filterProps, onChange}} />
            </div>
            <div className="card-body">
                <FormButtons {...{ handleAddElement, handleRemoveElement }} />
            </div>
        </div>
    )
}
