import React from 'react'
import Hero from '@/components/home-page/Hero'
import Mission from '@/components/home-page/Mission'
import Programs from '@/components/home-page/Programs'
import Visit from '@/components/home-page/Visit'
import Events from '@/components/home-page/Events'
import DonateCTA from '@/components/home-page/DonateCTA'
import Contact from '@/components/home-page/Contact'

const HomePage = () => {
  return (
    <main id="main">
      <Hero />
      <Mission />
      <Programs />
      <Visit />
      <Events />
      <DonateCTA />
      <Contact />
    </main>
  )
}

export default HomePage
