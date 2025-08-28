import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image 
          src={isDarkMode ? assets.asa_logo_dark : assets.asa_logo} 
          alt='' 
          className='w-36 mx-auto'
        />

        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image 
          src={isDarkMode? assets.mail_icon_dark : assets.mail_icon} 
          alt='' 
          className='w-6'
        />
        torry.yudhistira@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400
      mx-[10%] mt-12 py-6'>
        <p>© 2025 Asa Yudhistira. All rights reserved. </p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li>
                <Image src={assets.github_logo} alt="Github" className="w-5 h-5" />
                <a  
                target='_blank' 
                href='https://github.com/asayudhistira'>Github
                </a>
            </li>
            <li>
                <Image src={assets.linkedin_logo} alt="LinkedIn" className="w-5 h-5" />
                <a  
                target='_blank' 
                href='https://www.linkedin.com/in/asa-yudhistira/'>Linkedin
                </a>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
