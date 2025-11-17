import Button from '../Components/Button'

export default function FourthSection() {
    return (
        <div>
            <div className='w-full h-[759px]'>
                <div className='mycontainer h-full flex flex-col lg:flex-row justify-between items-center gap-20 py-10'>
                    <div className='w-full lg:w-200 h-64 lg:h-137 bg-background order-2 lg:order-1 mb-8 lg:mb-0'></div>
                    <div className='max-w-2xl text-center lg:text-left order-2 lg:order-1'>
                        <div className='text-[#212529] font-bold text-4xl md:text-5xl lg:text-6xl'>
                            <p>Customise it <br /> to your needs</p>
                        </div>
                        <div className='text-[#212529] font-light py-10 md:py-8 lg:py-10'>
                            <p>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                        </div>
                        <div className='flex justify-center lg:justify-start'>
                            <Button text="Let's Go" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
