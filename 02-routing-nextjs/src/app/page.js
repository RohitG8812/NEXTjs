'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const handleBtnClick = (name) => {
    router.push(name)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>HOME PAGE</h1>
        {/* //? Linking */}
        <Link href={"/login"}>Go to Login Page</Link>
        <Link href={"/about"}>Go to About Page</Link>

        {/* //? Navigation  */}
        <button onClick={() => handleBtnClick("/login")}>Go To Login Page</button>
        <button onClick={() => handleBtnClick('/about')}>Go To About Page</button>
      </main>
    </div>
  );
}
