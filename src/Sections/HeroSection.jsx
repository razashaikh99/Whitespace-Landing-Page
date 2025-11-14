import element from '../assets/images/element.png'
import Button from '../Components/Button'

export default function HeroSection() {
  return (
    <div>
      <div className='w-full h-[700px] bg-primary relative text-white'>
        <img
          className='absolute inset-0 w-full h-full object-cover opacity-70'
          src={element}
        />
        <div className='relative z-10 mycontainer h-full flex justify-between items-center gap-8'>
          <div className='max-w-2xl'>
            <div className='font-bold text-6xl'>
              <p>Get More Done with whitepace</p>
            </div>
            <div className='font-medium py-10'>
              <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
            </div>
            <Button text="Try Whitepace free" />
          </div>
          <div className='w-200 h-137 bg-[#C4DEFD]'></div>
        </div>
      </div>
    </div>
  )
}
