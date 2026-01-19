import React from 'react'
import Hero from '../components/Hero'
import TrustedByHealthcare from '../components/health/TrustedByHealthcare'
import OrganizationsSection from '../components/OrganizationsSection'
import HealthcareTrends from '../components/health/HealthcareTrends'
import ClientTestimonial from '../components/ClientTestimonial'
import AIPoweredProfessional from '../components/AIPoweredProfessional'
import Challenges from '../components/health/Challenges'
import Contact from '../components/Contact'
import BuildTogetherCTA from '../components/BuildTogetherCTA'
import DigitalHealthFAQ from '../components/DigitalHealthFAQ'
import {
  Droplet,
  Stethoscope,
  Home,
  ClipboardList,
} from "lucide-react";

const page = () => {
   const items = [
  {
    title: "Hospitals ",
    desc: `Improve care delivery with interoperable EHRs, telemedicine platforms, and AI-supported diagnostics that reduce errors and enhance coordination.`,
    icon: Droplet,
  },
  {
    title: "Pharmaceutical & labs",
    desc: `Improve care delivery with interoperable EHRs, telemedicine platforms, and AI-supported diagnostics that reduce errors and enhance coordination.`,
    icon: Stethoscope,
  },
  {
    title: "Home healthcare providers",
    desc: `Improve care delivery with interoperable EHRs, telemedicine platforms, and AI-supported diagnostics that reduce errors and enhance coordination.`,
    icon: Home,
  },
  {
    title: "Clinical informatics teams",
    desc: `Improve care delivery with interoperable EHRs, telemedicine platforms, and AI-supported diagnostics that reduce errors and enhance coordination.`,
    icon: ClipboardList,
  },
];
const data ={
  tittle :"The New AI-Powered Professional: Disruption Talks With WHO, Verdane & Shopfully",
  desc:"What does it mean to be a professional in the age of AI? Our guests explore how AI is reshaping the way we work—from redefining job roles to leading teams that collaborate with smart tools. With experience spanning public health, tech, and venture capital, they share how to build meaningful innovation in a fast-changing world.",
  src:"./tech.png"


}
const faqs = [
  {
    question: "What is digital health?",
    answer:
      "Digital health refers to the use of digital technologies to improve healthcare delivery, patient engagement, and overall health outcomes.",
  },
  {
    question: "What are examples of digital health solutions?",
    answer:
      "Examples include telemedicine platforms, wearable health devices, remote patient monitoring systems, and AI-powered diagnostics.",
  },
  {
    question: "How does digital health improve patient care?",
    answer:
      "It enables faster access to care, personalized treatment plans, real-time monitoring, and better communication between patients and providers.",
  },
  {
    question: "Is digital health secure?",
    answer:
      "Yes, modern digital health solutions follow strict security, privacy, and compliance standards such as HIPAA and GDPR.",
  },
];
  return (
    <div>
      <Hero tittle="Healthcare Systems" />
      <TrustedByHealthcare />
      <HealthcareTrends />
      <OrganizationsSection items={items} />
      <ClientTestimonial color="gray-100"/>
      <AIPoweredProfessional data={data}/>
      <Challenges/>
      <Contact/>
      <BuildTogetherCTA heading="Drive meaningful change in your healthcare projects" />
      <DigitalHealthFAQ faqs={faqs}/>
    </div>
  )
}

export default page