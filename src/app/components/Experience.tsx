'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Bennett, Coleman & Co. Ltd.',
    position: 'Assistant Manager',
    duration: '2023 - Present',
    description: 'Developend and maintained innovative web applications with team of developers and maintained the cloud architecture.',
  },
  {
    company: 'Bennett, Coleman & Co. Ltd.',
    position: 'Senior Officer',
    duration: '2021 - 2023',
    description: 'Developed and maintained multiple client projects using React, Next.js, Node.js and gathered hands on experience in AWS.',
  },
]

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gray-800 rounded-lg p-8 shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-700 rounded-lg p-4"
          >
            <h3 className="text-xl font-semibold">{exp.company}</h3>
            <p className="text-gray-100">{exp.position}</p>
            <p className="text-sm text-gray-200">{exp.duration}</p>
            <p className="mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}