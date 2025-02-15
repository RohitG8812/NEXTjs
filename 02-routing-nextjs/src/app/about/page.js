'use client'
import React from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

function page() {
    const router = useRouter()
    const handleBtnClick = (name) => {
        router.push(name)
    }
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>About Page</h1>
                <button onClick={() => handleBtnClick('/')}>Go to HomePage</button>
            </main>
        </div>
    )
}

export default page