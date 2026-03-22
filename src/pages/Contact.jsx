import React, { useState } from 'react'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'
import emailjs from '@emailjs/browser'
import { EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE, EMAILJS_PUBLIC_KEY } from '../config/emailjs'

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)

const CheckCircleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

export default function Contact() {
  const { lang } = useLang()
  const tr = t[lang]

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const contactInfo = [
    {
      icon: <LocationIcon />,
      label: tr.contact.location,
      value: tr.contact.locationVal,
      sub: tr.contact.locationSub,
      color: '#3b82f6',
    },
    {
      icon: <EmailIcon />,
      label: tr.contact.emailLabel,
      value: tr.contact.emailVal,
      sub: '',
      color: '#3b82f6',
      href: `mailto:${tr.contact.emailVal}`,
    },
    {
      icon: <ClockIcon />,
      label: tr.contact.hours,
      value: tr.contact.hoursVal,
      sub: tr.contact.hoursSub,
      color: '#06b6d4',
    },
  ]

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE,
        {
          from_name: `${form.firstName} ${form.lastName}`,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please email us directly at team@abletolab.org')
    } finally {
      setSending(false)
    }
  }

  const inputStyle = (name) => ({
    width: '100%',
    background: focused === name ? 'rgba(37,99,235,0.11)' : 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === name ? 'rgba(37,99,235,0.5)' : 'rgba(255,255,255,0.08)'}`,
    color: 'white',
    borderRadius: '10px',
    padding: '13px 16px',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box',
  })

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontWeight: '600',
    color: '#9ca3af',
    marginBottom: '8px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  }

  return (
    <div style={{
      background: 'linear-gradient(180deg, #040e1e 0%, #071629 50%, #0a1c38 100%)',
      minHeight: '100vh',
      paddingTop: '88px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '5%', left: '-5%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 60%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '-5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 60%)',
          borderRadius: '50%',
        }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px 100px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(37,99,235,0.1)',
            border: '1px solid rgba(37,99,235,0.25)',
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '20px',
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6' }} />
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#3b82f6', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {tr.contact.badge}
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: '800',
            color: 'white',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {tr.contact.title}
            </span>
          </h1>

          <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
            {tr.contact.sub}
          </p>
        </div>

        {/* Main Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 360px',
          gap: '32px',
          alignItems: 'start',
        }} className="contact-grid">
          {/* Form Card */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            padding: '40px',
            backdropFilter: 'blur(10px)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ color: '#3b82f6', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  <CheckCircleIcon />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>
                  {tr.contact.successTitle}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.7, maxWidth: '360px', margin: '0 auto 28px' }}>
                  {tr.contact.successSub}
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' }); }}
                  style={{
                    background: 'rgba(37,99,235,0.1)',
                    border: '1px solid rgba(37,99,235,0.3)',
                    color: '#3b82f6',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontWeight: '600',
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tr.contact.send}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '28px' }}>
                  {tr.contact.send}
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={labelStyle}>{tr.contact.firstName}</label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      onFocus={() => setFocused('firstName')}
                      onBlur={() => setFocused(null)}
                      placeholder="John"
                      required
                      style={inputStyle('firstName')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{tr.contact.lastName}</label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      onFocus={() => setFocused('lastName')}
                      onBlur={() => setFocused(null)}
                      placeholder="Doe"
                      required
                      style={inputStyle('lastName')}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={labelStyle}>{tr.contact.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    placeholder="john@example.com"
                    required
                    style={inputStyle('email')}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={labelStyle}>{tr.contact.subject}</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    placeholder="How can we help?"
                    required
                    style={inputStyle('subject')}
                  />
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label style={labelStyle}>{tr.contact.message}</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder={tr.contact.messagePlaceholder}
                    required
                    rows={5}
                    style={{
                      ...inputStyle('message'),
                      resize: 'vertical',
                      minHeight: '130px',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    width: '100%',
                    background: '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '14px 24px',
                    fontWeight: '600',
                    fontSize: '15px',
                    cursor: sending ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
                    opacity: sending ? 0.7 : 1,
                  }}
                  onMouseEnter={e => { if (!sending) { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,99,235,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)'; } }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.35)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <SendIcon /> {sending ? 'Sending...' : tr.contact.send}
                </button>
                {error && (
                  <p style={{ color: '#f87171', fontSize: '13px', marginTop: '12px', textAlign: 'center' }}>
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Info Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {contactInfo.map(info => (
              <div
                key={info.label}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.2s ease',
                  cursor: info.href ? 'pointer' : 'default',
                }}
                onMouseEnter={e => { if (info.href) { e.currentTarget.style.borderColor = `${info.color}40`; e.currentTarget.style.background = `${info.color}06`; } }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                onClick={() => info.href && window.open(info.href)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${info.color}15`,
                    border: `1px solid ${info.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: info.color,
                    flexShrink: 0,
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                      {info.label}
                    </p>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '2px' }}>
                      {info.value}
                    </p>
                    {info.sub && (
                      <p style={{ fontSize: '12px', color: '#6b7280' }}>
                        {info.sub}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick note */}
            <div style={{
              background: 'rgba(37,99,235,0.13)',
              border: '1px solid rgba(37,99,235,0.15)',
              borderRadius: '16px',
              padding: '20px',
            }}>
              <p style={{ fontSize: '13px', color: '#93c5fd', lineHeight: 1.7 }}>
                <span style={{ fontWeight: '600', color: '#3b82f6' }}>Quick note:</span> For partnership or media inquiries, please mention it in your subject line for faster routing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
