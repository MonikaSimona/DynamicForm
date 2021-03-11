import React from 'react'

export default function Checkbox({handleChange, name,  value, rules, default_value, multiple, info, loading}) {
    const [required] = rules.split('|')
    
    return (
        
            <input type="checkbox" name={name} id={name} checked={value === null ? '' : value} required={required !== 'null'  ? true : false} onChange={e =>handleChange(name,e)} defaultChecked={default_value} disabled={loading}/>
        
    )
}
