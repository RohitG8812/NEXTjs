'use client'
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home Page</h1>
        <Link href={'/about'}>About Page(Common Layout)</Link>
        <Link href={'/login'}>Login Page</Link>
        <br />
        <Link href={"/about/aboutCollege"}>Go To About College</Link>
        <br />
        <Link href={"/about/aboutStudent"}>Go To About Student</Link>
        <Link href={"/dynamicRouting"}>Go To Student List</Link>
        {/* <Link href={"/dynamicRoute"}>Go To Student List</Link> */}
      </main>
    </div>
  );
}
