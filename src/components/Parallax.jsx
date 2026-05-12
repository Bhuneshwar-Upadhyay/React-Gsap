import React from 'react'

import coffee5 from '../assets/coffee-5.jpg'
import coffee3 from '../assets/coffee-3.jpg'
import coffee2 from '../assets/coffee-2.jpg'

const coldCoffeeCollection = [
    {
        image: coffee5,
        title: "Chilled Coffee Creations",
        description: "Discover our refreshing range of iced coffees, perfectly brewed and served cold for a smooth and energizing experience."
    },
    {
        image: coffee2,
        title: "Ice Brewed Delights",
        description: "A cool collection of rich coffee blends crafted with ice, offering creamy texture and bold flavor in every sip."
    },
    {
        image: coffee3,
        title: "Frozen Sips of Energy",
        description: "Beat the heat with our cold coffee favorites, blended to perfection for a refreshing and delightful coffee moment."
    }
];

const Parallax = () => {

    return (
        <>
            {
                coldCoffeeCollection.map((item) => {
                    return (
                        <div className='flex items-center justify-between relative h-[100vh] bg-black py-20 px-24' style={{ backgroundImage: `url(${item.image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                            <div className='absolute w-full h-full  backdrop-blur-xs left-0 top-0 z-0'></div>
                            <div className='relative z-20 imageBox shadow-xl/30 shadow-gray-900'>
                                <img src={item.image} className='' alt='...' />
                            </div>
                            <div className='relative z-20 contentBox w-1/3 text-xl backdrop-blur-xl text-white py-8 px-8 rounded-2xl'>
                                <h4>{item.title}</h4>
                                <p className='text-sm'>{item.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default Parallax