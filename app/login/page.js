'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = "https://alone-together-backend.onrender.com";

  const sendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(`${API_URL}/api/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (res.ok) {
        setStep(2);
        setMessage('OTP sent to your email.');
      } else {
        setMessage(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setMessage('Server error. Try again.');
    }

    setLoading(false);
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(`${API_URL}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        router.push('/chat');
      } else {
        setMessage(data.message || 'Invalid OTP.');
      }
    } catch (err) {
      setMessage('Server error. Try again.');
    }

    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'black',
      color: '#f5f5f5',
      padding: '2rem'
    }}>
      <h1 style={{ marginBottom: '1rem' }}>Login</h1>

      {step === 1 && (
        <form onSubmit={sendOTP} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '0.75rem', borderRadius: '8px', border: 'none' }}
          />

          <button
            type="submit"
            disabled={loading}
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
            {loading ? 'Sending...' : 'Send OTP'}
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={verifyOTP} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            style={{ padding: '0.75rem', borderRadius: '8px', border: 'none' }}
          />

          <button
            type="submit"
            disabled={loading}
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
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>
      )}

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
}
