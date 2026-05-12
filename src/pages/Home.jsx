import React, { useRef, useEffect } from 'react'
import Hero from '../components/Hero'
import ActionButton from '../components/ActionButton'
import ProductCard from '../components/ProductCard'
import Category from '../components/Category'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Video from '../components/Video'
import Collections from '../components/Collections'
import MarqueeComponent from '../components/Marquee'
import Parallax from '../components/Parallax'



const Home = () => {

    useGSAP(() => {
        gsap.from('.title', {
            y: 20,
            opacity: 1,
            duration: 1
        });

    }, [])

    return (
        <>
            <Hero />

            <Collections />

            <MarqueeComponent />


            <Parallax />


            <Category />



            <section className='py-24 px-28 bg-zinc-950'>
                <h2 className='title'>New Product</h2>
                <div className='grid grid-cols-4 gap-5 '>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </section>

            <section className='flex px-20 py-24 justify-center items-center bg-amber-950'>
                <Video />
            </section>


        </>
    )
}

export default Home