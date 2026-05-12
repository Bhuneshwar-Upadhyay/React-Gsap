import React from 'react'
import image1 from '../assets/coffee-cup1.jpg'
import image2 from '../assets/coffee-cup2.jpg'
import image3 from '../assets/coffee-cup3.jpg'
import image5 from '../assets/coffee-4.png'
import { Link } from 'react-router'
import { GoArrowLeft } from "react-icons/go";

const Collections = () => {
    return (
        <div className='relative py-20 px-24 bg-amber-900'>
            <div className='grid grid-cols-6 gap-4'>
                <div className='collectionItem col-span-2 bg-linear-to-bl from-amber-600 to-amber-800'>
                    <h4>Espresso</h4>
                    <p>A bold and concentrated coffee shot with a rich aroma and intense flavor for true coffee lovers.</p>
                    <Link to="/" className='flex items-center text-sm text-white px-4 py-1 mt-4 rounded-2xl border border-white-600 inline-block hover:text-amber-700 hover:bg-amber-50 transition-all' >Buy Now</Link>
                    <img src={image5} alt='...' className='absolute bottom-0 right-0 w-[150px] z-0' />
                </div>
                <div className='collectionItem col-span-2 bg-zinc-900' style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover' }}>

                </div>
                <div className='collectionItem col-span-2 bg-linear-to-bl from-amber-600 to-amber-800'>
                    <h4>Americano</h4>
                    <p>Smooth espresso blended with hot water, delivering a mild yet satisfying coffee experience.</p>
                    <Link to="/" className='flex items-center text-sm text-white px-4 py-1 mt-4 rounded-2xl border border-white-600 inline-block hover:text-amber-700 hover:bg-amber-50 transition-all' >Buy Now</Link>
                    <img src={image5} alt='...' className='absolute bottom-0 right-0  w-[150px] z-0' />
                </div>
                <div className='collectionItem col-span-2 bg-zinc-900' style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover' }}>

                </div>
                <div className='collectionItem col-span-2 bg-linear-to-bl from-amber-600 to-amber-800'>
                    <h4>Latte</h4>
                    <p>Velvety steamed milk mixed with espresso, offering a soft and comforting coffee flavor.</p>
                    <Link to="/" className='flex items-center text-sm text-white px-4 py-1 mt-4 rounded-2xl border border-white-600 inline-block hover:text-amber-700 hover:bg-amber-50 transition-all' >Buy Now</Link>
                    <img src={image5} alt='...' className='absolute bottom-0 right-0  w-[150px] z-0' />
                </div>
                <div className='collectionItem col-span-2 bg-zinc-900' style={{ backgroundImage: `url(${image3})`, backgroundSize: 'cover' }}>

                </div>
            </div>
        </div>
    )
}

export default Collections