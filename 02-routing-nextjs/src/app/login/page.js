'use client'
import React from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

function page() {
    const router = useRouter()
    const handleOpenAboutPage = () => {
        router.push('/about')
    }
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Login Page</h1>
                <button onClick={handleOpenAboutPage}>About Page</button>
            </main>
        </div>
    )
}

export default page