import React from 'react'

export default function Input({ handleChange, name, type, value, rules, default_value, multiple, readonly, placeholder, info, loading}) {
    const [required, min, max] = rules.split('|')
    const showInfo = () =>{
        console.log('focus')
    }
    
    return (
        
            <input  
            type={type}
            name={name}
            id={name}
            value={value === null ? '' : value}
            required={required ? true : false}
            minLength={min.split(':')[1]}
            maxLength={max.split(':')[1]}
            readOnly={readonly}
            placeholder={placeholder}
            multiple={multiple}
            pattern={type === 'email' ? ".+@.+.com" : null}
            default_value={default_value}
            onChange={(e)=>handleChange(name,e)}
            onFocus={showInfo}
            disabled={loading}
            />
        
    )
}
