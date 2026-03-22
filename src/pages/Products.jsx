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
      <radialGradient id="tglow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
      </radialGradient>
    </defs>

    {/* Background glow */}
    <circle cx="200" cy="148" r="130" fill="url(#tglow)"/>

    {/* Monitor frame */}
    <rect x="90" y="52" width="220" height="158" rx="12" fill="rgba(4,14,30,0.95)" stroke="#2563eb" strokeWidth="1.5"/>
    <rect x="102" y="64" width="196" height="134" rx="7" fill="rgba(37,99,235,0.13)"/>

    {/* Screen UI rows */}
    <rect x="118" y="80" width="80" height="9" rx="4" fill="rgba(59,130,246,0.5)"/>
    <rect x="118" y="97" width="130" height="7" rx="3" fill="rgba(255,255,255,0.09)"/>
    <rect x="118" y="111" width="100" height="7" rx="3" fill="rgba(255,255,255,0.06)"/>
    <rect x="118" y="125" width="115" height="7" rx="3" fill="rgba(255,255,255,0.05)"/>

    {/* Crosshair tracker on screen */}
    <circle cx="222" cy="158" r="18" fill="none" stroke="#3b82f6" strokeWidth="1.2" opacity="0.7"/>
    <circle cx="222" cy="158" r="9" fill="rgba(37,99,235,0.2)" stroke="#3b82f6" strokeWidth="1"/>
    <circle cx="222" cy="158" r="3" fill="#60a5fa"/>
    <line x1="222" y1="134" x2="222" y2="143" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" opacity="0.8"/>
    <line x1="222" y1="173" x2="222" y2="182" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" opacity="0.8"/>
    <line x1="198" y1="158" x2="207" y2="158" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" opacity="0.8"/>
    <line x1="237" y1="158" x2="246" y2="158" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" opacity="0.8"/>

    {/* Monitor stand */}
    <rect x="185" y="210" width="30" height="13" rx="4" fill="rgba(37,99,235,0.2)" stroke="#2563eb" strokeWidth="1"/>
    <rect x="168" y="223" width="64" height="7" rx="3" fill="rgba(37,99,235,0.14)" stroke="#2563eb" strokeWidth="1"/>

    {/* Pulsing detection rings - animate outward from tracker */}
    <circle cx="222" cy="158" r="28" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5">
      <animate attributeName="r" values="28;55;28" dur="2.4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="222" cy="158" r="42" fill="none" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3">
      <animate attributeName="r" values="42;70;42" dur="2.4s" repeatCount="indefinite" begin="0.6s"/>
      <animate attributeName="opacity" values="0.3;0;0.3" dur="2.4s" repeatCount="indefinite" begin="0.6s"/>
    </circle>

    {/* Gesture command nodes */}
    <circle cx="44" cy="100" r="26" fill="rgba(37,99,235,0.1)" stroke="#3b82f6" strokeWidth="1.2"/>
    <text x="44" y="97" textAnchor="middle" fill="#60a5fa" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="700">SWIPE</text>
    <text x="44" y="108" textAnchor="middle" fill="#93c5fd" fontSize="7" fontFamily="Inter, sans-serif">LEFT / RIGHT</text>
    <path d="M 68 104 L 90 110" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>

    <circle cx="356" cy="100" r="26" fill="rgba(37,99,235,0.1)" stroke="#3b82f6" strokeWidth="1.2"/>
    <text x="356" y="97" textAnchor="middle" fill="#60a5fa" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="700">PINCH</text>
    <text x="356" y="108" textAnchor="middle" fill="#93c5fd" fontSize="7" fontFamily="Inter, sans-serif">ZOOM IN/OUT</text>
    <path d="M 332 104 L 310 110" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>

    <circle cx="44" cy="196" r="26" fill="rgba(6,182,212,0.08)" stroke="#06b6d4" strokeWidth="1.2"/>
    <text x="44" y="193" textAnchor="middle" fill="#67e8f9" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="700">HOLD</text>
    <text x="44" y="204" textAnchor="middle" fill="#a5f3fc" fontSize="7" fontFamily="Inter, sans-serif">PRESS SELECT</text>
    <path d="M 68 192 L 90 180" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>

    <circle cx="356" cy="196" r="26" fill="rgba(37,99,235,0.1)" stroke="#3b82f6" strokeWidth="1.2"/>
    <text x="356" y="193" textAnchor="middle" fill="#60a5fa" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="700">SCROLL</text>
    <text x="356" y="204" textAnchor="middle" fill="#93c5fd" fontSize="7" fontFamily="Inter, sans-serif">UP / DOWN</text>
    <path d="M 332 192 L 310 180" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>

    {/* Floating detection dot on monitor edge */}
    <circle cx="310" cy="64" r="5" fill="#3b82f6" opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.8s" repeatCount="indefinite"/>
    </circle>

    {/* Label chips */}
    <rect x="22" y="257" width="76" height="24" rx="12" fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.4)" strokeWidth="1"/>
    <text x="60" y="273" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700">GESTURE</text>

    <rect x="114" y="257" width="84" height="24" rx="12" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.3)" strokeWidth="1"/>
    <text x="156" y="273" textAnchor="middle" fill="#06b6d4" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700">TOUCHLESS</text>

    <rect x="214" y="257" width="80" height="24" rx="12" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.25)" strokeWidth="1"/>
    <text x="254" y="273" textAnchor="middle" fill="#93c5fd" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700">VISION AI</text>
  </svg>
)

// Fixed braille patterns (col, row, filled) — deterministic, no Math.random()
const BRAILLE_ROW1 = [
  [[1,0,true],[1,1,false],[1,2,true],[0,0,true],[0,1,true],[0,2,false]],
  [[1,0,false],[1,1,true],[1,2,true],[0,0,true],[0,1,false],[0,2,true]],
  [[1,0,true],[1,1,true],[1,2,false],[0,0,false],[0,1,true],[0,2,true]],
  [[1,0,true],[1,1,false],[1,2,false],[0,0,true],[0,1,true],[0,2,true]],
]
const BRAILLE_ROW2 = [
  [[1,0,false],[1,1,true],[1,2,true],[0,0,true],[0,1,false],[0,2,true]],
  [[1,0,true],[1,1,true],[1,2,false],[0,0,false],[0,1,true],[0,2,false]],
  [[1,0,true],[1,1,false],[1,2,true],[0,0,true],[0,1,true],[0,2,false]],
  [[1,0,false],[1,1,true],[1,2,false],[0,0,true],[0,1,false],[0,2,true]],
]

const BrailleIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.22"/>
        <stop offset="100%" stopColor="#2563eb" stopOpacity="0"/>
      </radialGradient>
    </defs>

    {/* Background glow */}
    <circle cx="200" cy="155" r="130" fill="url(#glow3)"/>

    {/* Book panel */}
    <rect x="28" y="48" width="168" height="214" rx="12" fill="rgba(13,13,43,0.9)" stroke="#2563eb" strokeWidth="1.5"/>
    <rect x="40" y="62" width="144" height="186" rx="7" fill="rgba(37,99,235,0.15)"/>

    {/* Section label inside book */}
    <rect x="52" y="72" width="58" height="16" rx="8" fill="rgba(37,99,235,0.2)" stroke="rgba(37,99,235,0.4)" strokeWidth="0.8"/>
    <text x="81" y="83" textAnchor="middle" fill="#60a5fa" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="700">BRAILLE</text>

    {/* Braille row 1 — y starts at 100, plenty of gap from label */}
    {BRAILLE_ROW1.map((dots, cell) => (
      <g key={cell} transform={`translate(${52 + cell * 34}, 100)`}>
        {dots.map(([col, row, filled]) => (
          <circle
            key={`${col}-${row}`}
            cx={col * 13}
            cy={row * 14}
            r="4.5"
            fill={filled ? '#60a5fa' : 'rgba(96,165,250,0.14)'}
            stroke={filled ? '#3b82f6' : 'rgba(37,99,235,0.3)'}
            strokeWidth="0.8"
          />
        ))}
      </g>
    ))}

    {/* Thin separator between braille rows */}
    <line x1="50" y1="148" x2="180" y2="148" stroke="rgba(37,99,235,0.15)" strokeWidth="0.8"/>

    {/* Braille row 2 — starts at 158, gap after separator */}
    {BRAILLE_ROW2.map((dots, cell) => (
      <g key={cell} transform={`translate(${52 + cell * 34}, 158)`}>
        {dots.map(([col, row, filled]) => (
          <circle
            key={`${col}-${row}`}
            cx={col * 13}
            cy={row * 14}
            r="4.5"
            fill={filled ? '#93c5fd' : 'rgba(96,165,250,0.1)'}
            stroke={filled ? '#2563eb' : 'rgba(37,99,235,0.25)'}
            strokeWidth="0.8"
          />
        ))}
      </g>
    ))}

    {/* Progress bar — safely below braille row 2 (ends ~158+28=186) */}
    <rect x="50" y="210" width="130" height="6" rx="3" fill="rgba(255,255,255,0.05)"/>
    <rect x="50" y="210" width="85"  height="6" rx="3" fill="rgba(37,99,235,0.6)"/>
    {/* Text label for progress — on its own line below the bar */}
    <text x="115" y="230" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="Inter, sans-serif">65% complete</text>

    {/* AI Brain — top right, well clear of book */}
    <g transform="translate(258, 56)">
      <circle cx="40" cy="40" r="36" fill="rgba(37,99,235,0.1)" stroke="#2563eb" strokeWidth="1.5"/>
      <circle cx="24" cy="30" r="4" fill="#3b82f6"/>
      <circle cx="40" cy="18" r="4" fill="#60a5fa"/>
      <circle cx="56" cy="30" r="4" fill="#3b82f6"/>
      <circle cx="56" cy="50" r="4" fill="#60a5fa"/>
      <circle cx="40" cy="62" r="4" fill="#3b82f6"/>
      <circle cx="24" cy="50" r="4" fill="#60a5fa"/>
      <circle cx="40" cy="40" r="7" fill="#2563eb"/>
      <line x1="24" y1="30" x2="40" y2="18" stroke="#3b82f6" strokeWidth="1" opacity="0.55"/>
      <line x1="40" y1="18" x2="56" y2="30" stroke="#3b82f6" strokeWidth="1" opacity="0.55"/>
      <line x1="56" y1="30" x2="56" y2="50" stroke="#3b82f6" strokeWidth="1" opacity="0.55"/>
      <line x1="56" y1="50" x2="40" y2="62" stroke="#3b82f6" strokeWidth="1" opacity="0.55"/>
      <line x1="40" y1="62" x2="24" y2="50" stroke="#3b82f6" strokeWidth="1" opacity="0.55"/>
      <line x1="24" y1="50" x2="24" y2="30" stroke="#3b82f6" strokeWidth="1" opacity="0.55"/>
      <line x1="24" y1="30" x2="40" y2="40" stroke="#2563eb" strokeWidth="1" opacity="0.35"/>
      <line x1="40" y1="18" x2="40" y2="40" stroke="#2563eb" strokeWidth="1" opacity="0.35"/>
      <line x1="56" y1="30" x2="40" y2="40" stroke="#2563eb" strokeWidth="1" opacity="0.35"/>
      <line x1="56" y1="50" x2="40" y2="40" stroke="#2563eb" strokeWidth="1" opacity="0.35"/>
      <line x1="40" y1="62" x2="40" y2="40" stroke="#2563eb" strokeWidth="1" opacity="0.35"/>
      <line x1="24" y1="50" x2="40" y2="40" stroke="#2563eb" strokeWidth="1" opacity="0.35"/>
    </g>

    {/* Pulsing dot on brain edge — not near any text */}
    <circle cx="298" cy="100" r="5" fill="#3b82f6" opacity="0.85">
      <animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.85;0.2;0.85" dur="2s" repeatCount="indefinite"/>
    </circle>

    {/* Dashed connector lines from brain to book */}
    <path d="M 258 118 Q 228 118 196 135" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.45"/>
    <path d="M 258 138 Q 234 155 196 160" stroke="#60a5fa" strokeWidth="1"   strokeDasharray="3 5" fill="none" opacity="0.35"/>

    {/* Feedback chips — right column, below brain, with enough vertical space */}
    <rect x="252" y="168" width="118" height="28" rx="14" fill="rgba(37,99,235,0.14)" stroke="rgba(37,99,235,0.35)" strokeWidth="1"/>
    <circle cx="270" cy="182" r="5" fill="#2563eb"/>
    <text x="317" y="186" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Adaptive AI</text>

    <rect x="252" y="208" width="118" height="28" rx="14" fill="rgba(37,99,235,0.09)" stroke="rgba(37,99,235,0.28)" strokeWidth="1"/>
    <circle cx="270" cy="222" r="5" fill="#1d4ed8"/>
    <text x="317" y="226" textAnchor="middle" fill="#93c5fd" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Live Feedback</text>

    <rect x="252" y="248" width="118" height="28" rx="14" fill="rgba(6,182,212,0.07)" stroke="rgba(6,182,212,0.25)" strokeWidth="1"/>
    <circle cx="270" cy="262" r="5" fill="#0891b2"/>
    <text x="317" y="266" textAnchor="middle" fill="#67e8f9" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Real-time Sync</text>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: `rgba(${product.glowRgb}, 0.1)`,
              border: `1px solid rgba(${product.glowRgb}, 0.3)`,
              borderRadius: '100px',
              padding: '6px 14px',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: product.color, animation: 'pulse-glow 2s infinite' }} />
              <span style={{ fontSize: '11px', fontWeight: '700', color: product.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {product.badge}
              </span>
            </div>
            {product.inDevelopment && (
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(234,179,8,0.08)',
                border: '1px solid rgba(234,179,8,0.28)',
                borderRadius: '100px',
                padding: '6px 12px',
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#eab308' }} />
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#eab308', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {product.inDevelopmentLabel}
                </span>
              </div>
            )}
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
              {product.keyFeatures}
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
            {product.getInTouch} <ArrowRight />
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
      background: 'linear-gradient(180deg, #040e1e 0%, #071629 30%, #0a1c38 60%, #071629 100%)',
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

      {/* DotSense Product */}
      <ProductSection
        product={{
          title: tr.products.dotSenseTitle,
          badge: tr.products.dotSenseBadge,
          description: tr.products.dotSenseDesc,
          features: tr.products.dotSenseFeatures,
          keyFeatures: tr.products.keyFeatures,
          getInTouch: tr.products.getInTouch,
          illustration: <BrailleIllustration />,
          color: '#2563eb',
          glowColor: '#2563eb',
          glowRgb: '37,99,235',
          inDevelopment: true,
          inDevelopmentLabel: tr.products.touchlessInDev,
        }}
        reverse={false}
      />

      {/* Divider */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
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
          keyFeatures: tr.products.keyFeatures,
          getInTouch: tr.products.getInTouch,
          illustration: <TouchlessIllustration />,
          color: '#3b82f6',
          glowColor: '#3b82f6',
          glowRgb: '59,130,246',
          inDevelopment: true,
          inDevelopmentLabel: tr.products.touchlessInDev,
        }}
        reverse={true}
      />

      {/* CTA Section */}
      <section style={{
        padding: '80px 0 100px',
        background: 'linear-gradient(180deg, #040e1e 0%, #061524 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 65%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #3b82f6)' }} />
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#3b82f6', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {tr.products.getInTouch}
            </span>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #3b82f6, transparent)' }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 40px)',
            fontWeight: '800',
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}>
            {tr.products.ctaTitle}
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: 1.75, marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
            {tr.products.ctaSub}
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#2563eb',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '10px',
              padding: '14px 32px',
              fontWeight: '600',
              fontSize: '15px',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 24px rgba(37,99,235,0.4)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(37,99,235,0.4)'; }}
          >
            {tr.products.ctaButton} <ArrowRight />
          </Link>
        </div>
      </section>

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
