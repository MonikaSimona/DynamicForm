import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Element from './Element'

export default function Form() {
    const [data, setData] = useState([])
    console.log("DATA",data)
    const [elements, setElements] = useState({})
    useEffect(() => {
        axios.get('form.json')
        .then(response => {
            setData(response.data)
        })
    },[])
    
    const handleChange = (field_name,e) =>{
        const newFields = {...data};
        console.log("NEW FIELDS",newFields)
        newFields.form_inputs.forEach((field) => {
            const {name,type} = field;
            if(name === field_name){
                switch(type){
                    case 'checkbox' || 'radio':
                            field['value'] = e.target.checked;
                        
                        break;
                    default:
                        field['value'] = e.target.value
                }
            }
            
            setElements(newFields)
        })
        
        
    }
    
    
    return (
        
        <div>
            <form>
            {data.form_inputs && data.form_inputs.map((field,index) => (
                <div className="form_group">
                <label htmlFor={field.name}>{field.label}</label>
                <Element key={index} field={field} handleChange={handleChange}/>
                </div>
            ))}
            </form>
        </div>
    )
}
