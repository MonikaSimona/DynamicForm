import React from 'react'

export default function Select({ handleChange, name, rules, options, value, default_value, multiple,  info, loading}) {
    
    const [required] = rules.split('|')

    return (
        <select name={name} id={name} value={value === null ? '' : value} onChange={(e) => handleChange(name,e)} required={required ? true : false} disabled={loading} >
            <option value=''>Select {name}:</option>
            {options && options.map((option,index) => (
                <option value={option.value} key={index}>{option.label}</option>
            ))}
        </select>
    )
}
