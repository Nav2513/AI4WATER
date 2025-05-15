'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthProvider';

const WithRole = ({ roles, children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !roles.includes(user.role)) {
      router.push('/unauthorized');
    }
  }, [user]);

  if (!user || !roles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
};

export default WithRole;
