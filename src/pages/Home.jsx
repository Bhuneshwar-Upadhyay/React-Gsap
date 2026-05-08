import React from 'react'
import Hero from '../components/Hero'
import ActionButton from '../components/ActionButton'
import ProductCard from '../components/ProductCard'
import Category from '../components/Category'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



const Home = () => {
    gsap.registerPlugin(useGSAP);

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


        </>
    )
}

export default Home