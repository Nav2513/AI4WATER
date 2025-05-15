'use client';
import { useAuth } from '../components/AuthProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/login');
    }
  }, [user]);

  return user?.role === 'admin' ? <div>Welcome Admin</div> : null;
}
