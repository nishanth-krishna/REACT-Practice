import React from 'react'
import grid from './grid.jpeg'

export default function Hero() {
    return(
        <section className='hero'>
            <img src={grid} alt='none' className='grid_img'/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by
            one-of-a-kind hosts-all without leaving home</p>
        </section>
        
    );
}