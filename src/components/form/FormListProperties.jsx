import React from "react";
import {useForm} from "../../hooks/useForm/useForm";
import {inputTypes} from "./inputFields";

export const FormListProperties = ({ filterProps, onChange }) => {
    const filtersKeyValue = Object.entries(filterProps)

    return (
        <ul className="list-group list-group-flush">
            {
                filtersKeyValue.map(([key, filterValue]) => (
                    <li className="list-group-item" key={key}>
                        <FormInput {...{filterKey: key, filterValue, onChange}} />
                    </li>
                ))
            }
        </ul>
    )
}

export const FormInput = ({ filterKey, filterValue, onChange }) => {
    const { type, value } = filterValue

    const [form, handleInputChange] = useForm({ currentValue: value });
    const { currentValue } = form;

    const handleChange = (e) => {
        handleInputChange(e)
        onChange({ filterKey, value: e.target.value })
    }

    const Input = inputTypes[type]

    return (
        <div className='form-group'>
            <label>{filterKey} {currentValue}</label>
            {Input && <Input {...{...filterValue, currentValue, handleChange}} />}
        </div>
    )
}

export const FormButtons = ({ handleAddElement, handleRemoveElement }) => {
    return (
        <div className='buttons'>
            <button type='button' onClick={() => handleAddElement()} className='btn btn-success'>
                Apply
            </button>
            <button type='button' onClick={() => handleRemoveElement()} className='btn btn-link'>
                Delete
            </button>
        </div>
    )
}
