// src/app/layout.tsx
import './globals.css';
import ProviderWrapper from './ProviderWrapper';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Able Pro Dashboard',
  description: 'Dashboard built with Able Pro and Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
    <body>
    <ProviderWrapper>{children}</ProviderWrapper>
    </body>
    </html>
  );
}