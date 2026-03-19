import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'

const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#2563eb" />
    <text x="16" y="21" textAnchor="middle" fill="white" fontSize="16" fontWeight="800" fontFamily="Inter, sans-serif">A</text>
  </svg>
)

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="19" y2="6" />
    <line x1="3" y1="11" x2="19" y2="11" />
    <line x1="3" y1="16" x2="19" y2="16" />
  </svg>
)

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="4" y1="4" x2="18" y2="18" />
    <line x1="18" y1="4" x2="4" y2="18" />
  </svg>
)

export default function Navbar() {
  const location = useLocation()
  const { lang, setLang } = useLang()
  const tr = t[lang]
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)

  const navLinks = [
    { path: '/', label: tr.nav.home },
    { path: '/team', label: tr.nav.team },
    { path: '/products', label: tr.nav.products },
    { path: '/contact', label: tr.nav.contact },
    { path: '/apply', label: tr.nav.apply },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
    background: scrolled
      ? 'rgba(5, 5, 15, 0.85)'
      : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
  }

  const innerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    height: '68px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  }

  const logoTextStyle = {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1,
  }

  const desktopLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  }

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path
    const isHovered = hoveredLink === path
    return {
      padding: '8px 14px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: isActive ? '600' : '500',
      color: isActive ? '#3b82f6' : isHovered ? '#ffffff' : '#d1d5db',
      background: isActive ? 'rgba(37,99,235,0.12)' : isHovered ? 'rgba(255,255,255,0.05)' : 'transparent',
      transition: 'all 0.2s ease',
      textDecoration: 'none',
    }
  }

  const hamburgerStyle = {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '6px',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const mobileMenuStyle = {
    position: 'fixed',
    top: '68px',
    left: 0,
    right: 0,
    background: 'rgba(5, 5, 15, 0.97)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    padding: '12px 24px 20px',
    display: menuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '4px',
    zIndex: 999,
  }

  const langToggleStyle = {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '20px',
    padding: '5px',
    display: 'flex',
    gap: '2px',
    marginLeft: '8px',
    cursor: 'pointer',
  }

  const getLangSpanStyle = (l) => ({
    padding: '4px 10px',
    borderRadius: '14px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    background: lang === l ? '#2563eb' : 'transparent',
    color: lang === l ? 'white' : '#9ca3af',
    userSelect: 'none',
  })

  return (
    <>
      <nav style={navStyle}>
        <div style={innerStyle}>
          <Link to="/" style={logoStyle}>
            <LogoIcon />
            <div style={logoTextStyle}>
              <span style={{ fontSize: '16px', fontWeight: '800', color: 'white', letterSpacing: '-0.02em' }}>
                Able<span style={{ color: '#3b82f6' }}>To</span>
              </span>
              <span style={{ fontSize: '9px', color: '#6b7280', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                accessibility tech
              </span>
            </div>
          </Link>

          <div style={desktopLinksStyle} className="desktop-nav">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={getLinkStyle(link.path)}
                onMouseEnter={() => setHoveredLink(link.path)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
              </Link>
            ))}
            <div style={langToggleStyle}>
              <span style={getLangSpanStyle('en')} onClick={() => setLang('en')}>EN</span>
              <span style={getLangSpanStyle('es')} onClick={() => setLang('es')}>ES</span>
            </div>
          </div>

          <button
            style={{ ...hamburgerStyle, display: 'flex' }}
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <div style={mobileMenuStyle}>
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              padding: '12px 16px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: location.pathname === link.path ? '600' : '500',
              color: location.pathname === link.path ? '#3b82f6' : '#d1d5db',
              background: location.pathname === link.path ? 'rgba(37,99,235,0.1)' : 'transparent',
              textDecoration: 'none',
              display: 'block',
            }}
          >
            {link.label}
          </Link>
        ))}
        <div style={{ ...langToggleStyle, marginLeft: '0', marginTop: '8px', alignSelf: 'flex-start' }}>
          <span style={getLangSpanStyle('en')} onClick={() => setLang('en')}>EN</span>
          <span style={getLangSpanStyle('es')} onClick={() => setLang('es')}>ES</span>
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
