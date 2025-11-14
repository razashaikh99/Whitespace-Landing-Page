import Button from '../Components/Button'

export default function ThirdSection() {
    return (
        <div className='w-full h-[759px] bg-primary'>
            <div className='mycontainer h-full flex flex-col lg:flex-row justify-between items-center gap-8 py-10'>
                <div className='max-w-2xl text-center lg:text-left order-2 lg:order-1'>
                    <div className='text-white font-bold text-4xl md:text-5xl lg:text-6xl'>
                        <p>Use as Extension</p>
                    </div>
                    <div className='text-white font-light py-10 md:py-8 lg:py-10'>
                        <p>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <Button text="Let's Go" />
                    </div>
                </div>
                <div className='w-full lg:w-200 h-64 lg:h-137 bg-[#C4DEFD] order-2 lg:order-1 mb-8 lg:mb-0'></div>
            </div>
        </div>
    )
}
