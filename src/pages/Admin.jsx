import React, { useState } from 'react'
import { members as hardcodedMembers } from '../data/teamData'

const LockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
)

const EditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
)

const TrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
    <path d="M10 11v6"/>
    <path d="M14 11v6"/>
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const LogoutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
)

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
)

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

function getAvatarGradient(id) {
  const gradients = [
    'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
    'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
    'linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)',
    'linear-gradient(135deg, #1d4ed8 0%, #4f46e5 100%)',
    'linear-gradient(135deg, #4f46e5 0%, #0891b2 100%)',
  ]
  return gradients[(parseInt(id) - 1) % gradients.length]
}

const emptyMember = {
  name: '',
  role: '',
  bio: '',
  photo: '',
  linkedin: '',
  email: '',
  projects: '',
}

function MemberModal({ member, onSave, onClose }) {
  const [form, setForm] = useState(
    member
      ? { ...member, projects: Array.isArray(member.projects) ? member.projects.join(', ') : member.projects }
      : { ...emptyMember }
  )
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const projects = form.projects
      ? form.projects.split(',').map(p => p.trim()).filter(Boolean)
      : []
    onSave({ ...form, projects })
  }

  const inputStyle = (name) => ({
    width: '100%',
    background: focused === name ? 'rgba(37,99,235,0.05)' : 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === name ? 'rgba(37,99,235,0.5)' : 'rgba(255,255,255,0.1)'}`,
    color: 'white',
    borderRadius: '8px',
    padding: '11px 14px',
    fontSize: '13px',
    outline: 'none',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box',
    fontFamily: 'Inter, sans-serif',
  })

  const labelStyle = {
    display: 'block',
    fontSize: '11px',
    fontWeight: '600',
    color: '#9ca3af',
    marginBottom: '6px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '24px',
    }}
    onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={{
        background: '#0d0d2b',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '560px',
        maxHeight: '90vh',
        overflow: 'auto',
        padding: '32px',
        boxShadow: '0 40px 120px rgba(0,0,0,0.6)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>
            {member ? 'Edit Member' : 'Add New Member'}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#9ca3af',
              borderRadius: '8px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          >
            <CloseIcon />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>Full Name *</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} placeholder="Name" required style={inputStyle('name')} />
            </div>
            <div>
              <label style={labelStyle}>Role *</label>
              <input type="text" name="role" value={form.role} onChange={handleChange} onFocus={() => setFocused('role')} onBlur={() => setFocused(null)} placeholder="e.g. Software Engineer" required style={inputStyle('role')} />
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Bio</label>
            <textarea name="bio" value={form.bio} onChange={handleChange} onFocus={() => setFocused('bio')} onBlur={() => setFocused(null)} placeholder="Short bio..." rows={3} style={{ ...inputStyle('bio'), resize: 'vertical' }} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Photo URL</label>
            <input type="url" name="photo" value={form.photo} onChange={handleChange} onFocus={() => setFocused('photo')} onBlur={() => setFocused(null)} placeholder="https://..." style={inputStyle('photo')} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>LinkedIn URL</label>
              <input type="url" name="linkedin" value={form.linkedin} onChange={handleChange} onFocus={() => setFocused('linkedin')} onBlur={() => setFocused(null)} placeholder="https://linkedin.com/in/..." style={inputStyle('linkedin')} />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} placeholder="email@example.com" style={inputStyle('email')} />
            </div>
          </div>

          <div style={{ marginBottom: '28px' }}>
            <label style={labelStyle}>Projects (comma-separated)</label>
            <input type="text" name="projects" value={form.projects} onChange={handleChange} onFocus={() => setFocused('projects')} onBlur={() => setFocused(null)} placeholder="Touchless, Braille Instruction System" style={inputStyle('projects')} />
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              type="submit"
              style={{
                flex: 1,
                background: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '12px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; }}
            >
              {member ? 'Save Changes' : 'Add Member'}
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.05)',
                color: '#9ca3af',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                padding: '12px 20px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function DeleteConfirmModal({ member, onConfirm, onCancel }) {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '24px',
    }}>
      <div style={{
        background: '#0d0d2b',
        border: '1px solid rgba(239,68,68,0.3)',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '400px',
        padding: '32px',
        textAlign: 'center',
      }}>
        <div style={{
          width: '56px', height: '56px',
          borderRadius: '50%',
          background: 'rgba(239,68,68,0.1)',
          border: '1px solid rgba(239,68,68,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          color: '#ef4444',
        }}>
          <TrashIcon />
        </div>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
          Delete Member?
        </h3>
        <p style={{ color: '#9ca3af', fontSize: '13px', marginBottom: '28px', lineHeight: 1.6 }}>
          Are you sure you want to remove <strong style={{ color: 'white' }}>{member.name}</strong> from the team? This action cannot be undone.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button
            onClick={onConfirm}
            style={{
              background: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 24px',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#dc2626'}
            onMouseLeave={e => e.currentTarget.style.background = '#ef4444'}
          >
            Delete
          </button>
          <button
            onClick={onCancel}
            style={{
              background: 'rgba(255,255,255,0.05)',
              color: '#9ca3af',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              padding: '10px 24px',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [error, setError] = useState('')
  const [members, setMembers] = useState(hardcodedMembers)
  const [showModal, setShowModal] = useState(false)
  const [editingMember, setEditingMember] = useState(null)
  const [deletingMember, setDeletingMember] = useState(null)
  const [focusedPw, setFocusedPw] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'ableto2024') {
      setLoggedIn(true)
      setError('')
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  const handleSaveMember = (formData) => {
    let updated
    if (editingMember) {
      updated = members.map(m => m.id === editingMember.id ? { ...formData, id: editingMember.id } : m)
    } else {
      const newId = String(Date.now())
      updated = [...members, { ...formData, id: newId }]
    }
    setMembers(updated)
    setShowModal(false)
    setEditingMember(null)
  }

  const handleDeleteMember = () => {
    const updated = members.filter(m => m.id !== deletingMember.id)
    setMembers(updated)
    setDeletingMember(null)
  }

  if (!loggedIn) {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #05050f 0%, #0a0a1a 50%, #0d0d2b 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glows */}
        <div style={{ position: 'absolute', top: '20%', left: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 60%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 60%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '24px',
          padding: '48px',
          width: '100%',
          maxWidth: '400px',
          backdropFilter: 'blur(20px)',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(37,99,235,0.12)',
            border: '1px solid rgba(37,99,235,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            color: '#3b82f6',
          }}>
            <LockIcon />
          </div>

          <h1 style={{ fontSize: '22px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
            Admin Access
          </h1>
          <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: '32px', lineHeight: 1.6 }}>
            Enter your admin password to access the team management panel.
          </p>

          <form onSubmit={handleLogin}>
            <div style={{ position: 'relative', marginBottom: '16px' }}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={e => { setPassword(e.target.value); setError(''); }}
                onFocus={() => setFocusedPw(true)}
                onBlur={() => setFocusedPw(false)}
                placeholder="Enter admin password"
                required
                style={{
                  width: '100%',
                  background: focusedPw ? 'rgba(37,99,235,0.05)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${error ? 'rgba(239,68,68,0.5)' : focusedPw ? 'rgba(37,99,235,0.5)' : 'rgba(255,255,255,0.08)'}`,
                  color: 'white',
                  borderRadius: '10px',
                  padding: '13px 44px 13px 16px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  boxSizing: 'border-box',
                  fontFamily: 'Inter, sans-serif',
                  textAlign: 'left',
                }}
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#6b7280',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {passwordVisible ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>

            {error && (
              <div style={{
                background: 'rgba(239,68,68,0.08)',
                border: '1px solid rgba(239,68,68,0.25)',
                borderRadius: '8px',
                padding: '10px 14px',
                marginBottom: '16px',
                fontSize: '13px',
                color: '#f87171',
                textAlign: 'left',
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              style={{
                width: '100%',
                background: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                padding: '13px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,99,235,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.3)'; }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      background: 'linear-gradient(180deg, #05050f 0%, #0a0a1a 100%)',
      minHeight: '100vh',
      paddingTop: '88px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 80px' }}>
        {/* Admin Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '40px',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{
                background: 'rgba(37,99,235,0.12)',
                border: '1px solid rgba(37,99,235,0.25)',
                borderRadius: '8px',
                padding: '6px 10px',
                fontSize: '11px',
                fontWeight: '700',
                color: '#3b82f6',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                Admin Panel
              </div>
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: '800', color: 'white', letterSpacing: '-0.02em' }}>
              Team Management
            </h1>
            <p style={{ color: '#6b7280', fontSize: '13px', marginTop: '4px' }}>
              {members.length} member{members.length !== 1 ? 's' : ''} in the team
            </p>
            <p style={{ color: '#f59e0b', fontSize: '12px', marginTop: '8px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '8px', padding: '8px 12px', display: 'inline-block' }}>
              Note: changes here are session-only. To update permanently, edit <code style={{ fontFamily: 'monospace', color: '#fbbf24' }}>src/data/teamData.js</code> directly.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => { setEditingMember(null); setShowModal(true); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                padding: '11px 20px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 16px rgba(37,99,235,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <PlusIcon /> Add Member
            </button>

            <button
              onClick={() => setLoggedIn(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.04)',
                color: '#9ca3af',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '11px 20px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              <LogoutIcon /> Logout
            </button>
          </div>
        </div>

        {/* Members Grid */}
        {members.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '80px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '20px',
          }}>
            <p style={{ color: '#6b7280', fontSize: '16px', marginBottom: '20px' }}>No team members yet.</p>
            <button
              onClick={() => setShowModal(true)}
              style={{
                background: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Add First Member
            </button>
          </div>
        ) : (
          <div style={{
            background: 'rgba(255,255,255,0.01)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}>
            {/* Table Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr 160px 1fr 160px',
              padding: '14px 20px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.02)',
            }}>
              {['Photo', 'Name & Role', 'Email', 'Projects', 'Actions'].map(h => (
                <span key={h} style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {h}
                </span>
              ))}
            </div>

            {/* Table Rows */}
            {members.map((member, i) => (
              <div
                key={member.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr 160px 1fr 160px',
                  padding: '16px 20px',
                  borderBottom: i < members.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                {/* Photo */}
                <div>
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(37,99,235,0.3)' }} />
                  ) : (
                    <div style={{
                      width: '40px', height: '40px',
                      borderRadius: '50%',
                      background: getAvatarGradient(member.id),
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '14px', fontWeight: '700', color: 'white',
                    }}>
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>

                {/* Name & Role */}
                <div>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '3px' }}>{member.name}</p>
                  <span style={{
                    fontSize: '11px', color: '#3b82f6', fontWeight: '500',
                    background: 'rgba(37,99,235,0.1)',
                    borderRadius: '4px',
                    padding: '2px 6px',
                  }}>
                    {member.role}
                  </span>
                </div>

                {/* Email */}
                <div>
                  <p style={{ fontSize: '12px', color: '#6b7280', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {member.email || 'N/A'}
                  </p>
                </div>

                {/* Projects */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {member.projects && member.projects.length > 0 ? (
                    member.projects.map(p => (
                      <span key={p} style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '4px',
                        padding: '2px 7px',
                        fontSize: '11px',
                        color: '#d1d5db',
                      }}>
                        {p}
                      </span>
                    ))
                  ) : (
                    <span style={{ fontSize: '12px', color: '#4b5563' }}>None</span>
                  )}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => { setEditingMember(member); setShowModal(true); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: 'rgba(37,99,235,0.1)',
                      color: '#3b82f6',
                      border: '1px solid rgba(37,99,235,0.2)',
                      borderRadius: '6px',
                      padding: '6px 10px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.2)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.1)'; }}
                  >
                    <EditIcon /> Edit
                  </button>
                  <button
                    onClick={() => setDeletingMember(member)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: 'rgba(239,68,68,0.08)',
                      color: '#f87171',
                      border: '1px solid rgba(239,68,68,0.2)',
                      borderRadius: '6px',
                      padding: '6px 10px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.16)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.08)'; }}
                  >
                    <TrashIcon /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Storage note */}
        <p style={{ color: '#374151', fontSize: '12px', marginTop: '20px', textAlign: 'center' }}>
          Data is stored in browser localStorage. Changes persist across sessions on this device.
        </p>
      </div>

      {/* Modals */}
      {showModal && (
        <MemberModal
          member={editingMember}
          onSave={handleSaveMember}
          onClose={() => { setShowModal(false); setEditingMember(null); }}
        />
      )}

      {deletingMember && (
        <DeleteConfirmModal
          member={deletingMember}
          onConfirm={handleDeleteMember}
          onCancel={() => setDeletingMember(null)}
        />
      )}
    </div>
  )
}
