import element from '../assets/images/element.png'
import Button from '../Components/Button'

export default function HeroSection() {
  return (
    <div>
      <div className='w-full h-auto min-h-[700px] bg-primary relative text-white'>
        <img
          className='absolute inset-0 w-full h-full object-cover opacity-70'
          src={element}
        />
        <div className='relative z-10 mycontainer h-full flex flex-col lg:flex-row justify-between items-center gap-8 py-10'>
          <div className='max-w-2xl text-center lg:text-left order-2 lg:order-1'>
            <div className='font-bold text-4xl md:text-5xl lg:text-6xl'>
              <p>Get More Done with whitepace</p>
            </div>
            <div className='font-light py-6 md:py-8 lg:py-10'>
              <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
            </div>
            <div className='flex justify-center lg:justify-start'>
              <Button text="Try Whitepace free" />
            </div>
          </div>
          <div className='w-full lg:w-200 h-64 lg:h-137 bg-[#C4DEFD] order-2 lg:order-1 mb-8 lg:mb-0'></div>
        </div>
      </div>
    </div>
  )
}