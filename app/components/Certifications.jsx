// components/Certifications.jsx
import { assets, certsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Certifications = ({ isDarkMode }) => {
  return (
    <motion.section
      id="certifications"
      className="w-full px-[12%] py-12 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Credentials
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Certifications
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
      </motion.p>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {certsData.map(({ issuerLogo, issuerName, title, link }, idx) => (
          <motion.article
            key={`${issuerName}-${title}-${idx}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="group relative rounded-xl border border-gray-300
                       bg-white/70 dark:bg-white/80
                       ring-1 ring-black/10 dark:ring-white/10
                       shadow-sm hover:shadow-md
                       p-5 flex flex-col gap-4"
          >
            {/* Make the whole card clickable to Coursera */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 rounded-xl"
              aria-label={`${title} – view certificate`}
            />

            {/* Top: Issuer logo + name */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                <Image
                  src={issuerLogo}
                  alt={`${issuerName} logo`}
                  className="max-h-12 object-contain"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-black">
                  {issuerName}
                </h3>
                <p className="text-xs text-gray-700/80 dark:text-black/70">
                  Certification
                </p>
              </div>
            </div>

            {/* Title */}
            <h4 className="text-base sm:text-lg font-medium text-gray-800 dark:text-black leading-snug">
              {title}
            </h4>

            {/* Bottom: Arrow button (explicit Coursera link) */}
            <div className="mt-auto flex justify-end">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 border rounded-full border-black w-10 aspect-square
                           flex items-center justify-center shadow-[2px_2px_0_#000]
                           bg-white group-hover:bg-lime-300 transition"
                aria-label="Open certificate"
              >
                <Image
                  src={assets.send_icon}
                  alt="Open"
                  className="w-5"
                />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Certifications
