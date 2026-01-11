import React from 'react'
import Hero from '../components/Hero'
import TrustedByHealthcare from '../components/health/TrustedByHealthcare'
import OrganizationsSection from '../components/health/OrganizationsSection'
import HealthcareTrends from '../components/health/HealthcareTrends'
import ClientTestimonial from '../components/ClientTestimonial'
import AIPoweredProfessional from '../components/health/AIPoweredProfessional'

const page = () => {
  const items = [1, 2, 3, 4]
  return (
    <div>
      <Hero tittle="Healthcare Systems" />
      <TrustedByHealthcare />
      <HealthcareTrends />
      <OrganizationsSection />
      <ClientTestimonial color="gray-100"/>
      <AIPoweredProfessional/>
    </div>
  )
}

export default page