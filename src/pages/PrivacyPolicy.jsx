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
    title: 'Privacy Policy',
    updated: 'Last updated: March 21, 2026',
    intro: 'AbleTo ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.',
    sections: [
      {
        title: '1. Information We Collect',
        body: [
          'We may collect information you provide directly to us, including:',
          '• Contact information (name, email address, phone number) when you fill out our contact or application forms.',
          '• Communications you send us, such as messages or inquiries.',
          '• Voluntarily submitted portfolio links, LinkedIn profiles, or resume URLs.',
          'We also collect certain information automatically when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages visited.',
        ],
      },
      {
        title: '2. How We Use Your Information',
        body: [
          'We use the information we collect to:',
          '• Respond to your inquiries and communicate with you.',
          '• Process and evaluate job or volunteer applications.',
          '• Improve our website and services.',
          '• Send you updates about AbleTo if you have opted in.',
          '• Comply with legal obligations.',
        ],
      },
      {
        title: '3. Sharing of Information',
        body: [
          'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. We may also disclose information when required by law.',
        ],
      },
      {
        title: '4. Data Retention',
        body: [
          'We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required or permitted by law. Application data is retained for up to 12 months after submission.',
        ],
      },
      {
        title: '5. Security',
        body: [
          'We implement reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.',
        ],
      },
      {
        title: '6. Your Rights',
        body: [
          'Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data, as well as the right to object to or restrict certain processing. To exercise these rights, please contact us at team@abletolab.org.',
        ],
      },
      {
        title: '7. Third-Party Links',
        body: [
          'Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.',
        ],
      },
      {
        title: '8. Children\'s Privacy',
        body: [
          'Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.',
        ],
      },
      {
        title: '9. Changes to This Policy',
        body: [
          'We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date.',
        ],
      },
      {
        title: '10. Contact Us',
        body: [
          'If you have questions about this Privacy Policy, please contact us at:',
          'Email: team@abletolab.org',
          'AbleTo, New York City, NY',
        ],
      },
    ],
  },
  es: {
    badge: 'Legal',
    title: 'Política de Privacidad',
    updated: 'Última actualización: 21 de marzo de 2026',
    intro: 'AbleTo ("nosotros") se compromete a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando visitas nuestro sitio web o interactúas con nuestros servicios.',
    sections: [
      {
        title: '1. Información que Recopilamos',
        body: [
          'Podemos recopilar información que nos proporcionas directamente, incluyendo:',
          '• Información de contacto (nombre, correo electrónico, teléfono) cuando completas nuestros formularios.',
          '• Comunicaciones que nos envías, como mensajes o consultas.',
          '• Enlaces de portafolio, perfiles de LinkedIn o CV enviados voluntariamente.',
          'También recopilamos información automáticamente cuando visitas nuestro sitio, incluyendo dirección IP, tipo de navegador, sistema operativo y páginas visitadas.',
        ],
      },
      {
        title: '2. Cómo Usamos tu Información',
        body: [
          'Usamos la información recopilada para:',
          '• Responder a tus consultas y comunicarnos contigo.',
          '• Procesar y evaluar solicitudes de empleo o voluntariado.',
          '• Mejorar nuestro sitio web y servicios.',
          '• Enviarte actualizaciones de AbleTo si has optado por recibirlas.',
          '• Cumplir con obligaciones legales.',
        ],
      },
      {
        title: '3. Compartir Información',
        body: [
          'No vendemos, intercambiamos ni alquilamos tu información personal a terceros. Podemos compartir tu información con proveedores de servicios de confianza bajo acuerdos de confidencialidad. También podemos divulgar información cuando lo exija la ley.',
        ],
      },
      {
        title: '4. Retención de Datos',
        body: [
          'Conservamos tu información personal el tiempo necesario para cumplir los propósitos descritos en esta política. Los datos de solicitudes se retienen hasta 12 meses después de la presentación.',
        ],
      },
      {
        title: '5. Seguridad',
        body: [
          'Implementamos medidas técnicas y organizativas razonables para proteger tu información. Sin embargo, ningún método de transmisión por internet es 100% seguro.',
        ],
      },
      {
        title: '6. Tus Derechos',
        body: [
          'Según tu jurisdicción, puedes tener derecho a acceder, corregir o eliminar tus datos personales. Para ejercer estos derechos, contáctanos en team@abletolab.org.',
        ],
      },
      {
        title: '7. Cambios a esta Política',
        body: [
          'Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos los cambios significativos publicando la nueva política con fecha actualizada.',
        ],
      },
      {
        title: '8. Contáctanos',
        body: [
          'Si tienes preguntas sobre esta Política de Privacidad, contáctanos en:',
          'Correo: team@abletolab.org',
          'AbleTo, Nueva York, NY',
        ],
      },
    ],
  },
}

export default function PrivacyPolicy() {
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
          <Link to="/terms" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none' }}>Terms of Service →</Link>
          <Link to="/cookies" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none' }}>Cookie Policy →</Link>
          <Link to="/contact" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none' }}>Contact Us →</Link>
        </div>
      </div>
    </div>
  )
}
