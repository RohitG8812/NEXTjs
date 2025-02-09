'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [value, setValue] = useState("")
  const [negative, setNegative] = useState(false)
  const [result, setResult] = useState([])

  const handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
    nextThreeNumbers(value)
    handleNegative(value)
  }

  const handleNegative = (num) => {
    if (num < 0) {
      setNegative(true)
    } else {
      setNegative(false)
    }
  }

  const nextThreeNumbers = (num) => {
    setResult([])
    let firstNum = num + 2
    for (let i = 1; i <= 3; i++) {
      setResult((prev) => [...prev, firstNum])
      firstNum += 2
    }
  }

  console.log(value)
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>HOME PAGE</h1>
        <input type="number" placeholder="Placeholder" value={value} onChange={(e) => { handleInputChange(e), negativeValue() }} />
        <p>
          {negative ? <p style={{ color: 'red' }}>Negative Number Not allowed</p> : <p>{result.toString()}</p>}
        </p>
      </main>
    </div>
  );
}
