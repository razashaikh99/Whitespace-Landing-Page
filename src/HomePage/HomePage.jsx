import React from 'react'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import HeroSection from '../Sections/HeroSection'
import SecondSection from '../Sections/SecondSection'
import ThirdSection from '../Sections/ThirdSection'
import FourthSection from '../Sections/FourthSection'
import FifthSection from '../Sections/FifthSection'
import SixthSection from '../Sections/SixthSection'
import SeventhSection from '../Sections/SeventhSection'
import EighthSection from '../Sections/EighthSection'
import NinthSection from '../Sections/NinthSection'

export default function HomePage() {
  return (
    <div className=''>
      <Navbar />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <NinthSection />
      <Footer />
    </div>
  )
}
