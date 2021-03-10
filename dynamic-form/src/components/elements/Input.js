import React from 'react'

export default function Input({ name, type, value, rules, default_value, multiple, readonly, placeholder, info}) {
    const [required, min, max] = rules.split('|')
    
    
    return (
        <div>
            <input  
            type={type}
            name={name}
            value={value}
            required={required ? true : false}
            minLength={min.split(':')[1]}
            maxLength={max.split(':')[1]}
            readOnly={readonly}
            placeholder={placeholder}
            

            />
        </div>
    )
}
