import React from 'react';
import CategoryItem from './CategoryItem';
import beensBg from '../assets/beensBg.png';

const Category = () => {
    return (
        <div className='relative bg-black px-20 py-14'>
            <div className='absolute top-10 left-0 w-full h-full z-0 opacity-15' style={{ backgroundImage: `url(${beensBg})`, backgroundPosition: 'top center', backgroundSize: '100%' }}></div>
            <div className='grid gap-2.5 grid-cols-4'>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
            </div>
        </div>
    )
}

export default Category