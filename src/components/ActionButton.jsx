import React from 'react'

const ActionButton = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className='py-1.5 px-5 rounded-2xl bg-gray-800 text-white' >{text}</button>
    )
}

export default ActionButton