// src/app/(dashboard)/layout.tsx
'use client';

import DashboardLayout from '../../layout/DashboardLayout';

export default function DashboardGroupLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
