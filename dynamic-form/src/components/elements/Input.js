import React from 'react'

export default function Input({ handleChange, name, type, value, rules, default_value, multiple, readonly, placeholder, info}) {
    const [required, min, max] = rules.split('|')
    
    
    return (
        
            <input  

            type={type}
            name={name}
            id={name}
            value={value}
            required={required ? true : false}
            minLength={min.split(':')[1]}
            maxLength={max.split(':')[1]}
            readOnly={readonly}
            placeholder={placeholder}
            multiple={multiple}
            default_value={default_value}
            onChange={(e)=>handleChange(name,e)}

            />
        
    )
}
