import React from "react";


export const InputRange = ({currentValue, min, max, handleChange}) => {
    return (
        <input className='form-control' type='range' value={currentValue} min={min} max={max} onChange={handleChange} name='currentValue' />
    )
}

export const InputSelect = ({currentValue, options, handleChange}) => {
    return (
        <>
            <select className='form-control' value={currentValue} onChange={handleChange} name='currentValue'>
                { options.map(value => <option key={value} value={value}>{value}</option>) }
            </select>
        </>

    )
}

export const InputNumber = ({currentValue, min, max, step, handleChange}) => {
    return (
        <input className='form-control' type='number' value={currentValue} min={min} max={max} step={step} onChange={handleChange} name='currentValue' />
    )
}

export const inputTypes = {
    'range': InputRange,
    'select': InputSelect,
    'number': InputNumber
}
