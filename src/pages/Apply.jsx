import React, { useState } from 'react'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'
import emailjs from '@emailjs/browser'
import { EMAILJS_SERVICE_ID, EMAILJS_APPLY_TEMPLATE, EMAILJS_PUBLIC_KEY } from '../config/emailjs'

const CheckCircleIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

export default function Apply() {
  const { lang } = useLang()
  const tr = t[lang]

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    skills: '',
    motivation: '',
    portfolio: '',
    linkedin: '',
    resume: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

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
        EMAILJS_APPLY_TEMPLATE,
        {
          full_name: form.fullName,
          email: form.email,
          phone: form.phone || 'Not provided',
          role: form.role,
          skills: form.skills,
          motivation: form.motivation,
          portfolio: form.portfolio || 'Not provided',
          linkedin: form.linkedin || 'Not provided',
          resume: form.resume,
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

  const fieldStyle = { marginBottom: '20px' }

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
          position: 'absolute', top: '0%', right: '-5%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 60%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '-5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.11) 0%, transparent 60%)',
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
              {tr.apply.badge}
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
            {tr.apply.title1}{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {tr.apply.title2}
            </span>
          </h1>

          <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
            {tr.apply.sub}
          </p>
        </div>

        {/* Main Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 340px',
          gap: '32px',
          alignItems: 'start',
        }} className="apply-grid">
          {/* Application Form */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            padding: '40px',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 20px' }}>
                <div style={{ color: '#3b82f6', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
                  <CheckCircleIcon />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '16px' }}>
                  {tr.apply.successTitle}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.8, maxWidth: '420px', margin: '0 auto 32px' }}>
                  {tr.apply.successSub}
                </p>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(37,99,235,0.1)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  borderRadius: '10px',
                  padding: '12px 20px',
                }}>
                  <span style={{ color: '#3b82f6' }}><StarIcon /></span>
                  <span style={{ color: '#93c5fd', fontSize: '13px', fontWeight: '500' }}>
                    {tr.apply.lookingForward}
                  </span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '28px' }}>
                  {tr.apply.formTitle}
                </h2>

                {/* Personal Info */}
                <div style={{ marginBottom: '8px' }}>
                  <p style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {tr.apply.sectionPersonal}
                  </p>
                </div>

                <div style={fieldStyle}>
                  <label style={labelStyle}>{tr.apply.fullName} *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    onFocus={() => setFocused('fullName')}
                    onBlur={() => setFocused(null)}
                    placeholder={tr.apply.namePlaceholder}
                    required
                    style={inputStyle('fullName')}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', ...fieldStyle }}>
                  <div>
                    <label style={labelStyle}>{tr.apply.email} *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      placeholder={tr.apply.emailPlaceholder}
                      required
                      style={inputStyle('email')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{tr.apply.phone}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused('phone')}
                      onBlur={() => setFocused(null)}
                      placeholder={tr.apply.phonePlaceholder}
                      style={inputStyle('phone')}
                    />
                  </div>
                </div>

                {/* Role */}
                <div style={{ marginTop: '8px', marginBottom: '8px' }}>
                  <p style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {tr.apply.sectionRole}
                  </p>
                </div>

                <div style={fieldStyle}>
                  <label style={labelStyle}>{tr.apply.role} *</label>
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    onFocus={() => setFocused('role')}
                    onBlur={() => setFocused(null)}
                    required
                    style={{
                      ...inputStyle('role'),
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="" disabled style={{ background: '#0a1c38' }}>{tr.apply.rolePlaceholder}</option>
                    {tr.apply.roles.map(r => (
                      <option key={r} value={r} style={{ background: '#0a1c38' }}>{r}</option>
                    ))}
                  </select>
                </div>

                <div style={fieldStyle}>
                  <label style={labelStyle}>{tr.apply.skills} *</label>
                  <textarea
                    name="skills"
                    value={form.skills}
                    onChange={handleChange}
                    onFocus={() => setFocused('skills')}
                    onBlur={() => setFocused(null)}
                    placeholder={tr.apply.skillsPlaceholder}
                    required
                    rows={3}
                    style={{ ...inputStyle('skills'), resize: 'vertical', fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                {/* Motivation */}
                <div style={{ marginTop: '8px', marginBottom: '8px' }}>
                  <p style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {tr.apply.sectionMotivation}
                  </p>
                </div>

                <div style={fieldStyle}>
                  <label style={labelStyle}>{tr.apply.motivation} *</label>
                  <textarea
                    name="motivation"
                    value={form.motivation}
                    onChange={handleChange}
                    onFocus={() => setFocused('motivation')}
                    onBlur={() => setFocused(null)}
                    placeholder={tr.apply.motivationPlaceholder}
                    required
                    rows={5}
                    style={{ ...inputStyle('motivation'), resize: 'vertical', minHeight: '120px', fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                {/* Links */}
                <div style={{ marginTop: '8px', marginBottom: '8px' }}>
                  <p style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {tr.apply.sectionLinks}
                  </p>
                </div>

                <div style={fieldStyle}>
                  <label style={labelStyle}>{tr.apply.portfolio}</label>
                  <input
                    type="url"
                    name="portfolio"
                    value={form.portfolio}
                    onChange={handleChange}
                    onFocus={() => setFocused('portfolio')}
                    onBlur={() => setFocused(null)}
                    placeholder={tr.apply.portfolioPlaceholder}
                    style={inputStyle('portfolio')}
                  />
                </div>

                <div style={fieldStyle}>
                  <label style={labelStyle}>{tr.apply.linkedin}</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={form.linkedin}
                    onChange={handleChange}
                    onFocus={() => setFocused('linkedin')}
                    onBlur={() => setFocused(null)}
                    placeholder={tr.apply.linkedinPlaceholder}
                    style={inputStyle('linkedin')}
                  />
                </div>

                <div style={fieldStyle}>
                  <label style={labelStyle}>{tr.apply.resume} *</label>
                  <input
                    type="url"
                    name="resume"
                    value={form.resume}
                    onChange={handleChange}
                    onFocus={() => setFocused('resume')}
                    onBlur={() => setFocused(null)}
                    placeholder={tr.apply.resumePlaceholder}
                    required
                    style={inputStyle('resume')}
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
                    padding: '15px 24px',
                    fontWeight: '700',
                    fontSize: '15px',
                    cursor: sending ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
                    marginTop: '8px',
                    opacity: sending ? 0.7 : 1,
                  }}
                  onMouseEnter={e => { if (!sending) { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,99,235,0.5)'; } }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.35)'; }}
                >
                  {sending ? 'Submitting...' : tr.apply.submit}
                </button>
                {error && (
                  <p style={{ color: '#f87171', fontSize: '13px', marginTop: '12px', textAlign: 'center' }}>
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Why AbleTo Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px',
              padding: '28px',
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '20px' }}>
                {tr.apply.whyTitle}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {tr.apply.whyPoints.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      background: 'rgba(37,99,235,0.15)',
                      border: '1px solid rgba(37,99,235,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#3b82f6',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      <CheckIcon />
                    </div>
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: '600', color: 'white', marginBottom: '3px' }}>{item.title}</p>
                      <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div style={{
              background: 'rgba(37,99,235,0.11)',
              border: '1px solid rgba(37,99,235,0.15)',
              borderRadius: '20px',
              padding: '28px',
            }}>
              <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'white', marginBottom: '16px' }}>
                {tr.apply.ourProcess}
              </h3>
              {tr.apply.steps.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: i < tr.apply.steps.length - 1 ? '14px' : 0 }}>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: '800',
                    color: '#3b82f6',
                    minWidth: '24px',
                    paddingTop: '1px',
                  }}>
                    {item.step}
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>{item.label}</p>
                    <p style={{ fontSize: '11px', color: '#6b7280' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Open Roles badge */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '11px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                {tr.apply.accepting}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                {tr.apply.acceptingRoles.map(role => (
                  <span key={role} style={{
                    background: 'rgba(37,99,235,0.1)',
                    border: '1px solid rgba(37,99,235,0.2)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontSize: '11px',
                    fontWeight: '600',
                    color: '#60a5fa',
                  }}>
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .apply-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
