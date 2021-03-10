import React from 'react'
import Input from './elements/Input'
import Checkbox from './elements/Checkbox'
import TextaArea from './elements/TextArea'
import Select from './elements/Select'
import Radio from './elements/Radio'


export default function Element({ field : { name, type, value, rules, options, default_value, multiple, readonly, placeholder, info } }) {
    

    switch (type) {
        case 'text':
            return (<Input name={name} type={type} value={value} rules={rules} default_value={default_value} multiple={multiple} readonly={readonly} placeholder={placeholder} info={info} />)
        case 'checkbox':
            return (<Checkbox name={name} type={type} value={value} rules={rules} multiple={multiple} info={info} />)
        case 'radio':
            return (<Radio name={name} type={type} value={value} rules={rules} multiple={multiple} info={info} />)
        case 'textarea':
            return (<TextaArea name={name} type={type} value={value} rules={rules} default_value={default_value} multiple={multiple} readonly={readonly} placeholder={placeholder} info={info} />)
        case 'select':
            return (<Select name={name} type={type} value={value} rules={rules} default_value={default_value} multiple={multiple} readonly={readonly} placeholder={placeholder} options={options} info={info} />)
        default:
            return null;
    }
}
