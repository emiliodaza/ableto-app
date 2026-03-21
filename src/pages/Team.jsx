import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { members } from '../data/teamData'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const gradients = [
  'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
  'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
  'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
  'linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)',
  'linear-gradient(135deg, #2563eb 0%, #93c5fd 100%)',
  'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
  'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
]

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

function Avatar({ member, size = 64, muted = false }) {
  const [imgError, setImgError] = useState(false)
  const gradient = gradients[(parseInt(member.id) - 1) % gradients.length]

  if (member.photo && !imgError) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        onError={() => setImgError(true)}
        style={{
          width: size, height: size, borderRadius: '50%',
          objectFit: 'cover', border: '2px solid rgba(37,99,235,0.4)',
          flexShrink: 0, opacity: muted ? 0.55 : 1,
        }}
      />
    )
  }
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: muted ? 'rgba(75,85,99,0.5)' : gradient,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.3, fontWeight: '700',
      color: muted ? '#9ca3af' : 'white',
      flexShrink: 0,
      border: '2px solid rgba(255,255,255,0.08)',
      boxShadow: muted ? 'none' : '0 4px 20px rgba(37,99,235,0.25)',
    }}>
      {getInitials(member.name)}
    </div>
  )
}

function SocialLinks({ member }) {
  if (!member.linkedin && !member.email) return null
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {member.linkedin && (
        <a
          href={member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`}
          target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px', fontWeight: '500', textDecoration: 'none', padding: '5px 9px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#3b82f6'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
        >
          <LinkedInIcon /> LinkedIn
        </a>
      )}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px', fontWeight: '500', textDecoration: 'none', padding: '5px 9px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#3b82f6'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
        >
          <EmailIcon /> Email
        </a>
      )}
    </div>
  )
}

function getBio(member, section, lang) {
  if (lang === 'es') {
    const esOverride = member.biosEs && member.biosEs[section]
    if (esOverride) return esOverride
    if (member.bioEs) return member.bioEs
  }
  return (member.bios && member.bios[section]) || member.bio
}

function ExecutiveCard({ member, lang, formerLabel }) {
  const [hovered, setHovered] = useState(false)
  const isFormer = !!member.isFormer

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isFormer
          ? 'rgba(255,255,255,0.01)'
          : hovered ? 'rgba(37,99,235,0.15)' : 'rgba(255,255,255,0.025)',
        border: isFormer
          ? '1px solid rgba(255,255,255,0.05)'
          : hovered ? '1px solid rgba(37,99,235,0.35)' : '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '32px 28px',
        transition: 'all 0.3s ease',
        transform: (!isFormer && hovered) ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: (!isFormer && hovered) ? '0 24px 64px rgba(37,99,235,0.15)' : '0 4px 24px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        opacity: isFormer ? 0.65 : 1,
      }}
    >
      {!isFormer && (
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '60%', height: '2px',
          background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
          opacity: hovered ? 1 : 0.4, transition: 'opacity 0.3s',
        }} />
      )}

      {isFormer && (
        <div style={{
          position: 'absolute', top: '14px', right: '14px',
          background: 'rgba(107,114,128,0.15)',
          border: '1px solid rgba(107,114,128,0.3)',
          borderRadius: '6px',
          padding: '2px 8px',
          fontSize: '9px',
          fontWeight: '700',
          color: '#6b7280',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          {formerLabel}
        </div>
      )}

      <Avatar member={member} size={80} muted={isFormer} />

      <div style={{ marginTop: '16px', marginBottom: '10px' }}>
        <h3 style={{ fontSize: '17px', fontWeight: '700', color: isFormer ? '#9ca3af' : 'white', letterSpacing: '-0.01em', marginBottom: '8px' }}>
          {member.name}
        </h3>
        <span style={{
          display: 'inline-block',
          background: isFormer ? 'rgba(107,114,128,0.1)' : 'rgba(37,99,235,0.12)',
          border: isFormer ? '1px solid rgba(107,114,128,0.2)' : '1px solid rgba(37,99,235,0.3)',
          borderRadius: '6px', padding: '4px 11px',
          fontSize: '11px', fontWeight: '700',
          color: isFormer ? '#6b7280' : '#60a5fa',
          letterSpacing: '0.04em',
        }}>
          {member.role}
        </span>
      </div>

      {member.university ? (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '5px',
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '20px', padding: '4px 12px', marginBottom: '16px',
        }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
          <span style={{ fontSize: '11px', color: '#6b7280', fontWeight: '500' }}>{member.university}</span>
        </div>
      ) : <div style={{ marginBottom: '16px' }} />}

      <p style={{ color: isFormer ? '#6b7280' : '#9ca3af', fontSize: '12.5px', lineHeight: 1.75, maxWidth: '260px', marginBottom: '16px' }}>
        {getBio(member, 'executive', lang)}
      </p>

      {!isFormer && member.projects && member.projects.length > 0 && (
        <div style={{
          width: '100%', paddingTop: '14px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center',
          marginBottom: '14px',
        }}>
          {member.projects.map(p => (
            <span key={p} style={{
              background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.18)',
              borderRadius: '5px', padding: '3px 9px',
              fontSize: '10px', color: '#93c5fd', fontWeight: '600', letterSpacing: '0.02em',
            }}>{p}</span>
          ))}
        </div>
      )}

      {!isFormer && <SocialLinks member={member} />}
    </div>
  )
}

function MemberCard({ member, section, lang }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(37,99,235,0.04)' : 'rgba(255,255,255,0.02)',
        border: hovered ? '1px solid rgba(37,99,235,0.25)' : '1px solid rgba(255,255,255,0.06)',
        borderRadius: '16px',
        padding: '22px',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 48px rgba(37,99,235,0.1)' : 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '14px' }}>
        <Avatar member={member} size={48} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'white', letterSpacing: '-0.01em', marginBottom: '2px' }}>
            {member.name}
          </h3>
          <span style={{
            display: 'inline-block',
            background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)',
            borderRadius: '4px', padding: '2px 8px',
            fontSize: '10px', fontWeight: '700', color: '#60a5fa', letterSpacing: '0.03em',
          }}>
            {member.role}
          </span>
        </div>
      </div>

      {member.university && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '12px' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
          <span style={{ fontSize: '11px', color: '#4b5563', fontWeight: '500' }}>{member.university}</span>
        </div>
      )}

      {member.bio && (
        <p style={{ color: '#9ca3af', fontSize: '12px', lineHeight: 1.7, margin: '0 0 14px' }}>
          {getBio(member, section, lang)}
        </p>
      )}

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '12px' }} />

      {member.projects && member.projects.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '12px' }}>
          {member.projects.map(p => (
            <span key={p} style={{
              background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.18)',
              borderRadius: '5px', padding: '3px 8px',
              fontSize: '10px', color: '#93c5fd', fontWeight: '600', letterSpacing: '0.02em',
            }}>{p}</span>
          ))}
        </div>
      )}

      <SocialLinks member={member} />
    </div>
  )
}

function DivisionHeader({ icon, label, count }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px',
      paddingBottom: '18px', borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(29,78,216,0.15))',
        border: '1px solid rgba(37,99,235,0.3)', borderRadius: '8px', padding: '8px 16px',
      }}>
        {icon}
        <span style={{ fontSize: '11px', fontWeight: '700', color: '#60a5fa', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          {label}
        </span>
      </div>
      <div style={{
        background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)',
        borderRadius: '20px', padding: '3px 10px',
        fontSize: '11px', fontWeight: '600', color: '#60a5fa',
      }}>
        {count}
      </div>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(37,99,235,0.3), transparent)' }} />
    </div>
  )
}

function SectionHeader({ label, title, count }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
        <div style={{ height: '1px', width: '32px', background: 'rgba(37,99,235,0.4)' }} />
        <span style={{ fontSize: '10px', fontWeight: '700', color: '#3b82f6', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          {label}
        </span>
        <div style={{
          background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)',
          borderRadius: '20px', padding: '2px 8px',
          fontSize: '10px', fontWeight: '600', color: '#60a5fa',
        }}>
          {count}
        </div>
      </div>
      <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: '800', color: 'white', letterSpacing: '-0.02em' }}>
        {title}
      </h2>
    </div>
  )
}

const DEPARTMENT_KEYS = [
  { key: 'Engineering', bioKey: 'engineering' },
  { key: 'Design & Product', bioKey: 'design' },
  { key: 'Marketing & Communications', bioKey: 'marketing' },
]

const FounderIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const LeadershipIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

export default function Team() {
  const { lang } = useLang()
  const tr = t[lang]

  const coFounders = members.filter(m => m.isFounder)
  const execLeadership = members.filter(m => m.isExecutive)

  return (
    <div style={{
      background: 'linear-gradient(180deg, #040e1e 0%, #071629 40%, #0a1c38 100%)',
      minHeight: '100vh',
      paddingTop: '88px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '8%', right: '-8%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 60%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '20%', left: '-8%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(37,99,235,0.11) 0%, transparent 60%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 60%)', borderRadius: '50%' }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px 100px', position: 'relative', zIndex: 1 }}>

        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.28)',
            borderRadius: '100px', padding: '6px 16px', marginBottom: '20px',
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', animation: 'pulse-glow 2s infinite' }} />
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#3b82f6', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {tr.team.badge}
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '900', color: 'white',
            letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px',
          }}>
            {tr.team.title1}{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6, #60a5fa, #93c5fd)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              {tr.team.title2}
            </span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
            {tr.team.sub}
          </p>
        </div>

        {/* ── Co-Founders ───────────────────────────────────────────── */}
        <section style={{ marginBottom: '72px' }}>
          <DivisionHeader
            icon={<FounderIcon />}
            label={tr.team.coFoundersLabel}
            count={coFounders.filter(m => !m.isFormer).length}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '20px',
          }}>
            {coFounders.map(m => (
              <ExecutiveCard key={m.id} member={m} lang={lang} formerLabel={tr.team.formerBadge} />
            ))}
          </div>
        </section>

        {/* ── Executive Board ────────────────────────────────────────── */}
        {execLeadership.length > 0 && (
          <section style={{ marginBottom: '72px' }}>
            <DivisionHeader
              icon={<LeadershipIcon />}
              label={tr.team.execLeadershipLabel}
              count={execLeadership.filter(m => !m.isFormer).length}
            />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '20px',
            }}>
              {execLeadership.map(m => (
                <ExecutiveCard key={m.id} member={m} lang={lang} formerLabel={tr.team.formerBadge} />
              ))}
            </div>
          </section>
        )}

        {/* ── Department Sections ───────────────────────────────────── */}
        {DEPARTMENT_KEYS.map(dept => {
          const deptMembers = members.filter(m =>
            !m.isFormer &&
            (m.department === dept.key || (dept.key === 'Engineering' && m.showInEng))
          )
          if (deptMembers.length === 0) return null
          const sectionTr = tr.team.sections[dept.key]
          return (
            <section key={dept.key} style={{ marginBottom: '64px' }}>
              <SectionHeader label={sectionTr.label} title={sectionTr.title} count={deptMembers.length} />
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '16px',
              }}>
                {deptMembers.map(m => <MemberCard key={`${dept.key}-${m.id}`} member={m} section={dept.bioKey} lang={lang} />)}
              </div>
            </section>
          )
        })}

        {/* Join CTA */}
        <div style={{
          textAlign: 'center', marginTop: '40px', padding: '48px',
          background: 'rgba(37,99,235,0.13)', border: '1px solid rgba(37,99,235,0.18)',
          borderRadius: '20px',
        }}>
          <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'white', marginBottom: '10px' }}>
            {tr.team.joinTitle}
          </h3>
          <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '24px' }}>
            {tr.team.joinSub}
          </p>
          <Link
            to="/apply"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#2563eb', color: 'white', textDecoration: 'none',
              borderRadius: '10px', padding: '12px 24px', fontWeight: '600', fontSize: '14px',
              transition: 'all 0.2s ease', boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            {tr.team.joinCta}
          </Link>
        </div>
      </div>
    </div>
  )
}
