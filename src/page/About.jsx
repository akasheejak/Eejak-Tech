import React from 'react'
import Strategie from '../components/strategie'
import { motion } from 'framer-motion'
import AboutMission from '../components/AboutMission'
import AboutValues from '../components/AboutValues'

const About = () => {
  return (
    <div className="pb-20">
      {/* About Mission */}
      <AboutMission />

      {/* Strategy Section */}
      <Strategie />

      {/* Our Values Section */}
      <AboutValues />
    </div>
  )
}

export default About