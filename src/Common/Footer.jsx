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
    <div className='bg-primary h-270'>
      <section className='text-white'>
        <div className='pt-20 text-center flex flex-col items-center'>
          <p className='font-bold text-4xl md:text-5xl lg:text-6xl leading-12 lg:leading-20 '>Try Whitepace <br /> Today</p>
          <p className='font-light py-6 md:py-6 lg:py-8 text-xl'>Get started for free. <br />
            Add your whole team as your needs grow.</p>
          <Button text="Try Taskey free" />
          <p className='font-light py-6 md:py-6 lg:py-8 text-xl'>On a big team? Contact sales</p>
          <div className='flex justify-center items-center gap-15'>
            <div>
              <img className='' src={appleLogo} />
            </div>
            <div>
              <img className='' src={windowsLogo} />
            </div>
            <div>
              <img className='' src={androidLogo} />
            </div>
          </div>
        </div>
      </section>
      <section className='text-white'>
        <div className='w-full h-120 pt-30 px-40'>
          <div className='flex justify-center items-start gap-9'>
            <div className='w-full h-75 '>
              <img src={Logo} alt="" />
              <p className='font-light pt-6 text-xl'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>
            <div className='w-full h-75 text-xl leading-11'>
              <p className='font-bold'>Product</p>
              <div className='font-light'>
                <p>Overview</p>
                <p>Pricing</p>
                <p>Customer stories</p>
              </div>
            </div>
            <div className='w-full h-75  text-xl leading-11'>
              <p className='font-bold'>Resources</p>
              <div className='font-light'>
                <p>Blog</p>
                <p>Guides & tutorials</p>
                <p>Help center</p>
              </div>
            </div>
            <div className='w-full h-75  text-xl leading-11'>
              <p className='font-bold'>Company</p>
              <div className='font-light'>
                <p>About Us</p>
                <p>Careers</p>
                <p>Media List</p>
              </div>
            </div>
            <div className='w-full h-75 '>
              <p className='font-bold text-3xl'>Try It Today</p>
              <p className='font-light py-6 text-xl'>Get started for free. <br />
                Add your whole team as your needs grow.</p>
              <Button text="Started Today" />
            </div>
          </div>
          <hr className='opacity-40' />
          <div className=' flex justify-between items-center py-8'>
            <div className='flex justify-center items-center gap-10 text-xl font-light'>
              <div className='flex gap-2'>
                <img src={internetIcon} />
                <p>English</p>
                <img src={downArrow} />
              </div>
              <p>Terms & Privacy</p>
              <p>Security</p>
              <p>Status</p>
              <p>©2025 Whitepace LLC.</p>
            </div>
            <div className=''>
              <img className='w-35' src={socialIcon} />
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
