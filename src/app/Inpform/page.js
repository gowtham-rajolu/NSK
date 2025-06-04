'use client';

import React, { useState } from 'react';

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    mobile: '',
    work_status: '',
    location: '',
    updates: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/submit-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (res.ok) {
        alert('Profile submitted successfully!');
      } else {
        alert('Submission failed: ' + result.message);
      }
    } catch (err) {
      console.error(err);
      alert('Network error'+err);
    }
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', minHeight: '100vh', padding: '40px', display: 'flex', justifyContent: 'center' }} className='bg-white'>
      <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '20px', padding: '40px', maxWidth: '500px', color: '#fff', width: '100%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: '800', marginBottom: '30px' }}>Create your profile.</h2>

        <label>Full Name <span style={{ color: 'red' }}>*</span></label>
        <input type="text" name="fullname" required onChange={handleChange} style={inputStyle} />

        <label>Email ID <span style={{ color: 'red' }}>*</span></label>
        <input type="email" name="email" required onChange={handleChange} style={inputStyle} />
        <p style={descriptionStyle}>(We’ll send relevant jobs and updates to this email)</p>

        <label>Password <span style={{ color: 'red' }}>*</span></label>
        <input type="password" name="password" minLength={6} required onChange={handleChange} style={inputStyle} />
        <p style={descriptionStyle}>(This helps your account stay protected)</p>

        <label>Mobile number <span style={{ color: 'red' }}>*</span></label>
        <input type="tel" name="mobile" pattern="(\+91)?[0-9]{10}" required onChange={handleChange} style={inputStyle} />
        <p style={descriptionStyle}>(Recruiters will contact you on this number)</p>

        <label>Work Status <span style={{ color: 'red' }}>*</span></label>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <label style={statusStyle}>
            <input type="radio" name="work_status" value="experienced" required onChange={handleChange} />
            I’m experienced
            <small style={smallStyle}>(I have work experience excluding internships)</small>
          </label>
          <label style={statusStyle}>
            <input type="radio" name="work_status" value="fresher" onChange={handleChange} />
            I’m a fresher
            <small style={smallStyle}>(I am a student / Haven’t worked after graduation)</small>
          </label>
        </div>

        <label>Current location <span style={{ color: 'red' }}>*</span></label>
        <input type="text" name="location" required onChange={handleChange} style={inputStyle} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <input type="checkbox" name="updates" onChange={handleChange} />
          <label>Send me important updates & promotions</label>
        </div>

        <button type="submit" style={buttonStyle}>Register</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '16px',
  border: 'none',
  borderRadius: '20px',
  backgroundColor: '#d9d9d9',
  fontSize: '16px',
  color: '#333',
};

const descriptionStyle = {
  fontSize: '14px',
  color: '#ccc',
  margin: '-12px 0 16px 0',
};

const statusStyle = {
  flex: 1,
  backgroundColor: '#d9d9d9',
  borderRadius: '20px',
  padding: '16px',
  color: '#4b4a4a',
  fontSize: '16px',
  textAlign: 'center',
  fontWeight: '800',
  cursor: 'pointer',
  userSelect: 'none',
};

const smallStyle = {
  fontWeight: '400',
  fontSize: '14px',
  display: 'block',
  marginTop: '6px',
};

const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '14px 0',
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#ffffff',
  background: 'linear-gradient(to right, #04b9ff, #0468ff)',
  border: 'none',
  borderRadius: '50px',
  boxShadow: '0 0 20px rgba(4, 105, 255, 0.5)',
  cursor: 'pointer',
};
