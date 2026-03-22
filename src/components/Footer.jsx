import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'
import ableLogo from '../assets/dotsense_logo.jpeg'

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

export default function Footer() {
  const { lang } = useLang()
  const tr = t[lang]

  const footerStyle = {
    background: 'linear-gradient(180deg, #040e1e 0%, #071629 100%)',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    padding: '60px 0 32px',
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    marginBottom: '48px',
  }

  const linkStyle = {
    display: 'block',
    color: '#9ca3af',
    fontSize: '14px',
    marginBottom: '10px',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  }

  const headingStyle = {
    fontSize: '12px',
    fontWeight: '700',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '16px',
  }

  const navLinks = [
    { path: '/', label: tr.footer.navLinks.home },
    { path: '/team', label: tr.footer.navLinks.team },
    { path: '/products', label: tr.footer.navLinks.products },
    { path: '/store', label: tr.footer.navLinks.store },
    { path: '/contact', label: tr.footer.navLinks.contact },
    { path: '/apply', label: tr.footer.navLinks.apply },
  ]

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img src={ableLogo} alt="AbleTo" style={{ height: '32px', width: '32px', objectFit: 'contain', borderRadius: '6px' }} />
              <span style={{ fontSize: '18px', fontWeight: '800', color: 'white', letterSpacing: '-0.02em' }}>
                Able<span style={{ color: '#3b82f6' }}>To</span>
              </span>
            </div>
            <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.7', maxWidth: '220px' }}>
              {tr.footer.tagline}
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <a
                href="https://www.linkedin.com/company/abletoproject/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px', height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#9ca3af',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#3b82f6'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/able.t0/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px', height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#9ca3af',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#ec4899'; e.currentTarget.style.borderColor = 'rgba(236,72,153,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={headingStyle}>{tr.footer.nav}</p>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={linkStyle}
                onMouseEnter={e => e.target.style.color = '#3b82f6'}
                onMouseLeave={e => e.target.style.color = '#9ca3af'}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Products */}
          <div>
            <p style={headingStyle}>{tr.footer.products}</p>
            <Link
              to="/products"
              style={linkStyle}
              onMouseEnter={e => e.target.style.color = '#3b82f6'}
              onMouseLeave={e => e.target.style.color = '#9ca3af'}
            >
              {tr.footer.product1}
            </Link>
            <Link
              to="/products"
              style={linkStyle}
              onMouseEnter={e => e.target.style.color = '#3b82f6'}
              onMouseLeave={e => e.target.style.color = '#9ca3af'}
            >
              {tr.footer.product2}
            </Link>
          </div>

          {/* Legal */}
          <div>
            <p style={headingStyle}>{tr.footer.legal}</p>
            <Link
              to="/privacy"
              style={linkStyle}
              onMouseEnter={e => e.target.style.color = '#3b82f6'}
              onMouseLeave={e => e.target.style.color = '#9ca3af'}
            >
              {tr.footer.privacy}
            </Link>
            <Link
              to="/terms"
              style={linkStyle}
              onMouseEnter={e => e.target.style.color = '#3b82f6'}
              onMouseLeave={e => e.target.style.color = '#9ca3af'}
            >
              {tr.footer.terms}
            </Link>
            <Link
              to="/cookies"
              style={linkStyle}
              onMouseEnter={e => e.target.style.color = '#3b82f6'}
              onMouseLeave={e => e.target.style.color = '#9ca3af'}
            >
              {tr.footer.cookies}
            </Link>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ color: '#4b5563', fontSize: '13px' }}>
            {tr.footer.copyright}
          </p>
          <p style={{ color: '#4b5563', fontSize: '13px' }}>
            {tr.footer.madeWith} <span style={{ color: '#3b82f6' }}>{tr.footer.madeWithHighlight}</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
