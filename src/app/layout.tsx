import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raghu Manohar Sakuru — Technical Program Manager & DataOps Engineer',
  description: 'Senior TPM and DataOps engineer with 9+ years building production-scale data infrastructure at Apple. Specializing in cloud-native pipelines, CI/CD automation, and Gen AI integration.',
  keywords: ['Technical Program Manager', 'DataOps', 'MLOps', 'AWS', 'Apple', 'Data Engineering', 'DevOps'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
