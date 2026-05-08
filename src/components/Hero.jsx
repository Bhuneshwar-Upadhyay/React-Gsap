import React, { useRef } from 'react'
import ActionButton from './ActionButton';
import heroBg from '../assets/hero-bg.png';
import cup_coffee from '../assets/cup_coffee.png'
import beens from '../assets/beens.png'
import { Features } from './ProductCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Hero = () => {
    const heroRef = useRef();
    useGSAP(
        () => {

            const tl = gsap.timeline();

            tl.from(".hero .coffeeImg", {
                y: 30,
                opacity: 0,
                duration: 1.5,
                ease: 'power2.inOut',
            });
            tl.from(".hero .coffeeBeenImg", {
                y: 35,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
            });
            tl.from(".hero h1", {
                y: 20,
                opacity: 0,
                duration: 1,
            }, "-=1.5")
            tl.from(".hero p", {
                y: 20,
                opacity: 0,
                duration: 1,
            }, "-=.5")
            tl.from(".hero .btnGroup", {
                y: 20,
                opacity: 0,
                duration: 1,
            });
        },
        { scope: heroRef } // 🔥 This fixes most GSAP React issues
    );


    console.log(heroBg)
    let saveHandle = () => {
        alert('Save Clicked');
    }
    return (
        <div ref={heroRef} className='hero flex gap-3.5 w-full h-screen justify-center items-center px-24 bg-amber-950'>
            <div className='relative w-1/3'>
                <img src={cup_coffee} alt='...' className='coffeeImg relative rounded-2xl z-20' />
                <img src={beens} alt='...' className='coffeeBeenImg absolute -bottom-5 -right-4 rotate-90 w-2/3 z-0' />
            </div>
            <div className='relative text-center w-2/3 text-left backdrop-blur-xs px-7 py-7'>
                <img src={beens} alt='...' className='absolute -bottom-5 right-4 rotate-90 w-1/8 z-0' />
                <h1 className='text-6xl text-white font-bold'>Best Deals on <span className='bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent'>Your Favorite</span> Products</h1>
                <p className='text-2xl text-white font-light mt-6'>Discover quality products at prices you’ll love, delivered to your doorstep.</p>

                <div className='btnGroup mt-10 flex gap-3'>
                    <button className="btn px-6 py-3 rounded-lg bg-gray-100 text-black font-semibold hover:bg-gray-200 transition duration-300">
                        Shop Now
                    </button>
                    <button className="btn secondary-btn">
                        Explore Products
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Hero