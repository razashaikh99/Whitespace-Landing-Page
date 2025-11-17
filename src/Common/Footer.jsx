import Button from '../Components/Button'
import appleLogo from '../assets/images/apple-white-logo.png'
import windowsLogo from '../assets/images/windows-logo.png'
import androidLogo from '../assets/images/android-logo.png'
import downArrow from '../assets/icons/down-arrow.svg'
import internetIcon from '../assets/icons/internet-icon.svg'
import socialIcon from '../assets/icons/social-icon.svg'
import Logo from '../../public/logo/logo.png'

export default function Footer() {
  return (
    <div className='bg-primary'>
      <section className='text-white py-16 md:py-20 lg:py-24'>
        <div className='mycontainer text-center flex flex-col items-center'>
          <p className='font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight lg:leading-20'>
            Try Whitepace <br /> Today
          </p>
          <p className='font-light py-6 md:py-6 lg:py-8 text-lg md:text-xl max-w-2xl'>
            Get started for free. <br />
            Add your whole team as your needs grow.
          </p>
          <Button text="Try Taskey free" />
          <p className='font-light py-6 md:py-6 lg:py-8 text-lg md:text-xl'>
            On a big team? Contact sales
          </p>
          <div className='flex justify-center items-center gap-6 md:gap-10 lg:gap-15 mt-4'>
            <div>
              <img className='w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12' src={appleLogo} alt="Apple" />
            </div>
            <div>
              <img className='w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12' src={windowsLogo} alt="Windows" />
            </div>
            <div>
              <img className='w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12' src={androidLogo} alt="Android" />
            </div>
          </div>
        </div>
      </section>
      <section className='text-white'>
        <div className='mycontainer py-12 lg:py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 justify-items-start
          '>
            <div className=''>
              <img src={Logo} alt="Whitepace Logo" className='w-32 md:w-40 lg:w-48' />
              <p className='font-light pt-4 md:pt-6 text-base md:text-lg lg:text-xl max-w-md'>
                whitepace was created for the new ways we live and work. We make a better workspace around the world
              </p>
            </div>
            <div className='text-lg md:text-xl leading-8 md:leading-11'>
              <p className='font-bold mb-4'>Product</p>
              <div className='font-light space-y-2 md:space-y-3'>
                <p className='hover:text-gray-300 cursor-pointer'>Overview</p>
                <p className='hover:text-gray-300 cursor-pointer'>Pricing</p>
                <p className='hover:text-gray-300 cursor-pointer'>Customer stories</p>
              </div>
            </div>
            <div className='text-lg md:text-xl leading-8 md:leading-11'>
              <p className='font-bold mb-4'>Resources</p>
              <div className='font-light space-y-2 md:space-y-3'>
                <p className='hover:text-gray-300 cursor-pointer'>Blog</p>
                <p className='hover:text-gray-300 cursor-pointer'>Guides & tutorials</p>
                <p className='hover:text-gray-300 cursor-pointer'>Help center</p>
              </div>
            </div>
            <div className='text-lg md:text-xl leading-8 md:leading-11'>
              <p className='font-bold mb-4'>Company</p>
              <div className='font-light space-y-2 md:space-y-3'>
                <p className='hover:text-gray-300 cursor-pointer'>About Us</p>
                <p className='hover:text-gray-300 cursor-pointer'>Careers</p>
                <p className='hover:text-gray-300 cursor-pointer'>Media List</p>
              </div>
            </div>
            <div className='md:col-span-2 lg:col-span-1'>
              <p className='font-bold text-2xl md:text-3xl mb-4'>Try It Today</p>
              <p className='font-light pb-4 md:pb-6 text-base md:text-lg lg:text-xl'>
                Get started for free. <br />
                Add your whole team as your needs grow.
              </p>
              <Button text="Started Today" />
            </div>
          </div>
          <hr className='opacity-40 my-8 md:my-12' />
          <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 py-4
          '>
            <div className='flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 lg:gap-8 text-sm md:text-base lg:text-lg font-light
            '>
              <div className='flex items-center gap-2 cursor-pointer hover:text-gray-300'>
                <img src={internetIcon} alt="Language" className='w-4 h-4' />
                <p>English</p>
                <img src={downArrow} alt="Dropdown" className='w-3 h-3' />
              </div>
              <p className='cursor-pointer hover:text-gray-300'>Terms & Privacy</p>
              <p className='cursor-pointer hover:text-gray-300'>Security</p>
              <p className='cursor-pointer hover:text-gray-300'>Status</p>
              <p className='text-white/80'>©2025 Whitepace LLC.</p>
            </div>
            <div className=''>
              <img className='w-28 md:w-32 lg:w-35' src={socialIcon} alt="Social Media" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}