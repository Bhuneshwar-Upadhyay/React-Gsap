import React from 'react'
import video from '../assets/CoffeeCup.mp4'

const Video = () => {
    return (
        <video autoPlay muted className='rounded-2xl top-7 left-7 z-50 w-2xl'>
            <source src={video} type="video/mp4" />
        </video>

    )
}

export default Video