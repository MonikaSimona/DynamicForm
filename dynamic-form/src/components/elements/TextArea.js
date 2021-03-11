import React from 'react'

export default function TextArea({ handleChange, name, value, rules, default_value, multiple, readonly, placeholder, info, loading }) {
    const [required, min, max, rows, cols] = rules.split('|')
    return (
        <div>
            <textarea
                name={name}
                id={name}
                rows={rows.split(':')[1]}
                minLength={min.split(':')[1]}
                maxLength={max.split(':')[1]}
                cols={cols.split(':')[1]}
                required={required ? true : false}
                readOnly={readonly}
                placeholder={placeholder}
                value={value === null ? '' : value}
                onChange={e =>handleChange(name,e)}
                disabled={loading} />
        </div>
    )
}
