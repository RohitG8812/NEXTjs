import Link from 'next/link'
import './about.css'
import React from 'react'

function layout({ children }) {
    return (
        <div>
            <ul className='login-list'>
                <li><Link href={'/'}>Home Page</Link></li>
                <li><Link href={"/about/aboutCollege"}>College Section</Link></li>
                <li><Link href={"/about/aboutStudent"}>Student Section</Link></li>
                <li><Link href={"/about"}>About Page</Link></li>
            </ul>
            {children}
            <h1>Footer</h1>
        </div>
    )
}

export default layout