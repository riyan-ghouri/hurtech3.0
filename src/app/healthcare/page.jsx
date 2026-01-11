import React from 'react'
import Hero from '../components/Hero'
import TrustedByHealthcare from '../components/health/TrustedByHealthcare'
import OrganizationsSection from '../components/health/OrganizationsSection'
import HealthcareTrends from '../components/health/HealthcareTrends'
import ClientTestimonial from '../components/ClientTestimonial'
import AIPoweredProfessional from '../components/health/AIPoweredProfessional'
import Challenges from '../components/health/Challenges'
import Contact from '../components/Contact'
import BuildTogetherCTA from '../components/BuildTogetherCTA'
import DigitalHealthFAQ from '../components/health/DigitalHealthFAQ'

const page = () => {
  return (
    <div>
      <Hero tittle="Healthcare Systems" />
      <TrustedByHealthcare />
      <HealthcareTrends />
      <OrganizationsSection />
      <ClientTestimonial color="gray-100"/>
      <AIPoweredProfessional/>
      <Challenges/>
      <Contact/>
      <BuildTogetherCTA heading="Drive meaningful change in your healthcare projects" />
      <DigitalHealthFAQ/>
    </div>
  )
}

export default page