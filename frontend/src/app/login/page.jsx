'use client';
import { useState } from 'react';
import { loginUser } from '../lib/api';
import { useAuth } from '../components/AuthProvider';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '' });
  const { login } = useAuth();
  const router = useRouter();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser(form);

    if (data.token) {
      const token = data.token;

      // decode token just to get role/id (or rely on your backend to return that directly)
      const payload = JSON.parse(atob(token.split('.')[1]));
      login(token, payload);

      router.push(payload.role === 'admin' ? '/admin' : '/user');
    } else {
      alert(data.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}
