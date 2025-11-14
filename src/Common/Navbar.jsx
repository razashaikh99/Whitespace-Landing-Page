import { useState } from 'react'
import Logo from '../../public/logo/logo.png'
import Button from '../Components/Button'
import downArrow from '../assets/icons/down-arrow.svg'
import menuIcon from '../assets/icons/menu-icon.svg'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
            <div className='mycontainer bg-primary text-white w-full h-[92px] flex justify-between items-center'>
                <div className='w-auto'>
                    <img
                        className='cursor-pointer w-30 md:w-40 lg:w-full'
                        src={Logo}
                        alt="Logo"
                    />
                </div>
                <div className='hidden xl:flex justify-center items-center gap-8'>
                    <div className='flex justify-center gap-8'>
                        <div className='flex justify-center items-center gap-4 cursor-pointer'>
                            <p>Products</p>
                            <img className='h-1.5' src={downArrow} alt="arrow" />
                        </div>
                        <div className='flex justify-center items-center gap-4 cursor-pointer'>
                            <p>Solutions</p>
                            <img className='h-1.5' src={downArrow} alt="arrow" />
                        </div>
                        <div className='flex justify-center items-center gap-4 cursor-pointer'>
                            <p>Resources</p>
                            <img className='h-1.5' src={downArrow} alt="arrow" />
                        </div>
                        <div className='flex justify-center items-center gap-4 cursor-pointer'>
                            <p>Pricing</p>
                            <img className='h-1.5' src={downArrow} alt="arrow" />
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <button className='bg-accent rounded-lg px-10 py-4 text-primary cursor-pointer'>Login</button>
                        <Button text="Try Whitepace free" />
                    </div>
                </div>
                <div className='hidden lg:flex xl:hidden items-center gap-4'>
                    <div className='flex gap-4'>
                        <button className='bg-accent rounded-lg px-6 py-3 text-primary text-sm cursor-pointer'>Login</button>
                        <Button text="Try Whitepace free" />
                    </div>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img src={menuIcon} alt="menu" className="w-6 h-6 cursor-pointer" />
                    </button>
                </div>
                <button className='hidden md:flex lg:hidden'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <img src={menuIcon} alt="menu" className="w-6 h-6 cursor-pointer" />
                </button>
                <button className='flex md:hidden'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <img src={menuIcon} alt="menu" className="w-6 h-6 cursor-pointer" />
                </button>
            </div>
            {isMenuOpen && (
                <div className='lg:block xl:hidden bg-primary text-white py-6 px-4 space-y-6'>
                    <div className='flex flex-col space-y-4'>
                        <div className='flex justify-between items-center border-b border-white/20 pb-2 cursor-pointer'>
                            <p>Products</p>
                            <img className='h-1.5' src={downArrow} alt="arrow" />
                        </div>
                        <div className='flex justify-between items-center border-b border-white/20 pb-2 cursor-pointer'>
                            <p>Solutions</p>
                            <img className='h-1.5' src={downArrow} alt="arrow" />
                        </div>
                        <div className='flex justify-between items-center border-b border-white/20 pb-2 cursor-pointer'>
                            <p>Resources</p>
                            <img className='h-1.5' src={downArrow} alt="arrow" />
                        </div>
                        <div className='flex justify-between items-center border-b border-white/20 pb-2 cursor-pointer'>
                            <p>Pricing</p>
                            <img className='h-1.5' src={downArrow} alt="arrow" />
                        </div>
                    </div>
                    <div className='flex justify-center gap-4 pt-4 lg:hidden'>
                        <button className='bg-accent rounded-lg px-6 py-3 text-primary w-full text-center font-semibold cursor-pointer'>
                            Login
                        </button>
                        <div className='w-full'>
                            <Button text="Try Whitepace free" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}