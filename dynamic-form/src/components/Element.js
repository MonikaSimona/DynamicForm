import React from 'react'
import Input from './elements/Input'
import Checkbox from './elements/Checkbox'
import TextaArea from './elements/TextArea'
import Select from './elements/Select'
import Radio from './elements/Radio'


export default function Element({loading, handleChange, field: { name, type, value, rules, options, default_value, multiple, readonly, placeholder, info } }) {


    switch (type) {
        case 'text':
            return (<Input handleChange={handleChange} name={name} type={type} value={value} rules={rules} default_value={default_value} multiple={multiple} readonly={readonly} placeholder={placeholder} info={info} loading={loading} />)
        case 'email':
            return (<Input handleChange={handleChange} name={name} type={type} value={value} rules={rules} default_value={default_value} multiple={multiple} readonly={readonly} placeholder={placeholder} info={info} loading={loading} />)
        case 'checkbox':
            return (<Checkbox handleChange={handleChange} name={name} value={value} rules={rules} multiple={multiple} info={info} loading={loading} />)
        case 'radio':
            return (<Radio handleChange={handleChange} name={name} type={type} value={value} rules={rules} multiple={multiple} info={info} loading={loading} />)
        case 'textarea':
            return (<TextaArea handleChange={handleChange} name={name}  value={value} rules={rules} default_value={default_value} multiple={multiple} readonly={readonly} placeholder={placeholder} info={info} loading={loading} />)
        case 'select':
            return (<Select handleChange={handleChange} name={name} value={value} rules={rules} default_value={default_value} multiple={multiple} options={options} info={info} loading={loading} />)
        default:
            return null;
    }
}
