'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
  const router = useRouter()

  const handleClick = (name) => {
    router.push(name)
  }
  return (
    <main>
      <div>Login Page</div>
      <br /><br />
      <button onClick={() => handleClick('/login/studentLogin')}>Go to StudentLogin</button>
      <br /><br />
      <button onClick={() => handleClick('/login/teacherLogin')}>Go to TeacherLogin</button>
    </main>
  )
}

export default page