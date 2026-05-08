import React from 'react'
import cup_coffee from '../assets/cup_coffee.png'

const CategoryItem = () => {
    return (
        <div className=' border-amber-700 border rounded-2xl p-4'>
            <img src={cup_coffee} alt='...' className='relative rounded-2xl z-20' />
            <div className='text-2xl text-center text-white'>
                Category 1
            </div>
        </div>
    )
}

export default CategoryItem