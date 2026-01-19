import React from 'react'
import Hero from '../components/Hero'
import TrustedByHealthcare from '../components/health/TrustedByHealthcare'
import {
  GraduationCap,
  Presentation,
  Atom,
  Languages,
} from "lucide-react";
import ClientTestimonial from '../components/ClientTestimonial'
import AIPoweredProfessional from '../components/AIPoweredProfessional'
import Challenges from '../components/health/Challenges'
import Contact from '../components/Contact'
import BuildTogetherCTA from '../components/BuildTogetherCTA'
import DigitalHealthFAQ from '../components/DigitalHealthFAQ'
import TechcareTrends from '../components/tech/TechcareTrends'
import OrganizationsSection from '../components/OrganizationsSection'

const page = () => {
  const items = [
  {
    title: "Edtech Platforms",
    desc: `Build scalable online learning tools, interactive courses, and AI-powered analytics to enhance student engagement and learning outcomes.`,
    icon: GraduationCap,
  },
  {
    title: "Software & SaaS Companies",
    desc: `Develop cloud-based platforms, automate workflows, and implement robust software solutions that improve efficiency and user experience.`,
    icon: Presentation,
  },
  {
    title: "Tech Startups",
    desc: `Launch innovative products quickly, integrate modern tech stacks, and use analytics to optimize performance and market fit.`,
    icon: Atom,
  },
  {
    title: "IT & Development Teams",
    desc: `Design and maintain scalable systems, ensure data security, and leverage cutting-edge technologies for rapid development and deployment.`,
    icon: Languages,
  },
];

const data = {
  title: "From Concept to Launch: Tech in Action",
  desc: "What does it take to succeed in the tech world today? Our experts explore how technology is transforming industries—from building scalable software to leading digital innovation. With experience across software development, cloud platforms, and emerging tech, they share insights on creating impactful solutions in a fast-paced environment.",
  src: "./tech.png"
}

const faqs = [
  {
    question: "What is a tech product?",
    answer:
      "A tech product is any software, app, or platform designed to solve a problem or improve a process using technology.",
  },
  {
    question: "Why start with a simple version?",
    answer:
      "Starting simple allows you to test the core idea quickly, gather user feedback, and avoid building unnecessary features.",
  },
  {
    question: "What are examples of tech solutions?",
    answer:
      "Examples include mobile apps, web platforms, automation tools, analytics dashboards, and AI-powered software.",
  },
  {
    question: "How does tech improve user experience?",
    answer:
      "Technology enables faster access, personalized experiences, automation, and better communication between users and systems.",
  },
  {
    question: "Is technology safe to use?",
    answer:
      "Yes, modern tech products follow strict security and privacy standards to protect user data and ensure compliance.",
  },
];

  return (
    <div>
      <Hero src={data.src} tittle="Education With Edtech" />
      <TrustedByHealthcare />
      <TechcareTrends />
      <OrganizationsSection items={items} />
      <ClientTestimonial color="gray-100"/>
      <AIPoweredProfessional data={data}/>
      <Challenges/>
      <Contact/>
      <BuildTogetherCTA heading="Accelerate your edtech projects" />
      <DigitalHealthFAQ faqs={faqs}/>
    </div>
  )
}

export default page