'use client'
import Link from 'next/link'
import './about.css'
import React from 'react'
import { usePathname } from 'next/navigation'


function layout({ children }) {
    const pages = ['/about/aboutCollege', '/about/aboutStudent']
    const pathName = usePathname()
    console.log(pathName)
    return (
        <div>
            {/* //* Conditional Layout */}
            {/* {pathName != "/about/aboutStudent" ? */}
            {!pages.includes(pathName) ?
                < ul className='login-list'>
                    <li><Link href={'/'}>Home Page</Link></li>
                    <li><Link href={"/about/aboutCollege"}>College Section</Link></li>
                    <li><Link href={"/about/aboutStudent"}>Student Section</Link></li>
                    <li><Link href={"/about"}>About Page</Link></li>
                </ul> : <button><Link href={'/about'}>Go to Main login Page</Link></button>
            }
            {children}
            <h1>Footer</h1>
        </div >
    )
}

export default layout