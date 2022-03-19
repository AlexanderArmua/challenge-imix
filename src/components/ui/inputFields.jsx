import React from "react";


export const InputRange = ({currentValue, min, max, handleChange}) => {
    return (
        <input className='form-control' type='range' value={currentValue} min={min} max={max} onChange={handleChange} name='currentValue' />
    )
}

export const InputSelect = ({currentValue, options, handleChange}) => {
    return (
        <>
            {currentValue}
            <select className='form-control' value={currentValue} onChange={handleChange} name='currentValue'>
                { options.map(value => <option key={value} value={value}>{value}</option>) }
            </select>
        </>

    )
}

export const inputTypes = {
    'range': InputRange,
    'select': InputSelect
}
