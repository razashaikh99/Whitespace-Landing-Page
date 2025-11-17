import element from '../assets/images/element.png'
import appElement from '../assets/images/app-element.png'
import Button from '../Components/Button'

export default function EighthSection() {
    return (
        <div>
            <div className='pt-15 w-full h-auto min-h-[700px] bg-primary relative text-white'>
                <img
                    className='absolute inset-0 w-full h-full object-cover opacity-90'
                    src={element}
                />
                <div className='relative z-10 mycontainer h-full flex flex-col lg:flex-row justify-between items-center gap-8 py-18'>
                    <div className='max-w-2xl text-center lg:text-left order-2 lg:order-1 py-18 lg:py-0'>
                        <div className='font-bold text-4xl md:text-5xl lg:text-6xl'>
                            <p>Work with Your Favorite Apps Using whitepace</p>
                        </div>
                        <div className='font-light py-6 md:py-8 lg:py-10'>
                            <p>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
                        </div>
                        <div className='flex justify-center lg:justify-start'>
                            <Button text="Read More" />
                        </div>
                    </div>
                    <div>
                        <img className='w-100 md:w-100 lg:w-full' src={appElement} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
