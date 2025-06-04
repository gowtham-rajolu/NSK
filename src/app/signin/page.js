'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Import useRouter

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter(); // ✅ Initialize router

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Loading...');

    const res = await fetch('/api/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('Signed in successfully!');
      console.log(data.user);

      // ✅ Redirect to Home after success
      router.push('/Home'); // for smooth scrolling
      // OR use: router.push('/Home'); if it's a separate route/page
    } else {
      setMessage(`${data.error}`);
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Sign In
        </button>
      </form>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
}
