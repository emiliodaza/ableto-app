import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '40px' }}>
    <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>{title}</h2>
    <div style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.8' }}>{children}</div>
  </div>
)

const content = {
  en: {
    badge: 'Legal',
    title: 'Cookie Policy',
    updated: 'Last updated: March 21, 2026',
    intro: 'This Cookie Policy explains how AbleTo approaches cookies and similar tracking technologies on our website. We are committed to transparency about what data we collect and how.',
    sections: [
      {
        title: '1. What Are Cookies?',
        body: [
          'Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and improve your experience. Cookies can be "session" cookies (deleted when you close your browser) or "persistent" cookies (remain on your device for a set period).',
        ],
      },
      {
        title: '2. Our Current Use of Cookies',
        body: [
          'The AbleTo website currently does not set any cookies on your device.',
          'Your language preference (English or Spanish) is stored in your browser session memory only and is not persisted as a cookie or in local storage. It resets when you close the tab.',
          'We do not use analytics cookies, advertising cookies, or any third-party tracking technologies at this time.',
        ],
      },
      {
        title: '3. Future Use',
        body: [
          'We may introduce cookies in the future as we add features to our website, such as persistent language preferences or analytics to help us improve the user experience. If we do, we will update this policy and, where required by law, ask for your consent.',
        ],
      },
      {
        title: '4. Third-Party Content',
        body: [
          'Our website may contain links to third-party websites (such as LinkedIn or Instagram). Visiting those sites is subject to their own cookie policies, which we do not control.',
        ],
      },
      {
        title: '5. Managing Cookies',
        body: [
          'Even though we do not currently set cookies, you can control cookies at any time through your browser settings. Most browsers allow you to:',
          '- View and delete cookies stored on your device.',
          '- Block cookies from specific or all websites.',
          '- Set your browser to notify you when a cookie is being placed.',
          'For more information, visit your browser\'s help documentation.',
        ],
      },
      {
        title: '6. Changes to This Policy',
        body: [
          'We may update this Cookie Policy from time to time. We will post the updated policy with a revised "Last updated" date. Continued use of the Site after updates constitutes acceptance.',
        ],
      },
      {
        title: '7. Contact Us',
        body: [
          'For questions about this Cookie Policy, please contact us at:',
          'Email: team@abletolab.org',
          'AbleTo, New York City, NY',
        ],
      },
    ],
  },
  es: {
    badge: 'Legal',
    title: 'Politica de Cookies',
    updated: 'Ultima actualizacion: 21 de marzo de 2026',
    intro: 'Esta Politica de Cookies explica como AbleTo aborda el uso de cookies y tecnologias de seguimiento similares en nuestro sitio web. Estamos comprometidos con la transparencia sobre los datos que recopilamos.',
    sections: [
      {
        title: '1. Que son las Cookies?',
        body: [
          'Las cookies son pequeños archivos de texto que se colocan en tu dispositivo cuando visitas un sitio web. Ayudan al sitio a recordar tus preferencias y mejorar tu experiencia.',
        ],
      },
      {
        title: '2. Nuestro Uso Actual de Cookies',
        body: [
          'El sitio web de AbleTo actualmente no instala ninguna cookie en tu dispositivo.',
          'Tu preferencia de idioma (ingles o espanol) se almacena unicamente en la memoria de sesion del navegador y no se guarda como cookie ni en el almacenamiento local. Se restablece cuando cierras la pestana.',
          'En este momento, no utilizamos cookies de analitica, publicidad ni ninguna tecnologia de seguimiento de terceros.',
        ],
      },
      {
        title: '3. Uso Futuro',
        body: [
          'Es posible que en el futuro incorporemos cookies a medida que agregamos funciones a nuestro sitio web. Si lo hacemos, actualizaremos esta politica y, cuando lo exija la ley, solicitaremos tu consentimiento.',
        ],
      },
      {
        title: '4. Contenido de Terceros',
        body: [
          'Nuestro sitio web puede contener enlaces a sitios de terceros (como LinkedIn o Instagram). Visitar esos sitios esta sujeto a sus propias politicas de cookies, sobre las cuales no tenemos control.',
        ],
      },
      {
        title: '5. Gestion de Cookies',
        body: [
          'Aunque actualmente no instalamos cookies, puedes controlarlas en cualquier momento a traves de la configuracion de tu navegador.',
        ],
      },
      {
        title: '6. Cambios a esta Politica',
        body: [
          'Podemos actualizar esta Politica de Cookies periodicamente. Publicaremos la politica actualizada con una nueva fecha.',
        ],
      },
      {
        title: '7. Contactanos',
        body: [
          'Para preguntas sobre esta Politica de Cookies, contactanos en:',
          'Correo: team@abletolab.org',
          'AbleTo, Nueva York, NY',
        ],
      },
    ],
  },
}

export default function CookiePolicy() {
  const { lang } = useLang()
  const c = content[lang] || content.en

  return (
    <div style={{ background: '#040e1e', minHeight: '100vh', padding: '80px 0 100px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#6b7280' }}>
          <Link to="/" style={{ color: '#6b7280', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = '#3b82f6'} onMouseLeave={e => e.target.style.color = '#6b7280'}>Home</Link>
          <span>/</span>
          <span style={{ color: '#9ca3af' }}>{c.title}</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{ fontSize: '12px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{c.badge}</span>
          <h1 style={{ fontSize: '40px', fontWeight: '800', color: '#ffffff', marginTop: '8px', marginBottom: '12px', letterSpacing: '-0.02em' }}>{c.title}</h1>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>{c.updated}</p>
          <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '2px', marginTop: '20px' }} />
        </div>

        {/* Intro */}
        <p style={{ color: '#d1d5db', fontSize: '16px', lineHeight: '1.8', marginBottom: '48px', padding: '24px', background: 'rgba(59,130,246,0.06)', borderLeft: '3px solid #3b82f6', borderRadius: '0 8px 8px 0' }}>
          {c.intro}
        </p>

        {/* Current status notice */}
        <div style={{ marginBottom: '40px', padding: '20px 24px', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', marginTop: '5px', flexShrink: 0 }} />
          <p style={{ color: '#86efac', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
            {lang === 'en'
              ? 'This website currently sets no cookies on your device.'
              : 'Este sitio web actualmente no instala ninguna cookie en tu dispositivo.'}
          </p>
        </div>

        {/* Sections */}
        {c.sections.map((s, i) => (
          <Section key={i} title={s.title}>
            {s.body.map((line, j) => (
              <p key={j} style={{ marginBottom: '8px' }}>{line}</p>
            ))}
          </Section>
        ))}

        {/* Back links */}
        <div style={{ marginTop: '60px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Link to="/privacy" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none' }}>Terms of Service</Link>
          <Link to="/contact" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none' }}>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
