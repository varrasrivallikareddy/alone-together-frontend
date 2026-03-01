'use client';

import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email.');
      return;
    }

    // For now just show message
    setMessage('OTP will be sent to your email (backend integration next).');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'black',
        color: '#f5f5f5',
        padding: '2rem'
      }}
    >
      <h1 style={{ marginBottom: '1rem' }}>Login</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          gap: '1rem'
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: '0.75rem',
            borderRadius: '8px',
            border: 'none',
            outline: 'none'
          }}
        />

        <button
          type="submit"
          style={{
            padding: '0.75rem',
            background: '#d4af37',
            color: 'black',
            border: 'none',
            borderRadius: '50px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Send OTP
        </button>
      </form>

      {message && (
        <p style={{ marginTop: '1rem', opacity: 0.8 }}>{message}</p>
      )}
    </div>
  );
}
