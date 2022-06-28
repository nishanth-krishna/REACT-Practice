import React from 'react'
import logo from './logo.png'


export default function Navbar() {
    return(
        <div>
            <nav>
            <img src={logo} className='logo' alt='none' />
            </nav>
        </div>
    );
}