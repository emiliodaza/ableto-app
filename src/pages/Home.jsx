import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const PeopleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const MicIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="23"/>
    <line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
)

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const pillIcons = [<EyeIcon />, <PeopleIcon />, <MicIcon />]
const pillColors = ['#3b82f6', '#2563eb', '#1d4ed8']
const pillDelays = ['0s', '0.3s', '0.6s']


export default function Home() {
  const { lang } = useLang()
  const tr = t[lang]
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const pillLabels = [tr.home.pill1, tr.home.pill2, tr.home.pill3]
  const features = pillLabels.map((label, i) => ({
    icon: pillIcons[i],
    label,
    color: pillColors[i],
    delay: pillDelays[i],
  }))

  const pageStyle = {
    background: 'linear-gradient(135deg, #040e1e 0%, #061524 50%, #040e1e 100%)',
    minHeight: '100vh',
    overflow: 'hidden',
  }

  const heroStyle = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '88px',
  }

  const bgDecorStyle = {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    width: '100%',
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
    paddingBottom: '80px',
  }

  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <section style={heroStyle}>
        {/* Background Glows */}
        <div style={bgDecorStyle}>
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '5%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(37,99,235,0.16) 0%, transparent 70%)',
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '30%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
            borderRadius: '50%',
          }} />
          {/* Grid pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />
        </div>

        <div style={containerStyle} className="hero-grid">
          {/* Left: Main Card */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease',
            }}
          >
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '24px',
              padding: '44px',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: '0 25px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}>
              {/* Label */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(37,99,235,0.1)',
                border: '1px solid rgba(37,99,235,0.25)',
                borderRadius: '100px',
                padding: '6px 14px',
                marginBottom: '28px',
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', animation: 'pulse-glow 2s infinite' }} />
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#3b82f6', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {tr.home.badge}
                </span>
              </div>

              {/* Heading */}
              <h1 style={{
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: '900',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '20px',
              }}>
                <span style={{ color: 'white' }}>{tr.home.headline1}</span>
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {tr.home.headline2}
                </span>
              </h1>

              <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.75, marginBottom: '32px', maxWidth: '420px' }}>
                {tr.home.sub}
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
                <Link
                  to="/team"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '13px 24px',
                    fontWeight: '600',
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,99,235,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.35)'; }}
                >
                  {tr.home.cta1} <ArrowRight />
                </Link>
                <Link
                  to="/products"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'transparent',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '10px',
                    padding: '13px 24px',
                    fontWeight: '600',
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {tr.home.cta2} <ArrowRight />
                </Link>
              </div>

            </div>
          </div>

          {/* Right: Floating Pills */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s ease 0.2s',
          }}>
            {/* Central visual */}
            <div style={{
              position: 'relative',
              width: '280px',
              height: '280px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {/* Outer ring */}
              <div style={{
                position: 'absolute',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                border: '1px solid rgba(37,99,235,0.15)',
                animation: 'float 6s ease-in-out infinite',
              }} />
              <div style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                border: '1px solid rgba(37,99,235,0.2)',
                animation: 'float 4s ease-in-out infinite reverse',
              }} />
              {/* Center glow */}
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, rgba(37,99,235,0.11) 70%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(37,99,235,0.3)',
                boxShadow: '0 0 60px rgba(37,99,235,0.2)',
                animation: 'float 5s ease-in-out infinite',
              }}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M8 24C8 15.163 15.163 8 24 8C32.837 8 40 15.163 40 24" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 24C8 32.837 15.163 40 24 40C32.837 40 40 32.837 40 24" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
                  <circle cx="24" cy="24" r="6" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" strokeWidth="2"/>
                  <circle cx="24" cy="24" r="2" fill="#60a5fa"/>
                  <circle cx="8" cy="24" r="3" fill="#2563eb"/>
                  <circle cx="40" cy="24" r="3" fill="#2563eb"/>
                  <circle cx="24" cy="8" r="3" fill="#3b82f6"/>
                  <circle cx="24" cy="40" r="3" fill="#3b82f6"/>
                </svg>
              </div>

              {/* Orbiting dots */}
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: i % 2 === 0 ? '#3b82f6' : '#60a5fa',
                  transform: `rotate(${angle}deg) translateX(130px)`,
                  opacity: 0.7,
                  boxShadow: `0 0 8px ${i % 2 === 0 ? '#3b82f6' : '#60a5fa'}`,
                }} />
              ))}
            </div>

            {/* Feature Pills */}
            {features.map((feature, i) => (
              <div
                key={feature.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${feature.color}30`,
                  borderRadius: '100px',
                  padding: '12px 24px',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: `0 8px 30px ${feature.color}15`,
                  animation: `float ${4 + i}s ease-in-out infinite`,
                  animationDelay: feature.delay,
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                  alignSelf: i === 1 ? 'flex-end' : i === 2 ? 'flex-start' : 'center',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = `${feature.color}10`; e.currentTarget.style.boxShadow = `0 12px 40px ${feature.color}25`; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.boxShadow = `0 8px 30px ${feature.color}15`; }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: `${feature.color}20`,
                  border: `1px solid ${feature.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: feature.color,
                  flexShrink: 0,
                }}>
                  {feature.icon}
                </div>
                <span style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>
                  {feature.label}
                </span>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: feature.color,
                  boxShadow: `0 0 8px ${feature.color}`,
                  animation: 'pulse-glow 2s infinite',
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, #040e1e 0%, #061524 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 60%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '24px',
            padding: '64px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            maxWidth: '760px',
            margin: '0 auto',
            boxShadow: '0 25px 80px rgba(0,0,0,0.3)',
          }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #3b82f6)' }} />
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#3b82f6', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {tr.home.missionBadge}
              </span>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #3b82f6, transparent)' }} />
            </div>

            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: '800',
              color: 'white',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}>
              {tr.home.missionTitle}
            </h2>

            <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: 1.8, marginBottom: '40px', maxWidth: '560px', margin: '0 auto 40px' }}>
              {tr.home.missionBody}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
              {tr.home.tags.map(tag => (
                <span key={tag} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(37,99,235,0.16)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  borderRadius: '100px',
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#60a5fa',
                }}>
                  <span style={{ color: '#3b82f6' }}><CheckIcon /></span>
                  {tag}
                </span>
              ))}
            </div>

            <Link
              to="/products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                padding: '14px 28px',
                fontWeight: '600',
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,99,235,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.35)'; }}
            >
              {tr.home.missionCta} <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(180deg, #061524 0%, #071629 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.13) 0%, transparent 60%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#3b82f6', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
              {tr.home.impactBadge}
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: '800', color: 'white', letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: 1.2 }}>
              {tr.home.impactTitle}
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto' }}>
              {tr.home.impactSub}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { value: tr.home.metric1Val, label: tr.home.metric1Label, note: tr.home.metric1Note, accent: '#3b82f6' },
              { value: tr.home.metric2Val, label: tr.home.metric2Label, note: tr.home.metric2Note, accent: '#2563eb' },
              { value: tr.home.metric3Val, label: tr.home.metric3Label, note: tr.home.metric3Note, accent: '#1d4ed8' },
              { value: tr.home.metric4Val, label: tr.home.metric4Label, note: tr.home.metric4Note, accent: '#3b82f6' },
            ].map((metric, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  padding: '28px 20px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.13)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.25)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(37,99,235,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{
                  fontSize: '38px',
                  fontWeight: '900',
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #93c5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  marginBottom: '10px',
                }}>
                  {metric.value}
                </div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#e5e7eb', marginBottom: '6px', lineHeight: 1.4 }}>
                  {metric.label}
                </div>
                <div style={{ fontSize: '11px', color: '#4b5563', fontWeight: '500', letterSpacing: '0.02em' }}>
                  {metric.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Teaser Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, #071629 0%, #040e1e 100%)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#3b82f6', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
              {tr.home.whatWeBuild}
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', color: 'white', letterSpacing: '-0.02em' }}>
              {tr.home.ourProducts}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {[
              {
                title: tr.home.dotSenseCardTitle,
                badge: tr.home.dotSenseCardBadge,
                desc: tr.home.dotSenseShort,
                color: '#2563eb',
                inDev: true,
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="12" cy="12" r="3" fill="#2563eb"/>
                    <circle cx="20" cy="12" r="3" fill="#2563eb"/>
                    <circle cx="28" cy="12" r="3" fill="#2563eb"/>
                    <circle cx="12" cy="20" r="3" fill="#60a5fa"/>
                    <circle cx="20" cy="20" r="3" fill="#2563eb"/>
                    <circle cx="28" cy="20" r="3" fill="#60a5fa"/>
                    <circle cx="12" cy="28" r="3" fill="#2563eb"/>
                    <circle cx="20" cy="28" r="3" fill="#60a5fa"/>
                    <circle cx="28" cy="28" r="3" fill="#2563eb"/>
                  </svg>
                ),
              },
              {
                title: tr.home.touchlessCardTitle,
                badge: tr.home.touchlessCardBadge,
                desc: tr.home.touchlessShort,
                color: '#3b82f6',
                inDev: true,
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="19" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3"/>
                    <path d="M20 10 C15 10 12 14 12 20 C12 26 15.5 29 20 29 C24.5 29 28 26 28 20" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>                    <circle cx="28" cy="12" r="3" fill="#3b82f6"/>
                    <path d="M25 8 L28 12 L32 10" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map(product => (
              <Link
                key={product.title}
                to="/products"
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: `1px solid ${product.color}20`,
                    borderRadius: '20px',
                    padding: '32px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${product.color}08`;
                    e.currentTarget.style.borderColor = `${product.color}40`;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = `0 20px 60px ${product.color}15`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    e.currentTarget.style.borderColor = `${product.color}20`;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ marginBottom: '20px' }}>{product.icon}</div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <div style={{
                      display: 'inline-block',
                      background: `${product.color}15`,
                      border: `1px solid ${product.color}30`,
                      borderRadius: '100px',
                      padding: '3px 10px',
                      fontSize: '11px',
                      fontWeight: '600',
                      color: product.color,
                      letterSpacing: '0.05em',
                    }}>
                      {product.badge}
                    </div>
                    {product.inDev && (
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: 'rgba(234,179,8,0.08)',
                        border: '1px solid rgba(234,179,8,0.28)',
                        borderRadius: '100px',
                        padding: '3px 9px',
                        fontSize: '10px',
                        fontWeight: '700',
                        color: '#eab308',
                        letterSpacing: '0.05em',
                      }}>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#eab308' }} />
                        {tr.products.touchlessInDev}
                      </div>
                    )}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '12px', letterSpacing: '-0.01em' }}>
                    {product.title}
                  </h3>
                  <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.7 }}>
                    {product.desc}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '24px',
                    color: product.color,
                    fontSize: '13px',
                    fontWeight: '600',
                  }}>
                    {tr.home.learnMore} <ArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </div>
  )
}
