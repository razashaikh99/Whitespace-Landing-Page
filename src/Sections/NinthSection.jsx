import blueQuote from '../assets/icons/blue-quote.svg'
import whiteQuote from '../assets/icons/white-quote.svg'
import sliderIcon from '../assets/icons/slider-icon.svg'
import Avatar1 from '../assets/images/avater-1.png'
import Avatar2 from '../assets/images/avater-2.png'
import Avatar3 from '../assets/images/avater-3.png'


export default function NinthSection() {
    return (
        <div className='w-full bg-gray-50 py-10'>
            <div className='text-[#212529] font-bold py-10 md:py-15 lg:py-20 text-center text-4xl md:text-5xl lg:text-6xl'>
                <p>What Our Clients Says</p>
            </div>
            <div className="mycontainer">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center pb-20
                ">
                    <div className="p-6 md:p-8 lg:p-14 w-full max-w-md bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div>
                            <img src={blueQuote} alt="quote" className='w-10 md:w-15 lg:w-22' />
                            <div className='pt-6 md:pt-8'>
                                <p className='font-light text-gray-600 text-sm md:text-base'>
                                    Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
                                </p>
                            </div>
                            <div className='py-6 md:py-8 lg:py-12'>
                                <hr className='border-gray-200' />
                            </div>
                            <div className='flex justify-start items-center gap-4 md:gap-6'>
                                <div>
                                    <img className='w-16 h-16 md:w-20 md:h-20 lg:w-26 lg:h-26 rounded-full' src={Avatar1} alt="Oberon Shaw" />
                                </div>
                                <div>
                                    <p className='font-medium text-lg md:text-xl text-gray-900'>Oberon Shaw, MCH</p>
                                    <p className='pt-1 md:pt-2 font-light text-xs md:text-sm text-gray-500'>Head of Talent Acquisition, North America</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 md:p-8 lg:p-14 w-full max-w-md bg-secondary rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div>
                            <img src={whiteQuote} alt="quote" className='w-10 md:w-15 lg:w-22' />
                            <div className='pt-6 md:pt-8'>
                                <p className='font-light text-white text-sm md:text-base'>
                                    Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
                                </p>
                            </div>
                            <div className='py-6 md:py-8 lg:py-12'>
                                <hr className='border-white/30' />
                            </div>
                            <div className='flex justify-start items-center gap-4 md:gap-6'>
                                <div>
                                    <img className='w-16 h-16 md:w-20 md:h-20 lg:w-26 lg:h-26 rounded-full' src={Avatar2} alt="Oberon Shaw" />
                                </div>
                                <div>
                                    <p className='font-medium text-lg md:text-xl text-primary'>Oberon Shaw, MCH</p>
                                    <p className='pt-1 md:pt-2 font-light text-xs md:text-sm text-white/80'>Head of Talent Acquisition, North America</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 md:p-8 lg:p-14 w-full max-w-md bg-secondary rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div>
                            <img src={whiteQuote} alt="quote" className='w-10 md:w-15 lg:w-22' />
                            <div className='pt-6 md:pt-8'>
                                <p className='font-light text-white text-sm md:text-base'>
                                    Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
                                </p>
                            </div>
                            <div className='py-6 md:py-8 lg:py-12'>
                                <hr className='border-white/30' />
                            </div>
                            <div className='flex justify-start items-center gap-4 md:gap-6'>
                                <div>
                                    <img className='w-16 h-16 md:w-20 md:h-20 lg:w-26 lg:h-26 rounded-full' src={Avatar3} alt="Oberon Shaw" />
                                </div>
                                <div>
                                    <p className='font-medium text-lg md:text-xl text-primary'>Oberon Shaw, MCH</p>
                                    <p className='pt-1 md:pt-2 font-light text-xs md:text-sm text-white/80'>Head of Talent Acquisition, North America</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src={sliderIcon} alt="" />
            </div>
        </div>
    )
}