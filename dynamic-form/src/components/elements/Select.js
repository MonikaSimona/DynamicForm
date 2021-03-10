import React from 'react'

export default function Select({ handleChange, name, type, value, rules, options, default_value, multiple, readonly, placeholder, info}) {
    console.log(options)
    const [required] = rules.split('|')
    return (
        <select name={name} id={name} onChange={(e) => handleChange(name,e)} required={required ? true : false} >
            <option>Select {name}:</option>
            {options && options.map((option,index) => (
                <option value={option.value} key={index}>{option.label}</option>
            ))}
        </select>
    )
}
