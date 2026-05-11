import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const MarqueeComponent = () => {
    useGSAP(() => {
        gsap.to('.marquee', {
            x: '-100%',
            duration: 10,
            ease: "none",
            repeat: -1,
            yoyo: true
        });

    }, [])

    return (
        <div className='relative bg-black py-4 px-24 overflow-hidden'>
            <div className='marquee flex gap-2 text-white uppercase text-2xl'>
                <span className='text-nowrap'>
                    I can be a React component, multiple React components, or just some text.
                </span>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                    <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className='text-nowrap'>
                    I can be a React component, multiple React components, or just some text.
                </span>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                    <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className='text-nowrap'>
                    I can be a React component, multiple React components, or just some text.
                </span>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                    <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className='text-nowrap'>
                    I can be a React component, multiple React components, or just some text.
                </span>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                    <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className='text-nowrap'>
                    I can be a React component, multiple React components, or just some text.
                </span>
            </div>
        </div>
    )
}

export default MarqueeComponent