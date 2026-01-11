import React from 'react'
import Hero from './components/Hero'
import TechSection from './components/TechSection'
import DigitalCommerce from './components/DigitalCommerce'
import TangibleResults from './components/TangibleResults'
import ClientTestimonial from './components/ClientTestimonial'
import SeamlessIntegrations from './components/SeamlessIntegrations'
import Contact from './components/Contact'
import BuildTogetherCTA from './components/BuildTogetherCTA'
// import Faq from './components/Faq'

const page = () => {
  return (
    < >
     <Hero/>
     <TechSection/>
     <DigitalCommerce/>
     <TangibleResults/>
     <ClientTestimonial/>
     <SeamlessIntegrations/>
     <Contact/>
     <BuildTogetherCTA/>
     {/* <Faq/> */}
    </>
  )
}

export default page