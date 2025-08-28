import { assets, projectsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react'

const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  const SHOW_COUNT = 6 // 3 per row * 2 rows
  const hasMore = projectsData.length > SHOW_COUNT
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, SHOW_COUNT)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Headings */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
      </motion.p>

      {/* Project cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
      >
        {visibleProjects.map(
          ({ companyLogo, title, description, github, presentation, achievements = [], nda }, index) => (
            <motion.div
              key={`${title}-${index}`}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col border border-gray-300 rounded-xl px-8 py-10 
                         hover:shadow-sketch-black dark:border-white/30 dark:hover:shadow-sketch-white
                         bg-white/70 dark:bg-white/5 hover:bg-light-hover dark:hover:bg-dark-hover/70
                         transition duration-500"
              layout
            >
              {/* top content */}
              <div className="flex-1 flex flex-col items-center text-center">
                {/* company logo (bigger) */}
                <div className="w-28 h-28 flex items-center justify-center mb-5">
                  <Image
                    src={companyLogo}
                    alt={`${title} logo`}
                    className="max-h-24 object-contain"
                  />
                </div>

                {/* title + NDA badge */}
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
                  {nda && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/10 dark:bg-white/20 text-black/70 dark:text-white/80">
                      Confidential
                    </span>
                  )}
                </div>

                {/* description */}
                <p className="text-sm text-gray-600 leading-5 dark:text-white/80 mb-4">
                  {description}
                </p>

                {/* achievements */}
                {achievements.length > 0 && (
                  <ul className="text-left text-sm text-gray-700 dark:text-white/85 space-y-1">
                    {achievements.map((a, i) => (
                      <li key={i} className="flex gap-2">
                        <span aria-hidden>✓</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* actions pinned at bottom */}
              {(github || presentation) && (
                <div className="flex gap-3 mt-auto pt-5 justify-center">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium rounded-md
                                 bg-indigo-600 text-white hover:bg-indigo-700
                                 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
                    >
                      GitHub
                    </a>
                  )}
                  {presentation && (
                    <a
                      href={presentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium rounded-md
                                 border border-gray-300 text-gray-800 hover:bg-white
                                 dark:border-white/30 dark:text-white dark:hover:bg-white/10 transition"
                    >
                      Presentation
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          )
        )}
      </motion.div>

      {/* Show more / less */}
      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="px-5 py-2.5 rounded-md text-sm font-medium
                       bg-black/80 text-white hover:bg-black
                       dark:bg-white/80 dark:text-black dark:hover:bg-white
                       transition"
          >
            {showAll ? 'Show less' : 'Show more'}
          </button>
        </div>
      )}
    </motion.div>
  )
}

export default Projects
