import Button from '../Components/Button'
import Element from '../assets/images/seventh-element.png'
import AppleLogo from '../assets/images/apple.png'
import MicrosoftLogo from '../assets/images/microsoft.png'
import SlackLogo from '../assets/images/slack.png'
import GoogleLogo from '../assets/images/google.png'

export default function SeventhSection() {
    return (
        <div>
            <div className='w-full h-auto min-h-[700px] py-8 lg:py-20 pb-20'>
                <div className='relative z-10 mycontainer h-full flex flex-col lg:flex-row justify-between items-center gap-8'>
                    <div className='w-full lg:w-1/2 order-1 lg:order-1 mb-8 lg:mb-0'>
                        <img
                            className='w-full max-w-md mx-auto lg:max-w-150'
                            src={Element}
                        />
                    </div>
                    <div className='max-w-2xl text-center lg:text-left order-2 lg:order-2 w-full lg:w-1/2'>
                        <div className='text-[#212529] font-bold text-4xl md:text-5xl lg:text-6xl'>
                            <p>100% your data</p>
                        </div>
                        <div className='text-[#212529] font-light py-6 md:py-8 lg:py-10 text-lg'>
                            <p>The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
                            </p>
                        </div>
                        <div className='flex justify-center lg:justify-start'>
                            <Button text="Read More" />
                        </div>
                    </div>
                </div>
                <div className='text-[#212529] font-bold pt-20 md:pt-28 lg:pt-35 text-center text-4xl md:text-5xl lg:text-6xl'>
                    <p>Our sponsors</p>
                </div>
                <div className='mycontainer py-15 md:py-20 lg:py-25 flex justify-between items-center gap-10'>
                    <img className='' src={AppleLogo} />
                    <img className='' src={MicrosoftLogo} />
                    <img className='' src={SlackLogo} />
                    <img className='' src={GoogleLogo} />
                </div>
            </div>
        </div>
    )
}
