import backElement2 from '../assets/images/background-element-2.png'
import Button from '../Components/Button'

export default function SixthSection() {
    return (
        <div className='bg-primary h-150 relative text-white'>
            <img
                className='absolute opacity-50'
                src={backElement2}
            />
            <div className='relative z-10 mycontainer flex flex-col items-center pt-50'>
                <p className='font-bold text-4xl md:text-5xl lg:text-6xl'>Your work, everywhere you are</p>
                <p className='font-light py-6 md:py-8 lg:py-10'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                <Button text="Try Taskey" />
            </div>
        </div>
    )
}
