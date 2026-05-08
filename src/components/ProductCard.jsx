import React, { useState } from 'react'
import product1 from '../assets/product-1.jpg'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdCompareArrows, MdOutlineSearch } from "react-icons/md";


const ProductCard = () => {
    return (
        <div className='relative text-gray-500'>
            <div>
                <img src={product1} className='rounded-2xl' alt='' />
                <Features />
            </div>
            <div className='py-2 text-gray-400 text-center'>
                <p className='text-xs mb-2'>Caregory</p>
                <h4 className='text-xl mb-2'>Product Title</h4>
                <p>Rs. 399</p>
                <button className='text-xs py-3 px-4 mt-5 w-full text-center border border-zinc-600 rounded hover:bg-zinc-900 cursor-pointer'>ADD TO CART</button>
            </div>
        </div>
    )
}

export const Features = () => {
    const [wishlist, setWishlist] = useState(false);
    return (
        <ul className='absolute top-2.5 right-2.5 z-10 flex gap-1 flex-col text-2xl text-white'>
            <li onClick={() => setWishlist(!wishlist)}>{wishlist ? <FaHeart className='text-red-500' /> : <FaRegHeart />}</li>
            <li><MdCompareArrows /></li>
            <li><MdOutlineSearch /></li>
        </ul>
    )
}

export default ProductCard