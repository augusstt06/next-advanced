/**
 * Layout : 여러 페이지간에 공유되는 UI를 선언하는 파일 (중첩이 가능하다).
 * Template : Layout과 유사하지만, 자식 요소마다 새로운 인스턴스를 생성한다. (DOM 요소가 새로 생성된다는 의미!)
 * ---> Template를 공유하는 페이지사이를 이동해도 새로운 인스턴스가 생성되므로, useEffect나 useState에 의존하는 컴포넌트를 생성할때 용이하다.
 * 📌 정리 📌
 * Layout은 UI 생성에 집중한 키워드로써, 여러 페이지간의 공통된 UI (Header, footer etc...)를 사용하기 위해 사용된다.
 * Template는 페이지의 특정 컨텐츠를 생성하는데 집중한 키워드로써, 여러 페이지에서 재사용 가능한 특정 부분을 정의하기 위해 사용된다..
 *
 */

'use client'
import React, { type ChangeEvent, useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'ForgotPassword', href: '/forgot-password' },
]
const AuthTemplate = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const [inputValue, setInputValue] = useState<string>('')
  return (
    <section>
      <div>
        <input
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value)
          }}
        />
      </div>
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
      {children}
    </section>
  )
}

export default AuthTemplate
