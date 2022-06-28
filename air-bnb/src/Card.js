import React from 'react'
import star from './star.png'

export default function Card(props) {
    return(
        <div className='card'>
            <img src={props.img} alt='none' className='lol'/>
            <div className='card_stats'>
                <img src={star} alt='none' className='star'/>
                <span>{props.rating}</span>
                <span> ({props.review_count}) . </span>
                <span>{props.country}</span>
            </div>
            <p>{props.name}</p>
            <p><span className='strong'>From ${props.price}</span> / person</p>
        </div>
    );
}