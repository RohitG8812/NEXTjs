import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <main>
      <div>About Page</div>
      <br />
      <Link href={"/about/aboutCollege"}>Go To About College</Link>
      <br /><br />
      <Link href={"/about/aboutStudent"}>Go To About Student</Link>
    </main>
  )
}

export default page