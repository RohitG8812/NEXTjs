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

    if (inputValue === "" || isNaN(inputValue)) {
      setNegative(false);
      setResult([]);
      return;
    }

    let parsedValue = parseInt(inputValue)

    if (parsedValue < 0) {
      setNegative(true)
    } else {
      setNegative(false)
      nextThreeNumbers(parsedValue)
    }
  }

  const nextThreeNumbers = (num) => {
    setResult([])
    let resultOf = []
    let firstNum = num
    for (let i = 1; i <= 3; i++) {
      resultOf.push(firstNum + i * 2)
    }
    setResult(resultOf)
  }

  console.log(value)
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>HOME PAGE</h1>
        <input type="number" placeholder="Placeholder" value={value} onChange={handleInputChange} />
        <p>
          {negative ? <p style={{ color: 'red' }}>Negative Number Not allowed</p> : <p>{result.join(", ")}</p>}
        </p>
      </main>
    </div>
  );
}
