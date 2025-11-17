import backElement from '../assets/images/background-element.png'
import circleElement from '../assets/images/circle-element.png'
import Button from '../Components/Button'

export default function SecondSection() {
    return (
        <div>
            <div className='w-full h-auto min-h-[700px] pt-10 lg:pt-30 relative'>
                <img
                    className='absolute inset-0 object-cover opacity-20 w-60 md:w-90 pt-20 md:pt-40'
                    src={backElement}
                />
                <div className='relative z-10 mycontainer h-full flex flex-col lg:flex-row justify-between items-center gap-8 py-10 lg:py-20'>
                    <div className='max-w-2xl text-center lg:text-left order-1 lg:order-2 w-full lg:w-1/2'>
                        <div className='text-[#212529] font-bold leading-12 lg:leading-18 text-4xl md:text-5xl lg:text-6xl'>
                            <p>Project <br /> Management</p>
                        </div>
                        <div className='text-[#212529] font-light py-6 md:py-8 lg:py-10 text-lg'>
                            <p>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                        </div>
                        <div className='flex justify-center lg:justify-start'>
                            <Button text="Get Started" />
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 h-64 lg:h-140 bg-[#C4DEFD] order-1 lg:order-2 mb-8 lg:mb-0 flex items-center justify-center'>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto min-h-[700px] py-8 lg:py-20 pb-20'>
                <div className='relative z-10 mycontainer h-full flex flex-col lg:flex-row justify-between items-center gap-8'>
                    <div className='w-full lg:w-1/2 order-1 lg:order-1 mb-8 lg:mb-0'>
                        <img
                            className='w-full max-w-md mx-auto lg:max-w-150'
                            src={circleElement}
                        />
                    </div>
                    <div className='max-w-2xl text-center lg:text-left order-2 lg:order-2 w-full lg:w-1/2'>
                        <div className='text-[#212529] font-bold text-4xl md:text-5xl lg:text-6xl'>
                            <p>Work together</p>
                        </div>
                        <div className='text-[#212529] font-light py-6 md:py-8 lg:py-10 text-lg'>
                            <p>With whitepace, share your notes with your colleagues and collaborate on them.
                                You can also publish a note to the internet and share the URL with others.
                            </p>
                        </div>
                        <div className='flex justify-center lg:justify-start'>
                            <Button text="Try it now" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}