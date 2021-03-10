import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Element from './Element'

export default function Form() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('form.json')
        .then(response => {
            setData(response.data.form_inputs)
        })
    },[])
    console.log(data[2]);
    return (
        
        <div>
            <form>
            {data && data.map((field,index) => (
                <div className="form_group">
                <label htmlFor={field.name}>{field.label}</label>
                <Element key={index} field={field}/>
                </div>
            ))}
            </form>
        </div>
    )
}
