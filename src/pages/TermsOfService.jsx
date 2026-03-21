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
    title: 'Terms of Service',
    updated: 'Last updated: March 21, 2026',
    intro: 'Please read these Terms of Service carefully before using the AbleTo website. By accessing or using our website, you agree to be bound by these terms. If you do not agree, please do not use our website.',
    sections: [
      {
        title: '1. Acceptance of Terms',
        body: [
          'By accessing or using the AbleTo website (the "Site"), you agree to comply with and be bound by these Terms of Service and our Privacy Policy. These terms apply to all visitors, users, and others who access the Site.',
        ],
      },
      {
        title: '2. Use of the Site',
        body: [
          'You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others. You may not:',
          '• Use the Site to transmit any harmful, offensive, or unlawful content.',
          '• Attempt to gain unauthorized access to any part of the Site or its systems.',
          '• Use automated tools to scrape, crawl, or copy content from the Site without our written permission.',
          '• Impersonate AbleTo, its team members, or any other person or entity.',
        ],
      },
      {
        title: '3. Intellectual Property',
        body: [
          'All content on this Site, including text, graphics, logos, images, and software, is the property of AbleTo or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.',
        ],
      },
      {
        title: '4. User Submissions',
        body: [
          'When you submit information through our contact or application forms, you grant AbleTo a non-exclusive, royalty-free license to use that information for the purpose for which it was submitted (e.g., processing your application or responding to your inquiry). You represent that all information you submit is accurate and not misleading.',
        ],
      },
      {
        title: '5. Products and Technology',
        body: [
          'Descriptions of AbleTo\'s products (Touchless, DotSense) on this Site are for informational purposes only. Product availability, features, and specifications are subject to change without notice. Nothing on this Site constitutes an offer or binding commitment to provide any product or service.',
        ],
      },
      {
        title: '6. Disclaimer of Warranties',
        body: [
          'The Site is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. AbleTo does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.',
        ],
      },
      {
        title: '7. Limitation of Liability',
        body: [
          'To the fullest extent permitted by law, AbleTo shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Site or its content.',
        ],
      },
      {
        title: '8. Third-Party Links',
        body: [
          'The Site may contain links to third-party websites. AbleTo is not responsible for the content, accuracy, or practices of any linked third-party site. We encourage you to review the terms and privacy policies of any site you visit.',
        ],
      },
      {
        title: '9. Modifications',
        body: [
          'We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after changes are posted constitutes your acceptance of the revised terms.',
        ],
      },
      {
        title: '10. Governing Law',
        body: [
          'These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.',
        ],
      },
      {
        title: '11. Contact',
        body: [
          'For questions about these Terms of Service, contact us at:',
          'Email: team@abletolab.org',
          'AbleTo, New York City, NY',
        ],
      },
    ],
  },
  es: {
    badge: 'Legal',
    title: 'Términos de Servicio',
    updated: 'Última actualización: 21 de marzo de 2026',
    intro: 'Por favor lee estos Términos de Servicio detenidamente antes de usar el sitio web de AbleTo. Al acceder o usar nuestro sitio, aceptas estar sujeto a estos términos.',
    sections: [
      {
        title: '1. Aceptación de los Términos',
        body: [
          'Al acceder o usar el sitio web de AbleTo (el "Sitio"), aceptas cumplir y estar sujeto a estos Términos de Servicio y nuestra Política de Privacidad.',
        ],
      },
      {
        title: '2. Uso del Sitio',
        body: [
          'Aceptas usar el Sitio solo con fines legales. No puedes:',
          '• Transmitir contenido dañino, ofensivo o ilegal.',
          '• Intentar acceder sin autorización a cualquier parte del Sitio.',
          '• Usar herramientas automatizadas para extraer contenido sin permiso escrito.',
          '• Suplantar la identidad de AbleTo, sus miembros u otras personas.',
        ],
      },
      {
        title: '3. Propiedad Intelectual',
        body: [
          'Todo el contenido del Sitio es propiedad de AbleTo o sus proveedores de contenido y está protegido por las leyes de propiedad intelectual. No puedes reproducir ni distribuir contenido sin nuestro permiso expreso.',
        ],
      },
      {
        title: '4. Envíos de Usuarios',
        body: [
          'Al enviar información a través de nuestros formularios, otorgas a AbleTo una licencia no exclusiva para usar esa información con el fin para el que fue enviada. Declaras que toda la información que envíes es precisa.',
        ],
      },
      {
        title: '5. Descargo de Garantías',
        body: [
          'El Sitio se proporciona "tal como está" sin garantías de ningún tipo. AbleTo no garantiza que el Sitio sea ininterrumpido, libre de errores o virus.',
        ],
      },
      {
        title: '6. Limitación de Responsabilidad',
        body: [
          'En la máxima medida permitida por la ley, AbleTo no será responsable de daños indirectos, incidentales o consecuentes derivados del uso del Sitio.',
        ],
      },
      {
        title: '7. Modificaciones',
        body: [
          'Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios serán efectivos inmediatamente al publicarse en el Sitio.',
        ],
      },
      {
        title: '8. Ley Aplicable',
        body: [
          'Estos Términos se regirán por las leyes del Estado de Nueva York.',
        ],
      },
      {
        title: '9. Contacto',
        body: [
          'Para preguntas sobre estos Términos, contáctanos en:',
          'Correo: team@abletolab.org',
          'AbleTo, Nueva York, NY',
        ],
      },
    ],
  },
}

export default function TermsOfService() {
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
          <Link to="/privacy" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none' }}>Privacy Policy →</Link>
          <Link to="/cookies" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none' }}>Cookie Policy →</Link>
          <Link to="/contact" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none' }}>Contact Us →</Link>
        </div>
      </div>
    </div>
  )
}
