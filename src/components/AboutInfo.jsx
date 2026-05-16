import React from 'react'
import { motion } from 'framer-motion';
import about from "../assets/image/about.jpg";

const AboutInfo = () => {
    return (
        <div className="py-16 container mx-auto">
            {/* left */}
            <div>
                <div className="flex items-center space-x-2 text-lg">
                    <div className="w-1 h-8 bg-black rounded-full"></div>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl font-bold text-gray-900"
                    >
                        Who We Are
                    </motion.h1>
                </div>
                <div className="text-lg text-gray-600">
                    Eejak is a one shop IT solution and software development company with skilled software developers that provides businesses worldwide since Jan 2013. We started with one client but now we have number of clients and 50+ employees and we are fastest growing company and focusing on moving your business ahead.

                    We are a Professional software development company with a focus on web and software solutions that drive digital transformation across verticals. Our technical and business analyst team will take your dream to the next level.
                </div>
                <button href="/about">know more button</button>
            </div>

            {/* right  */}
            <div>
                <img src={about} alt="" />
            </div>
        </div>
    )
}

export default AboutInfo