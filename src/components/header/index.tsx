'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuItem {
  label: string
  path: string
}

const SCROLL_OFFSET = 100

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  const menuItems: MenuItem[] = useMemo(
    () => [
      { label: 'Home', path: '/#hero' },
      { label: 'Mission', path: '/#mission' },
      { label: 'Programs', path: '/#programs' },
      { label: 'Visit', path: '/#visit' },
      { label: 'Events', path: '/#events' },
      { label: 'Donate', path: '/#donate' },
      { label: 'Contact', path: '/#contact' },
    ],
    []
  )

  const sections = useMemo(
    () =>
      menuItems.map((item) => item.path.replace('/#', '')).filter((section) => section !== 'hero'),
    [menuItems]
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId)
            return
          }
        }
      }
      if (window.scrollY < SCROLL_OFFSET) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScrollSpy)
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [sections])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  const isActive = (path: string) => {
    const sectionId = path.replace('/#', '')
    if (sectionId === 'hero') return activeSection === ''
    return activeSection === sectionId
  }

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 flex w-full items-center bg-[#f7f4ee]/95 shadow-sm backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'h-[55px]' : 'h-[80px]'
      }`}
    >
      <div className="w-full">
        <div className="mx-auto max-w-[1080px]">
          <div className="flex items-center px-4 transition-all duration-300">
            {/* Logo / wordmark */}
            <div className="flex-1">
              <Link href="/" onClick={handleLinkClick} className="inline-flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`inline-flex items-center justify-center rounded-full bg-[#4a7c3a] text-white transition-all duration-300 ${
                    isScrolled ? 'h-8 w-8 text-[14px]' : 'h-10 w-10 text-[16px]'
                  }`}
                >
                  FoSE
                </span>
                <span
                  className={`font-faustina font-[500] text-[#2d3a26] transition-all duration-300 ${
                    isScrolled ? 'text-[16px]' : 'text-[20px]'
                  }`}
                >
                  Fallout Shelter Ecovillage
                </span>
              </Link>
            </div>

            <div className="flex items-center justify-end">
              {/* Desktop Menu */}
              <nav className="hidden lg:block" aria-label="Primary">
                <ul className="font-lato flex items-center space-x-1 font-[500]">
                  {menuItems.map((item) => (
                    <li key={item.path} className="relative py-6">
                      <Link
                        href={item.path}
                        onClick={handleLinkClick}
                        className={`px-3 py-2 text-[14px] transition-colors duration-200 ${
                          isActive(item.path)
                            ? 'text-[#3f6b34]'
                            : 'text-[#3a4a32] hover:text-[#4a7c3a]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#3a4a32] hover:text-[#4a7c3a] lg:hidden"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <RxCross2 className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`absolute left-0 z-40 w-full overflow-hidden lg:hidden ${
              isScrolled ? 'top-[53px]' : 'top-[77px]'
            }`}
          >
            <div className="mx-auto max-h-[80vh] max-w-[700px] overflow-auto border-t-[3px] border-[#4a7c3a] bg-[#f7f4ee] px-6 py-4 shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      onClick={handleLinkClick}
                      className={`font-lato block rounded-lg px-4 py-2 text-sm font-[500] ${
                        isActive(item.path)
                          ? 'bg-[#e6e0cf] text-[#3f6b34]'
                          : 'text-[#3a4a32] hover:bg-[#ece4d2]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
