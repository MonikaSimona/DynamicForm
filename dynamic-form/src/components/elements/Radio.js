import React from 'react'

export default function Radio({handleChange, name,  value, rules, default_value, multiple, info, loading}) {
    const [required] = rules.split('|')
    return (
        
             <input type="radio" name={name} id={name} checked={value === null ? '' : value} required={required ? true : false}  onChange={e =>handleChange(name,e)} defaultChecked={default_value} disabled={loading}/>
       
    )
}
