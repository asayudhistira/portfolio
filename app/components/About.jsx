import { assets, infoList, toolsViz, toolsScience, toolsOthers } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({ isDarkMode }) => {
  return (
    <motion.section
      id="about"
      className="w-full py-14 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Centered container with wider max width on large screens */}
      <div className="mx-auto w-full max-w-[1200px] lg:max-w-[1400px] xl:max-w-[1600px] px-6 md:px-10">
        {/* Heading */}
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          Introduction
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          About me
        </motion.h2>

        {/* Main section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 my-12"
        >
          {/* Left: photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 justify-self-center"
          >
            <div className="w-64 sm:w-80 lg:w-[360px] rounded-3xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10 shadow-sm">
              <Image src={assets.user_image} alt="user" className="w-full h-auto object-cover" priority />
            </div>
          </motion.div>

          {/* Right: paragraph + boxes + tools */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <p className="mb-8 max-w-none font-Ovo">
              Data analyst with experience improving business processes and decision-making through practical,
              data-driven insights. Skilled in identifying inefficiencies, optimizing workflows, and delivering clear
              recommendations that enhance performance. Strong foundation in business intelligence and data visualization,
              with the ability to connect analytical findings to strategic goals. Experienced in stakeholder collaboration
              and consulting, with a focus on providing sustainable, high-impact solutions.
            </p>

            {/* Old boxes */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 
                  duration-500 hover: shadow-sketch-black dark:border-white dark:hover:shadow-sketch-white dark:hover:bg-dark-hover/50"
                >
                  <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>

                  {/* split description by commas onto new lines */}
                  <p className="text-gray-600 text-sm dark:text-white/80">
                    {description.split(',').map((line, i) => (
                      <span key={i} className="block">
                        {line.trim()}
                      </span>
                    ))}
                  </p>
                </motion.li>
              ))}
            </motion.ul>

            {/* Tools I use — IMAGE GRIDS */}
            <motion.h4
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 mb-4 text-gray-700 font-Ovo dark:text-white/80"
            >
              Tools I use
            </motion.h4>

            {/* Data Visualization */}
            <div className="mb-5">
              <h5 className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60 mb-2">
                Data Visualization
              </h5>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center gap-3 sm:gap-5"
              >
                {toolsViz.map((tool, index) => (
                  <motion.li
                    key={`viz-${index}`}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg 
                    cursor-pointer hover:-translate-y-1 duration-500 bg-white/70 dark:bg-white/50"
                  >
                    <Image src={tool} alt="Tool" className="w-5 sm:w-7 object-contain" />
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Data Science */}
            <div className="mb-5">
              <h5 className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60 mb-2">
                Data Science
              </h5>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap items-center gap-3 sm:gap-5"
              >
                {toolsScience.map((tool, index) => (
                  <motion.li
                    key={`ds-${index}`}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg 
                    cursor-pointer hover:-translate-y-1 duration-500 bg-white/70 dark:bg-white/50"
                  >
                    <Image src={tool} alt="Tool" className="w-5 sm:w-7 object-contain" />
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Others */}
            <div>
              <h5 className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60 mb-2">
                Others
              </h5>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap items-center gap-3 sm:gap-5"
              >
                {toolsOthers.map((tool, index) => (
                  <motion.li
                    key={`other-${index}`}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg 
                    cursor-pointer hover:-translate-y-1 duration-500 bg-white/70 dark:bg-white/50"
                  >
                    <Image src={tool} alt="Tool" className="w-5 sm:w-7 object-contain" />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
