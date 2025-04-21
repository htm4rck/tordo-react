// src/app/(app)/layout.tsx
'use client';

import { ReactNode } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';

export default function AppLayout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
