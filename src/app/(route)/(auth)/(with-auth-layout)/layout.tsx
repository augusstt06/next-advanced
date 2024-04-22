import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <h2>Inner Layout</h2>
      {children}
    </section>
  )
}
export default AuthLayout
