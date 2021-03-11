import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Element from './Element'

export default function Form() {
    const [data, setData] = useState([])
    const [elements, setElements] = useState({})
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({info:'',success:false})
    useEffect(() => {
        axios.get('form.json')
            .then(response => {
                setData(response.data)
            })
    }, [])

    const handleChange = (field_name, e) => {
        const newFields = { ...data };

        newFields.form_inputs.forEach((field) => {
            const { name, type } = field;
            if (name === field_name) {
                switch (type) {
                    case 'checkbox' && 'radio':
                        field['value'] = e.target.checked;

                        break;
                    default:
                        field['value'] = e.target.value
                }
            }

            setElements(newFields)

        })


    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        let email = ''
        let name = ''
        elements && elements.form_inputs && elements.form_inputs.forEach(element => {
            if (element.value !== null) {
                if (element.type === 'email') {
                    email = element.value;
                }
                if (element.name === 'person_name') {
                    name = element.value;
                }
            }
        })

        const data = {
            "personalizations": [{
                "to": [{
                    "email": email,
                    "name": name
                }],
                "subject": "Message from Simona"
            }],
            "content": [{
                "type": "text/plain",
                "value": `Hello ${name}`
            }],
            "from": {
                "email": "simonovska_simona@outlook.com",
                "name": "Simona Simonovska"
            },
            "reply_to": {
                "email": "simonovska_simona@outlook.com",
                "name": "Simona Simonovska"
            }
        }
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            }
        }

        axios.post('https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send', data, options)
            .then(res => {
                console.log('RESPONSE = ', res)
                setLoading(false)
                setMessage({info:'Success! Message has been sent to your email',success:true})
            })
            .catch(error => {
                console.log('ERROR = ', error.response.statusText)
                setMessage({info:`Failed! Some error ocurred while sending message.. \\ ${error.response.statusText}`,success:false})
                setLoading(false)

            })

    }



    return (
    <>
    
            <div className='form'>
            {message.info !== '' ? <div className={ `${message.success ? ' message success' : ' message fail'}`}>{message.info}</div> : null}
                
                <form onSubmit={handleSubmit} className={`${loading ? 'overlay' : null}`}>
                    {data.form_inputs && data.form_inputs.map((field, index) => (
                        <div className="form_group form_field" key={index}>
                            <label htmlFor={field.name}>{field.label}</label>
                            <Element field={field} handleChange={handleChange} loading={loading} />
                        </div>
                    ))}

                    <button type='submit' disabled={loading}>Save</button>
                </form>
            </div>
            </>
        

    )
}
