import React from 'react'
import rightArrow from '../assets/icons/right-arrow.svg'

export default function Button({ text }) {
    return (
        <div>
            <button className='bg-secondary text-white rounded-lg px-6 py-4 flex justify-center gap-3 cursor-pointer transition-all scale-90'>
                <p className=''>{text}</p>
                <img src={rightArrow} />
            </button>
        </div>
    )
}
