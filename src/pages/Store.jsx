import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_STORE_TEMPLATE,
  EMAILJS_PUBLIC_KEY,
} from '../config/emailjs'

// ─── SVG Icons ───────────────────────────────────────────────────────────────

const DotSenseIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect width="64" height="64" rx="16" fill="rgba(37,99,235,0.15)" />
    {/* Braille cell dots */}
    <circle cx="22" cy="20" r="5" fill="#2563eb" />
    <circle cx="32" cy="20" r="5" fill="#3b82f6" />
    <circle cx="42" cy="20" r="5" fill="#60a5fa" />
    <circle cx="22" cy="32" r="5" fill="#3b82f6" />
    <circle cx="32" cy="32" r="5" fill="#2563eb" />
    <circle cx="42" cy="32" r="3" fill="rgba(96,165,250,0.4)" />
    <circle cx="22" cy="44" r="5" fill="#60a5fa" />
    <circle cx="32" cy="44" r="3" fill="rgba(96,165,250,0.4)" />
    <circle cx="42" cy="44" r="5" fill="#2563eb" />
  </svg>
)

const TouchlessIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect width="64" height="64" rx="16" fill="rgba(124,58,237,0.15)" />
    {/* Gesture hand / circle rings */}
    <circle cx="32" cy="32" r="18" stroke="#7c3aed" strokeWidth="2.5" strokeDasharray="4 3" />
    <circle cx="32" cy="32" r="10" stroke="#a78bfa" strokeWidth="2" />
    <circle cx="32" cy="32" r="4" fill="#7c3aed" />
    {/* Gesture lines */}
    <line x1="32" y1="8" x2="32" y2="14" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
    <line x1="56" y1="32" x2="50" y2="32" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="56" x2="32" y2="50" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
    <line x1="8" y1="32" x2="14" y2="32" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const BrailleKitIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect width="64" height="64" rx="16" fill="rgba(5,150,105,0.15)" />
    {/* Book shape */}
    <rect x="12" y="14" width="40" height="36" rx="4" fill="none" stroke="#059669" strokeWidth="2.5" />
    <line x1="32" y1="14" x2="32" y2="50" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 2" />
    {/* Small dots on left page */}
    <circle cx="20" cy="24" r="2.5" fill="#059669" />
    <circle cx="26" cy="24" r="2.5" fill="#34d399" />
    <circle cx="20" cy="32" r="2.5" fill="#34d399" />
    <circle cx="26" cy="32" r="2.5" fill="#059669" />
    <circle cx="20" cy="40" r="2.5" fill="#059669" />
    <circle cx="26" cy="40" r="1.5" fill="rgba(52,211,153,0.4)" />
    {/* Lines on right page */}
    <line x1="38" y1="24" x2="48" y2="24" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="38" y1="30" x2="48" y2="30" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="38" y1="36" x2="44" y2="36" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="38" y1="42" x2="46" y2="42" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const HoodieIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect width="64" height="64" rx="16" fill="rgba(5,150,105,0.15)" />
    {/* Hoodie silhouette */}
    <path
      d="M14 24 L20 16 Q26 12 32 14 Q38 12 44 16 L50 24 L46 28 L44 26 L44 52 L20 52 L20 26 L18 28 Z"
      fill="none"
      stroke="#059669"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Hood opening */}
    <path d="M26 14 Q32 20 38 14" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
    {/* Pocket */}
    <rect x="25" y="36" width="14" height="8" rx="2" fill="none" stroke="#34d399" strokeWidth="1.5" />
  </svg>
)

const TshirtIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect width="64" height="64" rx="16" fill="rgba(5,150,105,0.15)" />
    {/* T-shirt silhouette */}
    <path
      d="M12 20 L22 14 Q27 12 32 14 Q37 12 42 14 L52 20 L46 28 L44 26 L44 52 L20 52 L20 26 L18 28 Z"
      fill="none"
      stroke="#059669"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Collar */}
    <path d="M26 14 Q32 22 38 14" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
    {/* Small logo mark in center */}
    <circle cx="32" cy="36" r="4" fill="none" stroke="#34d399" strokeWidth="1.5" />
    <text x="32" y="40" textAnchor="middle" fontSize="6" fill="#34d399" fontWeight="bold">A</text>
  </svg>
)

const ToteIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect width="64" height="64" rx="16" fill="rgba(5,150,105,0.15)" />
    {/* Bag body */}
    <rect x="14" y="24" width="36" height="30" rx="4" fill="none" stroke="#059669" strokeWidth="2.5" />
    {/* Handles */}
    <path d="M22 24 Q22 14 28 14 Q34 14 34 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M30 24 Q30 14 36 14 Q42 14 42 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
    {/* Interior pocket line */}
    <line x1="22" y1="38" x2="42" y2="38" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" />
    {/* Logo mark */}
    <circle cx="32" cy="48" r="3" fill="rgba(52,211,153,0.5)" />
  </svg>
)

// ─── Product Data ─────────────────────────────────────────────────────────────

const PRODUCTS = [
  { id: 'dotsense-preorder', price: 249, category: 'preorder', badgeColor: '#2563eb', Icon: DotSenseIcon },
  { id: 'touchless-beta',    price: 99,  category: 'preorder', badgeColor: '#7c3aed', Icon: TouchlessIcon },
  { id: 'braille-kit',       price: 79,  category: 'accessories', badgeColor: '#059669', Icon: BrailleKitIcon },
  { id: 'hoodie',            price: 65,  category: 'merch', badgeColor: '#059669', Icon: HoodieIcon },
  { id: 'tshirt',            price: 35,  category: 'merch', badgeColor: '#059669', Icon: TshirtIcon },
  { id: 'tote',              price: 22,  category: 'merch', badgeColor: '#059669', Icon: ToteIcon },
]

const FILTER_CATEGORIES = [
  { key: 'all',        labelKey: 'filterAll' },
  { key: 'preorder',   labelKey: 'filterPreOrder' },
  { key: 'accessories', labelKey: 'filterAccessories' },
  { key: 'merch',      labelKey: 'filterMerch' },
]

const formatPrice = (amount) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Store() {
  const { lang } = useLang()
  const tr = t[lang].store

  const [activeFilter, setActiveFilter]   = useState('all')
  const [cart, setCart]                   = useState([])
  const [cartOpen, setCartOpen]           = useState(false)
  const [checkoutOpen, setCheckoutOpen]   = useState(false)
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [hoveredFilter, setHoveredFilter] = useState(null)
  const [hoveredLocation, setHoveredLocation] = useState(null)

  // Checkout form state
  const [formName, setFormName]           = useState('')
  const [formEmail, setFormEmail]         = useState('')
  const [formPhone, setFormPhone]         = useState('')
  const [delivery, setDelivery]           = useState('ship')
  const [formAddress, setFormAddress]     = useState('')
  const [formCity, setFormCity]           = useState('')
  const [formCountry, setFormCountry]     = useState('')
  const [formNotes, setFormNotes]         = useState('')
  const [submitting, setSubmitting]       = useState(false)
  const [orderSuccess, setOrderSuccess]   = useState(false)

  // Lock body scroll when drawers are open
  useEffect(() => {
    document.body.style.overflow = (cartOpen || checkoutOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [cartOpen, checkoutOpen])

  // ── Cart helpers ──────────────────────────────────────────────────────────

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id))

  const changeQty = (id, delta) => {
    setCart(prev =>
      prev
        .map(i => i.id === id ? { ...i, qty: i.qty + delta } : i)
        .filter(i => i.qty > 0)
    )
  }

  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)

  const isInCart = (id) => cart.some(i => i.id === id)

  const filteredProducts = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter)

  // ── Checkout submit ───────────────────────────────────────────────────────

  const handlePlaceOrder = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const orderItems = cart
      .map(i => {
        const info = tr.products[i.id]
        return `${info.name} x${i.qty} — ${formatPrice(i.price * i.qty)}`
      })
      .join('\n')

    const deliveryInfo =
      delivery === 'ship'
        ? `Ship to: ${formAddress}, ${formCity}, ${formCountry}`
        : delivery === 'nyc'
        ? 'Pickup — New York City, NY'
        : 'Pickup — Lima, Peru'

    const templateParams = {
      customer_name:  formName,
      customer_email: formEmail,
      customer_phone: formPhone || 'Not provided',
      order_items:    orderItems,
      order_total:    formatPrice(cartTotal),
      delivery_info:  deliveryInfo,
      notes:          formNotes || 'None',
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_STORE_TEMPLATE, templateParams, EMAILJS_PUBLIC_KEY)
      setOrderSuccess(true)
      setCart([])
    } catch (err) {
      console.error('EmailJS error:', err)
    } finally {
      setSubmitting(false)
    }
  }

  const closeCheckout = () => {
    setCheckoutOpen(false)
    setOrderSuccess(false)
    setFormName(''); setFormEmail(''); setFormPhone('')
    setDelivery('ship'); setFormAddress(''); setFormCity(''); setFormCountry('')
    setFormNotes('')
  }

  // ── Styles ────────────────────────────────────────────────────────────────

  const pageStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #040e1e 0%, #071629 50%, #040e1e 100%)',
    color: 'white',
    paddingTop: '100px',
    paddingBottom: '80px',
    fontFamily: 'inherit',
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  }

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(37,99,235,0.12)',
    border: '1px solid rgba(37,99,235,0.3)',
    borderRadius: '100px',
    padding: '6px 16px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#60a5fa',
    letterSpacing: '0.04em',
    marginBottom: '20px',
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    padding: '12px 14px',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: '600',
    color: '#9ca3af',
    marginBottom: '6px',
  }

  const primaryBtnStyle = {
    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '14px 28px',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    width: '100%',
    transition: 'opacity 0.2s',
  }

  return (
    <div style={pageStyle}>
      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <div style={{ ...containerStyle, textAlign: 'center', marginBottom: '60px' }}>
        <div style={badgeStyle}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', display: 'inline-block' }} />
          {tr.badge}
        </div>
        <h1 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 16px' }}>
          {tr.title1}{' '}
          <span style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {tr.title2}
          </span>
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '18px', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          {tr.sub}
        </p>

        {/* View Cart button */}
        <button
          onClick={() => setCartOpen(true)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(37,99,235,0.15)',
            border: '1px solid rgba(37,99,235,0.35)',
            borderRadius: '100px',
            padding: '10px 24px',
            color: '#60a5fa',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
          }}
          aria-label={`${tr.viewCart} (${cartCount})`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {tr.viewCart}
          {cartCount > 0 && (
            <span style={{
              background: '#2563eb',
              color: 'white',
              borderRadius: '100px',
              padding: '2px 8px',
              fontSize: '12px',
              fontWeight: '700',
            }}>
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* ── Filter Tabs ──────────────────────────────────────────────────── */}
      <div style={{ ...containerStyle, marginBottom: '40px' }}>
        <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {FILTER_CATEGORIES.map(f => {
            const isActive = activeFilter === f.key
            const isHov = hoveredFilter === f.key
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                onMouseEnter={() => setHoveredFilter(f.key)}
                onMouseLeave={() => setHoveredFilter(null)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '100px',
                  border: isActive ? '1px solid rgba(37,99,235,0.5)' : '1px solid rgba(255,255,255,0.1)',
                  background: isActive
                    ? 'rgba(37,99,235,0.18)'
                    : isHov
                    ? 'rgba(255,255,255,0.06)'
                    : 'transparent',
                  color: isActive ? '#60a5fa' : isHov ? 'white' : '#9ca3af',
                  fontSize: '14px',
                  fontWeight: isActive ? '700' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {tr[f.labelKey]}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Product Grid ─────────────────────────────────────────────────── */}
      <div style={containerStyle}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '80px',
        }}>
          {filteredProducts.map(product => {
            const info = tr.products[product.id]
            const hovered = hoveredProduct === product.id
            const inCart = isInCart(product.id)
            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{
                  background: hovered
                    ? 'rgba(255,255,255,0.05)'
                    : 'rgba(255,255,255,0.03)',
                  border: hovered
                    ? '1px solid rgba(37,99,235,0.4)'
                    : '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '20px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'all 0.25s ease',
                  transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: hovered ? '0 12px 40px rgba(37,99,235,0.15)' : 'none',
                }}
              >
                {/* Icon row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <product.Icon />
                  <span style={{
                    background: product.badgeColor + '22',
                    border: `1px solid ${product.badgeColor}55`,
                    color: product.badgeColor === '#059669' ? '#34d399' : product.badgeColor === '#7c3aed' ? '#a78bfa' : '#60a5fa',
                    borderRadius: '100px',
                    padding: '4px 12px',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '0.04em',
                  }}>
                    {info.badge}
                  </span>
                </div>

                {/* Name & price */}
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'white', margin: '0 0 6px' }}>
                    {info.name}
                  </h3>
                  <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                    {info.desc}
                  </p>
                </div>

                {/* Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {info.features.map((f, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#6b7280' }}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="7" stroke="#2563eb" strokeWidth="1.5" />
                        <polyline points="5,8 7,10 11,6" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: '22px', fontWeight: '800', color: 'white' }}>
                    {formatPrice(product.price)}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    style={{
                      background: inCart ? 'rgba(37,99,235,0.2)' : 'linear-gradient(135deg,#2563eb,#1d4ed8)',
                      border: inCart ? '1px solid rgba(37,99,235,0.4)' : 'none',
                      borderRadius: '10px',
                      padding: '10px 20px',
                      color: inCart ? '#60a5fa' : 'white',
                      fontSize: '14px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {inCart ? tr.added : tr.addToCart}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Locations Section ────────────────────────────────────────────── */}
      <div style={{ ...containerStyle, textAlign: 'center', marginBottom: '0' }}>
        <div style={badgeStyle}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', display: 'inline-block' }} />
          {tr.locationBadge}
        </div>
        <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: '800', letterSpacing: '-0.03em', margin: '0 0 12px' }}>
          {tr.locationTitle}
        </h2>
        <p style={{ color: '#9ca3af', fontSize: '16px', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.6 }}>
          {tr.locationSub}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          textAlign: 'left',
        }}>
          {/* NYC */}
          <div
            onMouseEnter={() => setHoveredLocation('nyc')}
            onMouseLeave={() => setHoveredLocation(null)}
            style={{
              background: hoveredLocation === 'nyc' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
              border: hoveredLocation === 'nyc' ? '1px solid rgba(37,99,235,0.4)' : '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px',
              padding: '32px',
              transition: 'all 0.25s ease',
              transform: hoveredLocation === 'nyc' ? 'translateY(-4px)' : 'translateY(0)',
              boxShadow: hoveredLocation === 'nyc' ? '0 12px 40px rgba(37,99,235,0.15)' : 'none',
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🇺🇸</div>
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'white', margin: '0 0 4px' }}>
              New York City, NY
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', margin: '0 0 20px' }}>
              {tr.locationNYCDetail}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{tr.labelAddress}</span>
                <p style={{ color: '#d1d5db', fontSize: '14px', margin: '4px 0 0' }}>Brooklyn, New York, NY</p>
              </div>
              <div>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{tr.labelHours}</span>
                <p style={{ color: '#d1d5db', fontSize: '14px', margin: '4px 0 0' }}>Mon–Fri, 10 AM – 6 PM ET</p>
              </div>
            </div>
          </div>

          {/* Lima */}
          <div
            onMouseEnter={() => setHoveredLocation('lima')}
            onMouseLeave={() => setHoveredLocation(null)}
            style={{
              background: hoveredLocation === 'lima' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
              border: hoveredLocation === 'lima' ? '1px solid rgba(37,99,235,0.4)' : '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px',
              padding: '32px',
              transition: 'all 0.25s ease',
              transform: hoveredLocation === 'lima' ? 'translateY(-4px)' : 'translateY(0)',
              boxShadow: hoveredLocation === 'lima' ? '0 12px 40px rgba(37,99,235,0.15)' : 'none',
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🇵🇪</div>
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'white', margin: '0 0 4px' }}>
              Lima, Peru
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', margin: '0 0 20px' }}>
              {tr.locationLimaDetail}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{tr.labelAddress}</span>
                <p style={{ color: '#d1d5db', fontSize: '14px', margin: '4px 0 0' }}>San Isidro, Lima, Peru</p>
              </div>
              <div>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{tr.labelHours}</span>
                <p style={{ color: '#d1d5db', fontSize: '14px', margin: '4px 0 0' }}>Mon–Fri, 9 AM – 6 PM PET</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Cart Drawer Overlay ──────────────────────────────────────────── */}
      {cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 1100,
            backdropFilter: 'blur(4px)',
          }}
          aria-hidden="true"
        />
      )}

      {/* ── Cart Drawer ──────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '420px',
          maxWidth: '95vw',
          background: 'linear-gradient(180deg,#071629 0%,#040e1e 100%)',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          zIndex: 1200,
          transform: cartOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex',
          flexDirection: 'column',
        }}
        role="dialog"
        aria-label={tr.cart}
        aria-modal="true"
      >
        {/* Cart header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: 'white' }}>
            {tr.cart}
            {cartCount > 0 && (
              <span style={{ marginLeft: '10px', background: '#2563eb', color: 'white', borderRadius: '100px', padding: '2px 10px', fontSize: '13px', fontWeight: '700' }}>
                {cartCount}
              </span>
            )}
          </h2>
          <button
            onClick={() => setCartOpen(false)}
            style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: '6px' }}
            aria-label="Close cart"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="4" y1="4" x2="18" y2="18" /><line x1="18" y1="4" x2="4" y2="18" />
            </svg>
          </button>
        </div>

        {/* Cart items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#6b7280', paddingTop: '60px' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#374151', marginBottom: '16px' }} aria-hidden="true">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p style={{ fontSize: '15px', margin: 0 }}>{tr.emptyCart}</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cart.map(item => {
                const info = tr.products[item.id]
                const ProductIcon = PRODUCTS.find(p => p.id === item.id)?.Icon
                return (
                  <div key={item.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '12px',
                    padding: '14px',
                  }}>
                    {ProductIcon && (
                      <div style={{ flexShrink: 0, transform: 'scale(0.55)', transformOrigin: 'center', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ProductIcon />
                      </div>
                    )}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: '700', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {info.name}
                      </p>
                      <p style={{ margin: 0, fontSize: '13px', color: '#60a5fa', fontWeight: '600' }}>
                        {formatPrice(item.price * item.qty)}
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                      <button
                        onClick={() => changeQty(item.id, -1)}
                        style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700' }}
                        aria-label="Decrease quantity"
                      >−</button>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: 'white', minWidth: '20px', textAlign: 'center' }}>{item.qty}</span>
                      <button
                        onClick={() => changeQty(item.id, 1)}
                        style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700' }}
                        aria-label="Increase quantity"
                      >+</button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        aria-label={`${tr.remove} ${info.name}`}
                      >
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                          <line x1="2" y1="2" x2="14" y2="14" /><line x1="14" y1="2" x2="2" y2="14" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Cart footer */}
        {cart.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '16px', color: '#9ca3af', fontWeight: '600' }}>{tr.total}</span>
              <span style={{ fontSize: '22px', fontWeight: '800', color: 'white' }}>{formatPrice(cartTotal)}</span>
            </div>
            <button
              onClick={() => { setCartOpen(false); setCheckoutOpen(true) }}
              style={primaryBtnStyle}
            >
              {tr.checkout}
            </button>
          </div>
        )}
      </div>

      {/* ── Checkout Modal Overlay ───────────────────────────────────────── */}
      {checkoutOpen && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) closeCheckout() }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.75)',
            zIndex: 1300,
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          role="dialog"
          aria-label={tr.checkoutTitle}
          aria-modal="true"
        >
          <div style={{
            background: 'linear-gradient(180deg,#071629 0%,#040e1e 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '560px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '36px',
          }}>
            {orderSuccess ? (
              /* Success state */
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{
                  width: '72px', height: '72px',
                  background: 'rgba(5,150,105,0.15)',
                  border: '2px solid rgba(5,150,105,0.4)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px',
                }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 style={{ fontSize: '26px', fontWeight: '800', color: 'white', margin: '0 0 12px' }}>{tr.orderSuccess}</h2>
                <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.6', margin: '0 0 28px' }}>{tr.orderSuccessSub}</p>
                <button onClick={closeCheckout} style={{ ...primaryBtnStyle, width: 'auto', padding: '12px 32px' }}>
                  Close
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                  <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '800', color: 'white' }}>{tr.checkoutTitle}</h2>
                  <button
                    onClick={closeCheckout}
                    style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: '6px' }}
                    aria-label="Close checkout"
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <line x1="4" y1="4" x2="18" y2="18" /><line x1="18" y1="4" x2="4" y2="18" />
                    </svg>
                  </button>
                </div>

                {/* Order summary */}
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px',
                  padding: '16px',
                  marginBottom: '24px',
                }}>
                  <p style={{ fontSize: '12px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>
                    {tr.orderSummary}
                  </p>
                  {cart.map(item => {
                    const info = tr.products[item.id]
                    return (
                      <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '14px', color: '#d1d5db' }}>{info.name} × {item.qty}</span>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: 'white' }}>{formatPrice(item.price * item.qty)}</span>
                      </div>
                    )
                  })}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px', marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '15px', fontWeight: '700', color: 'white' }}>{tr.total}</span>
                    <span style={{ fontSize: '18px', fontWeight: '800', color: '#60a5fa' }}>{formatPrice(cartTotal)}</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handlePlaceOrder}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Name */}
                    <div>
                      <label style={labelStyle}>{tr.formName}</label>
                      <input
                        required
                        type="text"
                        value={formName}
                        onChange={e => setFormName(e.target.value)}
                        placeholder={tr.formNamePh}
                        style={inputStyle}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label style={labelStyle}>{tr.formEmail}</label>
                      <input
                        required
                        type="email"
                        value={formEmail}
                        onChange={e => setFormEmail(e.target.value)}
                        placeholder={tr.formEmailPh}
                        style={inputStyle}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label style={labelStyle}>{tr.formPhone}</label>
                      <input
                        type="tel"
                        value={formPhone}
                        onChange={e => setFormPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        style={inputStyle}
                      />
                    </div>

                    {/* Delivery */}
                    <div>
                      <label style={labelStyle}>{tr.formDelivery}</label>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {[
                          { key: 'ship', label: tr.deliveryShip },
                          { key: 'nyc',  label: tr.deliveryNYC },
                          { key: 'lima', label: tr.deliveryLima },
                        ].map(opt => (
                          <button
                            key={opt.key}
                            type="button"
                            onClick={() => setDelivery(opt.key)}
                            style={{
                              flex: 1,
                              minWidth: '120px',
                              padding: '10px 12px',
                              borderRadius: '10px',
                              border: delivery === opt.key ? '1px solid rgba(37,99,235,0.5)' : '1px solid rgba(255,255,255,0.1)',
                              background: delivery === opt.key ? 'rgba(37,99,235,0.18)' : 'rgba(255,255,255,0.03)',
                              color: delivery === opt.key ? '#60a5fa' : '#9ca3af',
                              fontSize: '13px',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'all 0.2s',
                            }}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Shipping address fields */}
                    {delivery === 'ship' && (
                      <>
                        <div>
                          <label style={labelStyle}>{tr.formAddress}</label>
                          <input
                            required
                            type="text"
                            value={formAddress}
                            onChange={e => setFormAddress(e.target.value)}
                            placeholder={tr.formAddressPh}
                            style={inputStyle}
                          />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                          <div>
                            <label style={labelStyle}>{tr.formCity}</label>
                            <input
                              required
                              type="text"
                              value={formCity}
                              onChange={e => setFormCity(e.target.value)}
                              placeholder={tr.formCityPh}
                              style={inputStyle}
                            />
                          </div>
                          <div>
                            <label style={labelStyle}>{tr.formCountry}</label>
                            <input
                              required
                              type="text"
                              value={formCountry}
                              onChange={e => setFormCountry(e.target.value)}
                              placeholder={tr.formCountryPh}
                              style={inputStyle}
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {/* Notes */}
                    <div>
                      <label style={labelStyle}>{tr.formNotes}</label>
                      <textarea
                        value={formNotes}
                        onChange={e => setFormNotes(e.target.value)}
                        placeholder={tr.formNotesPh}
                        rows={3}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }}
                      />
                    </div>

                    {/* Payment note */}
                    <div style={{
                      background: 'rgba(37,99,235,0.08)',
                      border: '1px solid rgba(37,99,235,0.2)',
                      borderRadius: '10px',
                      padding: '14px',
                    }}>
                      <p style={{ margin: 0, fontSize: '13px', color: '#93c5fd', lineHeight: '1.6' }}>
                        {tr.paymentNote}
                      </p>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitting}
                      style={{ ...primaryBtnStyle, opacity: submitting ? 0.6 : 1 }}
                    >
                      {submitting ? tr.placing : tr.placeOrder}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
