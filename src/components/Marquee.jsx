import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GoArrowLeft } from "react-icons/go";


const MarqueeComponent = () => {
    window.addEventListener('wheel', (event) => {
        if (event.deltaY < 0) {
            gsap.to('.marquee', {
                transform: 'translateX(-100%)',
                duration: 20,
                ease: "none",
                repeat: -1
            })
            gsap.to('.arrow', {
                rotate: 0
            })

        } else {
            gsap.to('.marquee', {
                transform: 'translateX(100%)',
                duration: 20,
                ease: "none",
                repeat: -1
            })
            gsap.to('.arrow', {
                rotate: 180
            })
        }
    })

    return (
        <div className='relative bg-black py-4 px-24 overflow-hidden'>
            <div className='marquee flex gap-4 items-center text-white uppercase text-4xl'>
                <span className='text-nowrap'>
                    I can be a React component, multiple React components, or just some text.
                </span>
                <span><GoArrowLeft className='arrow text-5xl text-white' /></span>
                <span className='text-nowrap'>
                    I can be a React component, multiple React components, or just some text.
                </span>
                <span><GoArrowLeft className='arrow text-5xl text-white' /></span>
                <span className='text-nowrap'>
                    I can be a React component, multiple React components, or just some text.
                </span>
                <span><GoArrowLeft className='arrow text-5xl text-white' /></span>
                <span className='text-nowrap'>
                    I can be a React component, multiple React components, or just some text.
                </span>
                <span><GoArrowLeft className='arrow text-5xl text-white' /></span>
                <span className='text-nowrap'>
                    I can be a React component, multiple React components, or just some text.
                </span>
            </div>
        </div>
    )
}

export default MarqueeComponent