import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const TouchlessIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
      </radialGradient>
      <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.15"/>
        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0"/>
      </radialGradient>
      <filter id="blur1">
        <feGaussianBlur stdDeviation="4"/>
      </filter>
    </defs>

    {/* Background glow */}
    <circle cx="200" cy="160" r="140" fill="url(#glow1)"/>
    <circle cx="200" cy="160" r="120" fill="url(#glow2)"/>

    {/* Screen/Monitor */}
    <rect x="100" y="80" width="200" height="140" rx="12" fill="rgba(13,13,43,0.8)" stroke="#2563eb" strokeWidth="1.5"/>
    <rect x="110" y="90" width="180" height="120" rx="8" fill="rgba(37,99,235,0.08)"/>
    {/* Screen content */}
    <rect x="125" y="105" width="70" height="8" rx="4" fill="rgba(59,130,246,0.4)"/>
    <rect x="125" y="120" width="110" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
    <rect x="125" y="133" width="90" height="6" rx="3" fill="rgba(255,255,255,0.07)"/>
    {/* Cursor indicator on screen */}
    <circle cx="235" cy="145" r="8" fill="rgba(37,99,235,0.3)" stroke="#3b82f6" strokeWidth="1.5"/>
    <circle cx="235" cy="145" r="3" fill="#3b82f6"/>
    {/* Stand */}
    <rect x="185" y="220" width="30" height="16" rx="4" fill="rgba(37,99,235,0.3)" stroke="#2563eb" strokeWidth="1"/>
    <rect x="170" y="236" width="60" height="8" rx="4" fill="rgba(37,99,235,0.2)" stroke="#2563eb" strokeWidth="1"/>

    {/* Hand gesture */}
    <g transform="translate(280, 100)">
      {/* Palm */}
      <ellipse cx="30" cy="70" rx="22" ry="26" fill="rgba(37,99,235,0.15)" stroke="#3b82f6" strokeWidth="1.5"/>
      {/* Fingers */}
      <rect x="10" y="28" width="10" height="42" rx="5" fill="rgba(37,99,235,0.2)" stroke="#3b82f6" strokeWidth="1.5"/>
      <rect x="23" y="18" width="10" height="52" rx="5" fill="rgba(37,99,235,0.25)" stroke="#3b82f6" strokeWidth="1.5"/>
      <rect x="36" y="20" width="10" height="50" rx="5" fill="rgba(37,99,235,0.2)" stroke="#3b82f6" strokeWidth="1.5"/>
      <rect x="49" y="26" width="10" height="44" rx="5" fill="rgba(37,99,235,0.15)" stroke="#3b82f6" strokeWidth="1.5"/>
      {/* Thumb */}
      <ellipse cx="4" cy="60" rx="7" ry="16" fill="rgba(37,99,235,0.15)" stroke="#3b82f6" strokeWidth="1.5" transform="rotate(-20, 4, 60)"/>
    </g>

    {/* Gesture wave lines */}
    {[0, 1, 2, 3].map(i => (
      <path
        key={i}
        d={`M ${295 - i * 18} ${130 + i * 5} Q ${270 - i * 18} ${115 + i * 5} ${245 - i * 18} ${130 + i * 5}`}
        stroke="#3b82f6"
        strokeWidth={1.5 - i * 0.3}
        fill="none"
        opacity={1 - i * 0.2}
        strokeDasharray="4 3"
      />
    ))}

    {/* Connection dots */}
    <circle cx="290" cy="120" r="4" fill="#3b82f6" opacity="0.8">
      <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="230" cy="140" r="4" fill="#60a5fa" opacity="0.8">
      <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite"/>
    </circle>

    {/* Scanning lines */}
    <line x1="100" y1="130" x2="280" y2="130" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="5 10" opacity="0.3"/>
    <line x1="100" y1="155" x2="280" y2="155" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="5 10" opacity="0.2"/>

    {/* Labels */}
    <rect x="30" y="90" width="70" height="22" rx="11" fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.4)" strokeWidth="1"/>
    <text x="65" y="105" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">GESTURE</text>

    <rect x="30" y="150" width="70" height="22" rx="11" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.3)" strokeWidth="1"/>
    <text x="65" y="165" textAnchor="middle" fill="#06b6d4" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">TOUCHLESS</text>
  </svg>
)

const BrailleIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25"/>
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
      </radialGradient>
    </defs>

    {/* Background glow */}
    <circle cx="200" cy="160" r="140" fill="url(#glow3)"/>

    {/* Book / Screen */}
    <rect x="60" y="60" width="160" height="200" rx="12" fill="rgba(13,13,43,0.9)" stroke="#7c3aed" strokeWidth="1.5"/>
    <rect x="70" y="75" width="140" height="170" rx="8" fill="rgba(109,40,217,0.08)"/>

    {/* Braille dots on page - 4 cells, 3x2 each */}
    {[0, 1, 2, 3].map(cell => (
      <g key={cell} transform={`translate(${85 + cell * 32}, 90)`}>
        {[0, 1].map(col => (
          [0, 1, 2].map(row => {
            const filled = Math.random() > 0.4
            return (
              <circle
                key={`${col}-${row}`}
                cx={col * 12}
                cy={row * 14}
                r="4"
                fill={filled ? '#a78bfa' : 'rgba(167,139,250,0.15)'}
                stroke="#7c3aed"
                strokeWidth="0.5"
              />
            )
          })
        ))}
      </g>
    ))}

    {/* Second row of Braille */}
    {[0, 1, 2, 3].map(cell => (
      <g key={cell} transform={`translate(${85 + cell * 32}, 148)`}>
        {[0, 1].map(col => (
          [0, 1, 2].map(row => {
            const filled = Math.random() > 0.5
            return (
              <circle
                key={`${col}-${row}`}
                cx={col * 12}
                cy={row * 14}
                r="4"
                fill={filled ? '#c4b5fd' : 'rgba(167,139,250,0.12)'}
                stroke="#7c3aed"
                strokeWidth="0.5"
              />
            )
          })
        ))}
      </g>
    ))}

    {/* Progress bar on book */}
    <rect x="80" y="210" width="130" height="6" rx="3" fill="rgba(255,255,255,0.05)"/>
    <rect x="80" y="210" width="85" height="6" rx="3" fill="rgba(139,92,246,0.6)"/>
    <text x="140" y="228" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="Inter, sans-serif">65% complete</text>

    {/* AI Brain */}
    <g transform="translate(268, 80)">
      {/* Brain shape */}
      <circle cx="36" cy="36" r="32" fill="rgba(139,92,246,0.12)" stroke="#7c3aed" strokeWidth="1.5"/>
      {/* Neural connections */}
      <circle cx="20" cy="28" r="4" fill="#8b5cf6"/>
      <circle cx="36" cy="18" r="4" fill="#a78bfa"/>
      <circle cx="52" cy="28" r="4" fill="#8b5cf6"/>
      <circle cx="52" cy="46" r="4" fill="#a78bfa"/>
      <circle cx="36" cy="54" r="4" fill="#8b5cf6"/>
      <circle cx="20" cy="46" r="4" fill="#a78bfa"/>
      <circle cx="36" cy="36" r="6" fill="#7c3aed"/>
      {/* Lines */}
      <line x1="20" y1="28" x2="36" y2="18" stroke="#8b5cf6" strokeWidth="1" opacity="0.6"/>
      <line x1="36" y1="18" x2="52" y2="28" stroke="#8b5cf6" strokeWidth="1" opacity="0.6"/>
      <line x1="52" y1="28" x2="52" y2="46" stroke="#8b5cf6" strokeWidth="1" opacity="0.6"/>
      <line x1="52" y1="46" x2="36" y2="54" stroke="#8b5cf6" strokeWidth="1" opacity="0.6"/>
      <line x1="36" y1="54" x2="20" y2="46" stroke="#8b5cf6" strokeWidth="1" opacity="0.6"/>
      <line x1="20" y1="46" x2="20" y2="28" stroke="#8b5cf6" strokeWidth="1" opacity="0.6"/>
      <line x1="20" y1="28" x2="36" y2="36" stroke="#7c3aed" strokeWidth="1" opacity="0.4"/>
      <line x1="36" y1="18" x2="36" y2="36" stroke="#7c3aed" strokeWidth="1" opacity="0.4"/>
      <line x1="52" y1="28" x2="36" y2="36" stroke="#7c3aed" strokeWidth="1" opacity="0.4"/>
      <line x1="52" y1="46" x2="36" y2="36" stroke="#7c3aed" strokeWidth="1" opacity="0.4"/>
      <line x1="36" y1="54" x2="36" y2="36" stroke="#7c3aed" strokeWidth="1" opacity="0.4"/>
      <line x1="20" y1="46" x2="36" y2="36" stroke="#7c3aed" strokeWidth="1" opacity="0.4"/>
    </g>

    {/* Connecting lines from brain to book */}
    <path d="M 268 130 Q 230 130 220 155" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.5"/>
    <path d="M 268 150 Q 240 165 220 175" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3 5" fill="none" opacity="0.4"/>

    {/* Floating feedback chips */}
    <rect x="260" y="200" width="110" height="28" rx="14" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.35)" strokeWidth="1"/>
    <circle cx="277" cy="214" r="5" fill="#7c3aed"/>
    <text x="310" y="218" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Adaptive AI</text>

    <rect x="260" y="240" width="110" height="28" rx="14" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.3)" strokeWidth="1"/>
    <circle cx="277" cy="254" r="5" fill="#0891b2"/>
    <text x="310" y="258" textAnchor="middle" fill="#06b6d4" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Live Feedback</text>

    {/* Pulsing dot on brain */}
    <circle cx="304" cy="116" r="5" fill="#8b5cf6" opacity="0.8">
      <animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
    </circle>
  </svg>
)

function ProductSection({ product, reverse }) {
  const [hovered, setHovered] = useState(null)

  return (
    <div style={{
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        [reverse ? 'left' : 'right']: '-100px',
        transform: 'translateY(-50%)',
        width: '500px',
        height: '500px',
        background: `radial-gradient(circle, ${product.glowColor}08 0%, transparent 70%)`,
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
        direction: reverse ? 'rtl' : 'ltr',
        position: 'relative',
        zIndex: 1,
      }} className="product-grid">
        {/* Illustration */}
        <div style={{
          direction: 'ltr',
          background: `rgba(${product.glowRgb}, 0.04)`,
          border: `1px solid rgba(${product.glowRgb}, 0.12)`,
          borderRadius: '24px',
          padding: '32px',
          height: '360px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            background: `radial-gradient(circle, rgba(${product.glowRgb}, 0.1) 0%, transparent 70%)`,
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />
          {product.illustration}
        </div>

        {/* Content */}
        <div style={{ direction: 'ltr' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: `rgba(${product.glowRgb}, 0.1)`,
            border: `1px solid rgba(${product.glowRgb}, 0.3)`,
            borderRadius: '100px',
            padding: '6px 14px',
            marginBottom: '20px',
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: product.color, animation: 'pulse-glow 2s infinite' }} />
            <span style={{ fontSize: '11px', fontWeight: '700', color: product.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {product.badge}
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            fontWeight: '800',
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}>
            {product.title}
          </h2>

          <p style={{
            color: '#9ca3af',
            fontSize: '15px',
            lineHeight: 1.8,
            marginBottom: '32px',
          }}>
            {product.description}
          </p>

          {/* Features */}
          <div style={{ marginBottom: '36px' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              Key Features
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {product.features.map((feature, i) => (
                <div
                  key={feature}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 14px',
                    background: hovered === i ? `rgba(${product.glowRgb}, 0.08)` : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${hovered === i ? `rgba(${product.glowRgb}, 0.25)` : 'rgba(255,255,255,0.06)'}`,
                    borderRadius: '10px',
                    transition: 'all 0.2s ease',
                    cursor: 'default',
                    gridColumn: i === 4 ? 'span 2' : 'span 1',
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: `rgba(${product.glowRgb}, 0.15)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: product.color,
                    flexShrink: 0,
                  }}>
                    <CheckIcon />
                  </div>
                  <span style={{ fontSize: '13px', color: '#d1d5db', fontWeight: '500' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: product.color,
              color: 'white',
              textDecoration: 'none',
              borderRadius: '10px',
              padding: '13px 24px',
              fontWeight: '600',
              fontSize: '14px',
              transition: 'all 0.2s ease',
              boxShadow: `0 4px 20px rgba(${product.glowRgb}, 0.35)`,
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 30px rgba(${product.glowRgb}, 0.5)`; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 20px rgba(${product.glowRgb}, 0.35)`; }}
          >
            Get in Touch <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const { lang } = useLang()
  const tr = t[lang]

  return (
    <div style={{
      background: 'linear-gradient(180deg, #05050f 0%, #0a0a1a 30%, #0d0d2b 60%, #0a0a1a 100%)',
      minHeight: '100vh',
      paddingTop: '88px',
    }}>
      {/* Header */}
      <div style={{ padding: '60px 0 20px', textAlign: 'center', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
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
              {tr.products.badge}
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
            {tr.products.title1}{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {tr.products.title2}
            </span>
          </h1>

          <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
            {tr.products.sub}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        maxWidth: '1200px',
        margin: '40px auto 0',
        padding: '0 24px',
      }}>
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)' }} />
      </div>

      {/* Touchless Product */}
      <ProductSection
        product={{
          title: tr.products.touchlessTitle,
          badge: tr.products.touchlessBadge,
          description: tr.products.touchlessDesc,
          features: tr.products.touchlessFeatures,
          illustration: <TouchlessIllustration />,
          color: '#3b82f6',
          glowColor: '#3b82f6',
          glowRgb: '59,130,246',
        }}
        reverse={false}
      />

      {/* Divider */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }} />
      </div>

      {/* Braille Product */}
      <ProductSection
        product={{
          title: tr.products.brailleTitle,
          badge: tr.products.brailleBadge,
          description: tr.products.brailleDesc,
          features: tr.products.brailleFeatures,
          illustration: <BrailleIllustration />,
          color: '#8b5cf6',
          glowColor: '#8b5cf6',
          glowRgb: '139,92,246',
        }}
        reverse={true}
      />

      <style>{`
        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </div>
  )
}
