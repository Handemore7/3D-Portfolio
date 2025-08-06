import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

/**
 * Navigation component with responsive design
 * Features mobile hamburger menu and smooth scrolling to sections
 */
const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');

  /**
   * Handle navigation link clicks
   * @param {string} title - The title of the navigation link
   */
  const handleNavClick = (title) => {
    setActive(title)
    setToggle(false) // Close mobile menu when clicking a link
  }

  /**
   * Close mobile menu when clicking outside
   */
  useEffect(() => {
    const handleClickOutside = () => {
      if (toggle) {
        setToggle(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [toggle])

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Language Selector */}
        <div className="absolute left-4 top-4">
          <select
            value={lang}
            onChange={e => {
              setLang(e.target.value);
              i18n.changeLanguage(e.target.value);
            }}
            className="bg-black text-white px-2 py-1 rounded"
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
        {/* Logo and brand */}
        <Link 
          to='/' 
          className='flex items-center gap-2' 
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }} 
        >
          <img src={logo} alt="Carlos Portfolio Logo" className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            {t('navbar.logoName')} &nbsp;
            <span className='sm:block hidden'>{t('navbar.logoSubtitle')}</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li 
              key={link.id} 
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300`} 
              onClick={() => handleNavClick(link.title)}
            >
              <a href={`#${link.id}`} aria-label={`Navigate to ${t(`navbar.${link.id}`)} section`}>
                {t(`navbar.${link.id}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt={toggle ? t('navbar.closeMenu') : t('navbar.openMenu')} 
            className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={(e) => {
              e.stopPropagation()
              setToggle(!toggle)
            }}
          />
          
          {/* Mobile Menu Dropdown */}
          <div className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li 
                  key={link.id} 
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px] transition-colors duration-300`} 
                  onClick={() => handleNavClick(link.title)}
                >
                  <a 
                    href={`#${link.id}`}
                    aria-label={`Navigate to ${t(`navbar.${link.id}`)} section`}
                  >
                    {t(`navbar.${link.id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar