import React from 'react'

const Input = ({type, placeholder}) => {
    return (
        <input type={type} placeholder={placeholder} className="border-2 border-blue-500 px-3 focus:outline-0 focus:ring focus:ring-blue-600 text-neutral-600 py-2 w-full rounded-10 placeholder:capitalize text-sm" />
    )
}

export default Input;
