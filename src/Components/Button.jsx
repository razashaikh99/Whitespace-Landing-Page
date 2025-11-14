import React from 'react'
import rightArrow from '../assets/icons/right-arrow.svg'

export default function Button({ text }) {
    return (
        <div>
            <button className='bg-secondary rounded-lg px-6 py-4 flex justify-center gap-3 cursor-pointer'>
                <p className=''>{text}</p>
                <img src={rightArrow} />
            </button>
        </div>
    )
}
