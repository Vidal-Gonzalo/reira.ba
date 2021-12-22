import React, { useState } from 'react'

export default function Form() {
    
    const [ values, setValues ] = useState({
        name: '',
        lastname: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values)
    }
    
    return (
        <form className='container m-5' onSubmit={handleSubmit}>
            <input 
                onChange={handleInputChange}
                name="name"
                value={values.name}
                className='form-control my-2'
                type='text'
                placeholder='Nombre'
            />
            <hr />
            <input 
                onChange={handleInputChange}
                name="lastname"
                value={values.lastname}
                className='form-control my-2'
                type='text'
                placeholder='Apellido'
            />
            <hr />
            <input 
                onChange={handleInputChange}
                name="email"
                value={values.email}
                className='form-control my-2'
                type='email'
                placeholder='E-mail'
            />
        </form>
    )
}
