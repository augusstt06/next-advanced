'use client'
import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'ForgotPassword', href: '/forgot-password' },
]
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  return (
    <section>
      {navLinks.map((data) => {
        const isActive = pathname.startsWith(data.href)
        return (
          <Link
            href={data.href}
            key={data.name}
            className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
          >
            {data.name}
          </Link>
        )
      })}
    </section>
  )
}

export default AuthLayout
