'use client';
import { useState } from "react";
import styles from "./page.module.css";


//* passing Props
// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <h1>Home Page</h1>
//         <User name={"Anil"} />
//         <User name={"Rohit"} />
//         <User name={"Raj"} />
//       </main>
//     </div>
//   );
// }


// const User = (props) => {
//   return (
//     <div>
//       <h2>User Name is {props.name}</h2>
//     </div>
//   )
// }

export default function Home() {
  const [name, setName] = useState('Anil')

  const handleNameChange = (name) => {
    // setName("Rohit")
    setName(name)
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>UserName is {name}</h2>
        {/* <button onClick={handleNameChange}>Change Name</button> */}
        <button onClick={() => handleNameChange("Raj")}>Change Name</button>
      </main>
    </div>
  )
}